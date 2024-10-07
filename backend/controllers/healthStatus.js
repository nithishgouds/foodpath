const express = require('express');
const { consumedFoods } = require('./addFood');
const app = express();
app.use(express.json());


const foodEffects = {
    "idli": { oxygen: 5, serotonin: 3, glucose: 8 },
    "Upma": { oxygen: 4, serotonin: 2, glucose: 7 },
    "Bonda": { oxygen: -2, serotonin: 1, glucose: 18 },
    "Puri": { oxygen: -1, serotonin: 2, glucose: 16 },
    "Apple": { oxygen: 4, serotonin: 2, glucose: 10 },
    "Grapes": { oxygen: 3, serotonin: 3, glucose: 9 },
    "Beans": { oxygen: 6, serotonin: 5, glucose: 4 },
    "Fried Foods": { oxygen: -5, serotonin: -2, glucose: 16 },
    "Yogurt": { oxygen: 5, serotonin: 3, glucose: 4 },
    "Salmon": { oxygen: 7, serotonin: 3, glucose: 6 }
};


function assessOrganStatus(totalOxygen, totalSerotonin, totalGlucose) {
    if (totalOxygen > 5 && totalSerotonin > 5 && totalGlucose > 5) {
        return "Healthy";
    }

    const positiveLarge = (totalOxygen > 5 ? 1 : 0) + (totalSerotonin > 5 ? 1 : 0) + (totalGlucose > 5 ? 1 : 0);
    const positiveSmall = (totalOxygen >= 0 && totalOxygen <= 5 ? 1 : 0) + (totalSerotonin >= 0 && totalSerotonin <= 5 ? 1 : 0) + (totalGlucose >= 0 && totalGlucose <= 5 ? 1 : 0);

    if (positiveLarge === 2 || (positiveSmall === 3 && positiveLarge === 1)) {
        return "Slightly Healthy";
    }

    if ((totalOxygen > 0 || totalSerotonin > 0 || totalGlucose > 0) && !(totalOxygen < -5 || totalSerotonin < -5 || totalGlucose < -5)) {
        return "Neutral";
    }

    const negativeSmall = (totalOxygen < 0 && totalOxygen >= -5 ? 1 : 0) + (totalSerotonin < 0 && totalSerotonin >= -5 ? 1 : 0) + (totalGlucose < 0 && totalGlucose >= -5 ? 1 : 0);
    if (negativeSmall >= 2) {
        return "Slightly Unhealthy";
    }

    const negativeLarge = (totalOxygen < -5 ? 1 : 0) + (totalSerotonin < -5 ? 1 : 0) + (totalGlucose < -5 ? 1 : 0);
    if (negativeLarge >= 2) {
        return "Unhealthy";
    }

    return "Neutral";
}


app.get('/simulate-health-status', (req, res) => {
    let totalOxygen = 0;
    let totalSerotonin = 0;
    let totalGlucose = 0;

    consumedFoods.forEach(item => {
        const { foodItem, quantity } = item;
        const effects = foodEffects[foodItem];
        totalOxygen += effects.oxygen * quantity;
        totalSerotonin += effects.serotonin * quantity;
        totalGlucose += effects.glucose * quantity;
    });

    const liverStatus = assessOrganStatus(totalOxygen, totalSerotonin, totalGlucose);
    const heartOxygen = totalOxygen - 1, heartSerotonin = totalSerotonin - 2, heartGlucose = totalGlucose - 3;
    const heartStatus = assessOrganStatus(heartOxygen, heartSerotonin, heartGlucose);
    const brainOxygen = totalOxygen + 2, brainSerotonin = totalSerotonin + 3, brainGlucose = totalGlucose + 1;
    const brainStatus = assessOrganStatus(brainOxygen, brainSerotonin, brainGlucose);
    const intestineOxygen = totalOxygen + 1, intestineSerotonin = totalSerotonin - 1, intestineGlucose = totalGlucose + 2;
    const intestineStatus = assessOrganStatus(intestineOxygen, intestineSerotonin, intestineGlucose);
    const stomachOxygen = totalOxygen - 2, stomachSerotonin = totalSerotonin + 1, stomachGlucose = totalGlucose - 1;
    const stomachStatus = assessOrganStatus(stomachOxygen, stomachSerotonin, stomachGlucose);
    const lungsOxygen = totalOxygen, lungsSerotonin = totalSerotonin + 1, lungsGlucose = totalGlucose + 1;
    const lungsStatus = assessOrganStatus(lungsOxygen, lungsSerotonin, lungsGlucose);

    res.json({
        liver: { status: liverStatus, totalOxygen, totalSerotonin, totalGlucose },
        heart: { status: heartStatus, totalOxygen: heartOxygen, totalSerotonin: heartSerotonin, totalGlucose: heartGlucose },
        brain: { status: brainStatus, totalOxygen: brainOxygen, totalSerotonin: brainSerotonin, totalGlucose: brainGlucose },
        intestine: { status: intestineStatus, totalOxygen: intestineOxygen, totalSerotonin: intestineSerotonin, totalGlucose: intestineGlucose },
        stomach: { status: stomachStatus, totalOxygen: stomachOxygen, totalSerotonin: stomachSerotonin, totalGlucose: stomachGlucose },
        lungs: { status: lungsStatus, totalOxygen: lungsOxygen, totalSerotonin: lungsSerotonin, totalGlucose: lungsGlucose }
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Health Status Simulation running on port ${PORT}`);
});
