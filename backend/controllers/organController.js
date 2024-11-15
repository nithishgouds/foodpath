const express = require('express');
const app = express();
app.use(express.json());

const ConsumedFoods = require('../models/consumedFoodSchema'); // Ensure this path is correct
const { run } = require('../Gemini_API/modelStatusAPI'); // If you're using the AI function
const { runseparate } = require('../Gemini_API/separate_model_factors');
const { validatefood } = require('../Gemini_API/foodvalidation');

// Route handler for adding food items


const validfood = async (req, res) => {
    const {  foodItems } = req.body;

    console.log('Received body:', req.body);

    if (!foodItems) {
        return res.status(400).json({ error: 'Food items string is required.' });
    }

       try {
            let aiResponse = await validatefood(foodItems);

            console.log(aiResponse);
            aiResponse = JSON.parse(aiResponse);

            res.json({
                aiResponse: aiResponse
            });
        } catch (aiError) {
            res.status(500).json({ error: 'Error validatng food in AI', details: aiError.message });
        }


};


const addFood = async (req, res) => {
    const { email, foodItems } = req.body;

    console.log('Received body:', req.body);

    // Ensure email and foodItems are provided
    if (!email) {
        return res.status(400).json({ error: 'Email is required.' });
    }

    if (!foodItems) {
        return res.status(400).json({ error: 'Food items string is required.' });
    }

    // Split the foodItems string by spaces and filter out any empty items
    const foodItemsArray = foodItems.split(',').filter(item => item.trim() !== '');

    try {
        // Find the user in ConsumedFoods or create a new entry if not found
        let user = await ConsumedFoods.findOne({ email });

        if (!user) {
            // If the user doesn't exist, create a new user document with an empty consumedFoods array
            user = new ConsumedFoods({ email, consumedFoods: [] });
        }

        // Map the food items into the required format
        const newFoods = foodItemsArray.map(item => ({ foodItem: item }));

        // Add new food items to the consumedFoods array
        user.consumedFoods.push(...newFoods);

        // Save the updated user data to the database
        await user.save();

        // Prepare the food items as a string to send back
        const foodItemsString = user.consumedFoods.map(item => item.foodItem).join(' ');

        // Optionally process the food items with AI
        try {
            let aiResponse = await run(foodItemsString);
            let aiResponseSeparate= await runseparate(foodItemsString);


            aiResponse = JSON.parse(aiResponse);
            aiResponse = JSON.parse(aiResponseSeparate);

            res.json({
                
                message: 'Foods added successfully',
                consumedFoods: user.consumedFoods, // You can return the food items as a string
                aiResponse: aiResponse,
                aiResponseSeparate: aiResponseSeparate
            });
        } catch (aiError) {
            res.status(500).json({ error: 'Error processing food data in AI', details: aiError.message });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error adding food to the user account', details: error.message });
    }
};


const resetConsumedFoods= async(req,res)=>
{
    const { email }=req.body;

    if(!email)
    {
        return res.status(400).json({error:"Email required"});
    }
    try
    {
        let user=await ConsumedFoods.findOne({email});

        if(!user)
        {
            return res.status(400).json({error:"No user found"});
        }

        user.consumedFoods=[];

        await user.save();

        res.json
        (
            {
                message:'Reset foods successful',
                consumedFoods:user.consumedFoods
            }
        );

    } 
    catch(error)
    {
        res.status(500).json({error:'Error in resetting the consumed foods of the user',details:error.message});
    }
};

module.exports = { addFood , resetConsumedFoods,validfood };
