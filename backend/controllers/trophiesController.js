// const Trophies = require('../models/trophiesSchema');

// const updateBoolArrayAtIndex = async (email, index, value) => {
//   try {
    
//     if (index < 0 || index > 11) {
//       throw new Error('Index out of bounds. It should be between 0 and 11.');
//     }

//     const updatedDoc = await Trophies.findOneAndUpdate(
//       { email }, 
//       { $set: { [`boolArray.${index}`]: value } }, 
//       { new: true, upsert: true } 
//     );

//     if (!updatedDoc) {
//       throw new Error('No document found with the provided email.');
//     }

//     return updatedDoc;
//   } catch (error) {
//     console.error('Error updating boolArray:', error);
//     throw error;
//   }
// };

// const updateTrophy = async (req, res) => {
//   const { email, index, value } = req.body;

//   try {
//     const updatedDoc = await updateBoolArrayAtIndex(email, index, value);
//     res.status(200).json({ success: true, data: updatedDoc });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// module.exports = { updateTrophy };


const Trophies = require('../models/trophiesSchema');

const updateBoolArrayAtIndex = async (email, index, value) => {
  try {
    if (index < 0 || index > 11) {
      throw new Error('Index out of bounds. It should be between 0 and 11.');
    }

    const userDoc = await Trophies.findOne({ email });

    if (!userDoc) {
      // Create a new document if none exists and return default array
      const newDoc = await Trophies.create({
        email,
        boolArray: Array(12).fill(false), // Initialize with all false
      });
      return newDoc;
    }

    // Check if all elements in the array are false
    const allFalse = userDoc.boolArray.every((val) => val === false);
    if (allFalse) {
      return userDoc; // Return document without updates
    }

    // Update the specific index
    const updatedDoc = await Trophies.findOneAndUpdate(
      { email },
      { $set: { [boolArray.${index}]: value } },
      { new: true } // Return the updated document
    );

    return updatedDoc;
  } catch (error) {
    console.error('Error updating boolArray:', error);
    throw error;
  }
};

const updateTrophy = async (req, res) => {
  const { email, index, value } = req.body;

  try {
    const updatedDoc = await updateBoolArrayAtIndex(email, index, value);

    res.status(200).json({
      success: true,
      trophies: updatedDoc.boolArray || [], // Return boolArray or empty array if not present
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { updateTrophy };
