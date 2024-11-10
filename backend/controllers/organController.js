const express = require('express');
const app = express();
app.use(express.json());

const { Credentials } = require('../models/user');
const { run } = require('../Gemini_API/modelStatusAPI');

const addFood = async (req, res) => {
    const { foodItems } = req.body;

    if (!foodItems || !Array.isArray(foodItems) || foodItems.length === 0) {
        return res.status(400).json({ error: 'At least one food item is required.' });
    }

    const email = req.email;

    if (!email) {
        return res.status(400).json({ error: 'Email not found in token.' });
    }

    try {
       const user = await Credentials.findOne({ email });

       if (!user) {
           return res.status(404).json({ error: 'User not found.' });
       }

        const newFoods = foodItems.map(item => ({ foodItem: item }));

        user.consumedFoods.push(...newFoods);

        await user.save();

        const foodItemsString = user.consumedFoods.map(item => item.foodItem).join(' ');

        try {
            const aiResponse = await run(foodItemsString);

            res.json({
                message: 'Foods added successfully',
                consumedFoods: foodItemsString,
                aiResponse: aiResponse
                
            });
        } catch (aiError) {
            res.status(500).json({ error: 'Error processing food data in AI', details: aiError.message });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error adding food to the user account' });
    }
};

const resetFoods = async (req, res) => {
    const email = req.email;

    if (!email) {
        return res.status(400).json({ error: 'Email not found in token.' });
    }

    try {
        const user = await Credentials.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        user.consumedFoods = [];

        await user.save();

        res.json({
            message: 'All foods have been reset successfully.',
            consumedFoods: user.consumedFoods
        });
    } catch (error) {
        res.status(500).json({ error: 'Error resetting food data for the user account' });
    }
};

module.exports = { addFood, resetFoods };