const express = require('express');
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

    res.json({ message: 'Food item added successfully!', consumedFoods });
});

module.exports = { app, consumedFoods };

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Add Food service running on port ${PORT}`);
});
