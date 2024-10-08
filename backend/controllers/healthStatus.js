// organStatus.js
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

// Function to assess organ status based on total values
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

// GET route to return only the status of each organ
app.get('/organ-status', (req, res) => {
    let totalOxygen = 0;
    let totalSerotonin = 0;
    let totalGlucose = 0;

    // Compute total values from consumed foods
    consumedFoods.forEach(item => {
        const { foodItem, quantity } = item;
        const effects = foodEffects[foodItem];
        if (effects) {
            totalOxygen += effects.oxygen * quantity;
            totalSerotonin += effects.serotonin * quantity;
            totalGlucose += effects.glucose * quantity;
        }
    });

    // Compute organ statuses
    const liverStatus = assessOrganStatus(totalOxygen, totalSerotonin, totalGlucose);
    const heartStatus = assessOrganStatus(totalOxygen - 1, totalSerotonin - 2, totalGlucose - 3);
    const brainStatus = assessOrganStatus(totalOxygen + 2, totalSerotonin + 3, totalGlucose + 1);
    const intestineStatus = assessOrganStatus(totalOxygen + 1, totalSerotonin - 1, totalGlucose + 2);
    const stomachStatus = assessOrganStatus(totalOxygen - 2, totalSerotonin + 1, totalGlucose - 1);
    const lungsStatus = assessOrganStatus(totalOxygen, totalSerotonin + 1, totalGlucose + 1);

    // Send only the status of all organs as a JSON response
    res.json({
        liver: liverStatus,
        heart: heartStatus,
        brain: brainStatus,
        intestine: intestineStatus,
        stomach: stomachStatus,
        lungs: lungsStatus
    });
});

module.exports = app;
