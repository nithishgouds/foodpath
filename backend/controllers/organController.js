const express = require('express');
const app = express();
app.use(express.json());


const foodEffects = {
    "Grapefruit": { oxygen: 7, serotonin: 3, glucose: 5 },
    "Garlic": { oxygen: 6, serotonin: 4, glucose: 4 },
    "Yogurt": { oxygen: 8, serotonin: 5, glucose: 6 },
    "Spicy Foods": { oxygen: -6, serotonin: -2, glucose: 10 },
    "Caffeinated Beverages": { oxygen: -5, serotonin: -3, glucose: 8 },
    "Whole Grains": { oxygen: 7, serotonin: 4, glucose: 5 },
    "Alcohol": { oxygen: -8, serotonin: -3, glucose: 20 },
    "Sugary Foods": { oxygen: -5, serotonin: -2, glucose: 25 }
};


let consumedFoods = [];


app.post('/add-food', (req, res) => {
    const { foodItem, quantity } = req.body;


    if (!foodItem || !quantity) {
        return res.status(400).json({ error: 'Food item and quantity are required.' });
    }

    if (!foodEffects[foodItem]) {
        return res.status(400).json({ error: 'Unknown food item.' });
    }

    consumedFoods.push({ foodItem, quantity });


    res.json({ consumedFoods });
});

function assessLiverStatus(totalOxygen, totalSerotonin, totalGlucose) {
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


app.get('/liver-status', (req, res) => {
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


    const liverStatus = assessLiverStatus(totalOxygen, totalSerotonin, totalGlucose);


    res.json({ status: liverStatus, totalOxygen, totalSerotonin, totalGlucose });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
