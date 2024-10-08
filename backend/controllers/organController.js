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


// controllers/organController.js
let consumedFoods = [];

const addFood = (req, res) => {
    const { foodItem, quantity } = req.body;

    if (!foodItem || !quantity) {
        return res.status(400).json({ error: 'Food item and quantity are required.' });
    }

    // Create a new object for the added food item
    const newFood = { foodItem, quantity };
    // Add the new food item to the consumedFoods array
    consumedFoods.push(newFood);

    // Respond with a success message and the newly added food item
    res.json({ 
        message: 'Food added successfully', 
        consumedFoods // Send back the entire consumedFoods array
    });
};

const resetConsumedFoods = (req, res) => {
    // Reset the consumed foods array
    consumedFoods = [];

    // Reset the individual organ statuses to default values
    const resetStatuses = {
        liver: {
            status: "Neutral",
            oxygen: 0,
            serotonin: 0,
            glucose: 0
        },
        heart: {
            status: "Neutral",
            oxygen: 0,
            serotonin: 0,
            glucose: 0
        },
        brain: {
            status: "Neutral",
            oxygen: 0,
            serotonin: 0,
            glucose: 0
        },
        intestine: {
            status: "Neutral",
            oxygen: 0,
            serotonin: 0,
            glucose: 0
        },
        stomach: {
            status: "Neutral",
            oxygen: 0,
            serotonin: 0,
            glucose: 0
        },
        lungs: {
            status: "Neutral",
            oxygen: 0,
            serotonin: 0,
            glucose: 0
        }
    };

    // Send a response with the reset data
    res.status(200).json({
        message: "Consumed foods and organ statuses reset successfully.",
        resetStatuses
    });
};


// Export the functions for use in routes
module.exports = { addFood, resetConsumedFoods, consumedFoods };



// let consumedFoods = [];
// // controllers/organController.js
// const addFood = (req, res) => {
//     const { foodItem, quantity } = req.body;

//     if (!foodItem || !quantity) {
//         return res.status(400).json({ error: 'Food item and quantity are required.' });
//     }

//     // Add the food item logic here...

//     res.json({ message: 'Food added successfully' });
// };

// const getLiverStatus = (req, res) => {
//     // Logic for getting liver status
// };

// module.exports = { addFood, getLiverStatus };


// app.post('/add-food', (req, res) => {
//     const { foodItem, quantity } = req.body;

//     if (!foodItem || !quantity) {
//         return res.status(400).json({ error: 'Food item and quantity are required.' });
//     }

//     if (!foodEffects[foodItem]) {
//         return res.status(400).json({ error: 'Unknown food item.' });
//     }

   
//     consumedFoods.push({ foodItem, quantity });

//     res.json({ message: 'Food item added successfully!', consumedFoods });
// });

// module.exports = { app, consumedFoods };

// const PORT = 3001;
// app.listen(PORT, () => {
//     console.log(`Add Food service running on port ${PORT}`);
// });
