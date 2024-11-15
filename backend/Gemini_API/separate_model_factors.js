require('dotenv').config({ path: '../frontend/.env' });
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "For each food item provided by the user, return a simplified nutrient analysis, focusing on the following components. For each nutrient, provide a brief indication of its level, in the following format:\n\nNeurotransmitter Levels: Indicate general impact, e.g., \"increase\", \"decrease\", or \"no significant change\".\nAmino Acids: \"high\", \"moderate\", or \"low\".\nVitamin C: Value in mg.\nCarotenoids: \"high\", \"moderate\", or \"low\".\nPotassium: Value in mg.\nPhosphorus: Value in mg.\nFats: Value in grams for total fats.\nCholine: Value in mg.\nPolyphenols: \"high\", \"moderate\", or \"low\".\nZinc: Value in mg.\nPrebiotics: \"present\" or \"not present\".\nMagnesium: Value in mg.\nPlant Sterols: \"high\", \"moderate\", or \"low\".\nContext: Keep explanations minimal. The focus is on giving a quick summary of each nutrient or factor relative to the typical dietary needs of a balanced adult diet.\n\nOutput Format: Structure the output in JSON format with the following schema for each food item:\n{\n  \"nutrients\": {\n    \"Neurotransmitter_Levels\": \"change_level\",\n    \"Amino_Acids\": \"level\",\n    \"Vitamin_C\": \"value_in_mg\",\n    \"Carotenoids\": \"level\",\n    \"Potassium\": \"value_in_mg\",\n    \"Phosphorus\": \"value_in_mg\",\n    \"Fats\": \"value_in_g\",\n    \"Choline\": \"value_in_mg\",\n    \"Polyphenols\": \"level\",\n    \"Zinc\": \"value_in_mg\",\n    \"Prebiotics\": \"present_or_not_present\",\n    \"Magnesium\": \"value_in_mg\",\n    \"Plant_Sterols\": \"level\"\n  }\n}",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  async function runseparate(Foods_eaten) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "burger pizza"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"nutrients\": {\"Neurotransmitter_Levels\": \"no significant change\", \"Amino_Acids\": \"moderate\", \"Vitamin_C\": \"low\", \"Carotenoids\": \"low\", \"Potassium\": \"moderate\", \"Phosphorus\": \"moderate\", \"Fats\": \"moderate\", \"Choline\": \"moderate\", \"Polyphenols\": \"low\", \"Zinc\": \"moderate\", \"Prebiotics\": \"not present\", \"Magnesium\": \"moderate\", \"Plant_Sterols\": \"low\"}}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "1000 burgers\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"nutrients\": {\"Neurotransmitter_Levels\": \"no significant change\", \"Amino_Acids\": \"high\", \"Vitamin_C\": \"low\", \"Carotenoids\": \"low\", \"Potassium\": \"moderate\", \"Phosphorus\": \"moderate\", \"Fats\": \"high\", \"Choline\": \"moderate\", \"Polyphenols\": \"low\", \"Zinc\": \"moderate\", \"Prebiotics\": \"not present\", \"Magnesium\": \"moderate\", \"Plant_Sterols\": \"low\"}}\n\n```"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(`${Foods_eaten}`);
    console.log(result.response.text());
    return result.response.text();
  }
  module.exports={runseparate};
  
 // runseperate("bonda");