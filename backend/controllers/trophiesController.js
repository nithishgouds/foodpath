
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());




const Trophies = require('../models/trophiesSchema');

const updateBoolArrayAtIndex = async (email, index, value) => {
  try {
    if (index < 0 || index > 12) {
      throw new Error('Index out of bounds. It should be between 0 and 11.');
    }

    const userDoc = await Trophies.findOne({ email });

    if (!userDoc) {
      // Create a new document if none exists and return the boolArray
      const newDoc = await Trophies.create({
        email,
        boolArray: Array(13).fill(false), // Initialize with all false
      });
      return newDoc.boolArray; // Return the boolArray after creating the new document
    }

    // Check if all elements in the array are false
    const allFalse = userDoc.boolArray.every((val) => val === false);
    // if (allFalse) {
    //   return userDoc.boolArray; // Return the original array without updates
    // }

    // Update the specific index
    const updatedDoc = await Trophies.findOneAndUpdate(
      { email },
      { $set: { [`boolArray.${index}`]: value } },
      { new: true } // Return the updated document
    );

    return updatedDoc.boolArray; // Return the updated boolArray
  } catch (error) {
    console.error('Error updating boolArray:', error);
    throw error;
  }
};

const updateTrophy = async (req, res) => {
  console.log('entered the achievements function');
  const { email, index, value } = req.body;
  console.log(`Incoming request to: ${req.url}`);

  try {
    const updatedBoolArray = await updateBoolArrayAtIndex(email, index, value);

    res.status(200).json({
      success: true,
      trophies: updatedBoolArray || [], // Return boolArray or empty array if not present
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { updateTrophy };
