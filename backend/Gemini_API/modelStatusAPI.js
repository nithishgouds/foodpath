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
    systemInstruction: "Analyze the impact of consuming [food item] on human health. Provide a detailed breakdown of its effects on various organs, including the brain, heart, liver, lungs, stomach, kidneys, and intestines. Quantify these effects by assigning a health status rating (0-4) to each organ, where 0 indicates severe damage, 1 indicates optimal health, 2 indicates moderate health, 3 indicates moderate damage, and 4 indicates severe damage. Additionally, provide estimated values for oxygen levels, blood glucose levels and calorie levels in each organ post-consumption compared to normal human body values. Present the results solely in a JSON format.",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  async function run(Foods_eaten) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "status burger"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "It's important to note that the impact of a status burger on human health depends on several factors, including:\n\n* **Frequency of consumption:** A single status burger is unlikely to cause significant harm, but regular consumption can contribute to health problems.\n* **Size and ingredients:**  A larger burger with high-fat toppings will have a greater impact than a smaller burger with leaner ingredients.\n* **Overall diet:**  The burger's effect is also influenced by the rest of the diet. A balanced diet can help mitigate the negative effects of occasional unhealthy meals.\n\nGiven the variability in the impact of a status burger, it's not possible to provide a precise and accurate health status rating and quantifiable values for each organ. However, I can offer a generalized analysis based on typical status burger components like:\n\n* **Beef patty:**  High in saturated fat, which can contribute to heart disease.\n* **Cheese:**  High in saturated fat and sodium.\n* **Bun:**  High in carbohydrates and often contains trans fats.\n* **Condiments:**  May contain high amounts of sugar, salt, and preservatives.\n\n**Here is a hypothetical analysis, emphasizing that it is a generalization:**\n\n```json\n{\n  \"health_status\": {\n    \"brain\": {\n      \"rating\": 2,\n      \"notes\": \"Short-term spike in blood sugar may impact cognitive function. Chronic high-fat diet can contribute to cognitive decline.\"\n    },\n    \"heart\": {\n      \"rating\": 2,\n      \"notes\": \"High saturated fat can contribute to heart disease over time.\"\n    },\n    \"liver\": {\n      \"rating\": 2,\n      \"notes\": \"High fat intake can overload the liver, potentially leading to fatty liver disease.\"\n    },\n    \"lungs\": {\n      \"rating\": 1,\n      \"notes\": \"Minimal direct impact, but overall diet can affect lung health.\"\n    },\n    \"stomach\": {\n      \"rating\": 2,\n      \"notes\": \"Can cause bloating, indigestion, and discomfort due to high fat content.\"\n    },\n    \"kidneys\": {\n      \"rating\": 2,\n      \"notes\": \"High sodium intake can strain the kidneys.\"\n    },\n    \"intestines\": {\n      \"rating\": 2,\n      \"notes\": \"High fiber in the bun can cause gas and bloating. High fat can slow digestion.\"\n    }\n  },\n  \"post_consumption_values\": {\n    \"oxygen_levels\": {\n      \"brain\": \"Minimal change\",\n      \"heart\": \"Minimal change\",\n      \"liver\": \"Minimal change\",\n      \"lungs\": \"Minimal change\",\n      \"stomach\": \"Minimal change\",\n      \"kidneys\": \"Minimal change\",\n      \"intestines\": \"Minimal change\"\n    },\n    \"blood_glucose_levels\": {\n      \"brain\": \"Spike in blood sugar followed by a dip\",\n      \"heart\": \"Slight increase\",\n      \"liver\": \"Increased glucose storage\",\n      \"lungs\": \"Minimal change\",\n      \"stomach\": \"Minimal change\",\n      \"kidneys\": \"Increased glucose filtration\",\n      \"intestines\": \"Minimal change\"\n    },\n    \"calorie_levels\": {\n      \"brain\": \"Minimal change\",\n      \"heart\": \"Minimal change\",\n      \"liver\": \"Increased calorie storage\",\n      \"lungs\": \"Minimal change\",\n      \"stomach\": \"Temporary increase\",\n      \"kidneys\": \"Minimal change\",\n      \"intestines\": \"Temporary increase\"\n    }\n  }\n}\n```\n\n**It's essential to understand that this is a hypothetical analysis. Consulting a healthcare professional for personalized advice regarding the impact of food on your individual health is crucial.** \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status burger"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"health_status\": {\n    \"brain\": {\n      \"rating\": 2,\n      \"notes\": \"Short-term spike in blood sugar may impact cognitive function, particularly in individuals with insulin resistance. However, the impact is transient. Regular consumption of high-fat, processed foods can contribute to long-term cognitive decline.\"\n    },\n    \"heart\": {\n      \"rating\": 2,\n      \"notes\": \"High saturated fat and sodium content can increase risk of heart disease over time, especially with frequent consumption. One burger is unlikely to have a significant immediate impact.\"\n    },\n    \"liver\": {\n      \"rating\": 2,\n      \"notes\": \"High fat and processed ingredients can overload the liver, potentially contributing to fatty liver disease in the long term.  A single burger is unlikely to cause immediate harm.\"\n    },\n    \"lungs\": {\n      \"rating\": 1,\n      \"notes\": \"Minimal direct impact, but overall diet and lifestyle choices can influence lung health.\"\n    },\n    \"stomach\": {\n      \"rating\": 2,\n      \"notes\": \"Can cause bloating, indigestion, and discomfort due to high fat content, especially if consumed quickly. Regular consumption can lead to issues with digestive health.\"\n    },\n    \"kidneys\": {\n      \"rating\": 2,\n      \"notes\": \"High sodium content can strain the kidneys, potentially leading to hypertension and other kidney issues over time. One burger is unlikely to cause immediate harm.\"\n    },\n    \"intestines\": {\n      \"rating\": 2,\n      \"notes\": \"High fiber in the bun can cause gas and bloating. High fat content can slow digestion and may contribute to microbiome imbalances over time.\"\n    }\n  },\n  \"post_consumption_values\": {\n    \"oxygen_levels\": {\n      \"brain\": \"Minimal change\",\n      \"heart\": \"Minimal change\",\n      \"liver\": \"Minimal change\",\n      \"lungs\": \"Minimal change\",\n      \"stomach\": \"Minimal change\",\n      \"kidneys\": \"Minimal change\",\n      \"intestines\": \"Minimal change\"\n    },\n    \"blood_glucose_levels\": {\n      \"brain\": \"Spike in blood glucose levels followed by a dip\",\n      \"heart\": \"Slight increase\",\n      \"liver\": \"Increased glucose storage\",\n      \"lungs\": \"Minimal change\",\n      \"stomach\": \"Minimal change\",\n      \"kidneys\": \"Increased glucose filtration\",\n      \"intestines\": \"Minimal change\"\n    },\n    \"calorie_levels\": {\n      \"brain\": \"Minimal change\",\n      \"heart\": \"Minimal change\",\n      \"liver\": \"Increased calorie storage\",\n      \"lungs\": \"Minimal change\",\n      \"stomach\": \"Temporary increase\",\n      \"kidneys\": \"Minimal change\",\n      \"intestines\": \"Temporary increase\"\n    }\n  }\n}\n```\n\n**Important Considerations:**\n\n* **Individual Variation:** The impact of a status burger can vary significantly based on individual factors like age, genetics, existing health conditions, and overall diet.\n* **Frequency:**  A single status burger is unlikely to cause significant harm, but regular consumption can contribute to health problems.\n* **Ingredients:** The specific ingredients in the burger, including the type of meat, toppings, and bun, play a crucial role in its overall impact.\n* **Moderation and Balance:**  Occasional indulgence is acceptable, but maintaining a balanced diet rich in fruits, vegetables, and whole grains is essential for long-term health.\n\n**Please consult with a healthcare professional for personalized advice on the impact of food on your individual health.** \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status pizza burger"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n\"health_status\": {\n\"brain\": {\n\"rating\": 2,\n\"notes\": \"Short-term spike in blood sugar may impact cognitive function, particularly in individuals with insulin resistance. Regular consumption of high-fat, processed foods can contribute to long-term cognitive decline.\"\n},\n\"heart\": {\n\"rating\": 2,\n\"notes\": \"High saturated fat, sodium, and potentially trans fats can increase risk of heart disease over time, especially with frequent consumption. One pizza burger is unlikely to have a significant immediate impact.\"\n},\n\"liver\": {\n\"rating\": 2,\n\"notes\": \"High fat, processed ingredients, and potentially high sugar content can overload the liver, potentially contributing to fatty liver disease in the long term. A single pizza burger is unlikely to cause immediate harm.\"\n},\n\"lungs\": {\n\"rating\": 1,\n\"notes\": \"Minimal direct impact, but overall diet and lifestyle choices can influence lung health.\"\n},\n\"stomach\": {\n\"rating\": 2,\n\"notes\": \"Can cause bloating, indigestion, and discomfort due to high fat content, especially if consumed quickly. Regular consumption can lead to issues with digestive health.\"\n},\n\"kidneys\": {\n\"rating\": 2,\n\"notes\": \"High sodium content can strain the kidneys, potentially leading to hypertension and other kidney issues over time. One pizza burger is unlikely to cause immediate harm.\"\n},\n\"intestines\": {\n\"rating\": 2,\n\"notes\": \"High fiber in the bun can cause gas and bloating. High fat content can slow digestion and may contribute to microbiome imbalances over time.\"\n}\n},\n\"post_consumption_values\": {\n\"oxygen_levels\": {\n\"brain\": \"Minimal change\",\n\"heart\": \"Minimal change\",\n\"liver\": \"Minimal change\",\n\"lungs\": \"Minimal change\",\n\"stomach\": \"Minimal change\",\n\"kidneys\": \"Minimal change\",\n\"intestines\": \"Minimal change\"\n},\n\"blood_glucose_levels\": {\n\"brain\": \"Spike in blood glucose levels followed by a dip\",\n\"heart\": \"Slight increase\",\n\"liver\": \"Increased glucose storage\",\n\"lungs\": \"Minimal change\",\n\"stomach\": \"Minimal change\",\n\"kidneys\": \"Increased glucose filtration\",\n\"intestines\": \"Minimal change\"\n},\n\"calorie_levels\": {\n\"brain\": \"Minimal change\",\n\"heart\": \"Minimal change\",\n\"liver\": \"Increased calorie storage\",\n\"lungs\": \"Minimal change\",\n\"stomach\": \"Temporary increase\",\n\"kidneys\": \"Minimal change\",\n\"intestines\": \"Temporary increase\"\n}\n}\n}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status idly vada dosa"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n\"health_status\": {\n\"brain\": {\n\"rating\": 2,\n\"notes\": \"Idli and dosa provide complex carbohydrates and are generally considered good for brain health. However, the vada may contain higher amounts of fat and sodium, potentially impacting blood sugar levels and cognitive function in the short term. Regular consumption of a balanced diet, including fruits, vegetables, and whole grains, is crucial for long-term brain health.\"\n},\n\"heart\": {\n\"rating\": 2,\n\"notes\": \"Idli and dosa are relatively low in fat and cholesterol. However, the vada may contain higher amounts of saturated fat and sodium, which could potentially increase the risk of heart disease over time if consumed regularly. A balanced diet with plenty of fruits, vegetables, and whole grains is essential for heart health.\"\n},\n\"liver\": {\n\"rating\": 2,\n\"notes\": \"Idli and dosa are generally easy on the liver. The vada may contain higher amounts of fat and sodium, which can potentially overload the liver if consumed in excess. A balanced diet and regular exercise are important for liver health.\"\n},\n\"lungs\": {\n\"rating\": 1,\n\"notes\": \"Minimal direct impact. A balanced diet and exercise are important for overall respiratory health.\"\n},\n\"stomach\": {\n\"rating\": 2,\n\"notes\": \"Idli and dosa are generally easy to digest. The vada may be more difficult to digest due to its higher fat content. Eating in moderation and chewing thoroughly can aid digestion.\"\n},\n\"kidneys\": {\n\"rating\": 2,\n\"notes\": \"Idli and dosa are low in sodium. The vada may contain higher amounts of sodium, which can strain the kidneys if consumed regularly. Maintaining a balanced diet with moderate sodium intake is important for kidney health.\"\n},\n\"intestines\": {\n\"rating\": 2,\n\"notes\": \"Idli and dosa are good sources of fiber, which is beneficial for digestive health. The vada may contain less fiber and higher fat content, potentially impacting digestion. A balanced diet with adequate fiber intake is crucial for gut health.\"\n}\n},\n\"post_consumption_values\": {\n\"oxygen_levels\": {\n\"brain\": \"Minimal change\",\n\"heart\": \"Minimal change\",\n\"liver\": \"Minimal change\",\n\"lungs\": \"Minimal change\",\n\"stomach\": \"Minimal change\",\n\"kidneys\": \"Minimal change\",\n\"intestines\": \"Minimal change\"\n},\n\"blood_glucose_levels\": {\n\"brain\": \"Moderate increase in blood glucose levels followed by a gradual decrease\",\n\"heart\": \"Slight increase\",\n\"liver\": \"Increased glucose storage\",\n\"lungs\": \"Minimal change\",\n\"stomach\": \"Minimal change\",\n\"kidneys\": \"Increased glucose filtration\",\n\"intestines\": \"Minimal change\"\n},\n\"calorie_levels\": {\n\"brain\": \"Minimal change\",\n\"heart\": \"Minimal change\",\n\"liver\": \"Increased calorie storage\",\n\"lungs\": \"Minimal change\",\n\"stomach\": \"Temporary increase\",\n\"kidneys\": \"Minimal change\",\n\"intestines\": \"Temporary increase\"\n}\n}\n}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status panipuri"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n\"health_status\": {\n\"brain\": {\n\"rating\": 2,\n\"notes\": \"Panipuri provides a short-term energy boost due to the carbohydrates in the puri and the sugar in the pani. However, the high sodium content can negatively impact cognitive function, especially in individuals with pre-existing conditions. Long-term consumption of high-sodium foods can contribute to cognitive decline.\"\n},\n\"heart\": {\n\"rating\": 2,\n\"notes\": \"The high sodium content in panipuri can increase blood pressure, potentially contributing to cardiovascular problems over time.  Additionally, the fried puris contain unhealthy fats that can raise cholesterol levels, further increasing heart disease risk if consumed regularly.\"\n},\n\"liver\": {\n\"rating\": 2,\n\"notes\": \"High sodium intake can strain the liver, potentially leading to fatty liver disease.  The fried puris can also contribute to liver overload, especially with frequent consumption.\"\n},\n\"lungs\": {\n\"rating\": 1,\n\"notes\": \"Minimal direct impact.  A balanced diet and exercise are important for overall respiratory health.\"\n},\n\"stomach\": {\n\"rating\": 2,\n\"notes\": \"The spicy water and the fried puris can cause bloating, indigestion, and discomfort, especially if consumed in large quantities.  Regular consumption may lead to digestive issues.\"\n},\n\"kidneys\": {\n\"rating\": 2,\n\"notes\": \"The high sodium content can strain the kidneys, potentially leading to hypertension and other kidney problems over time.  Maintaining a balanced diet with moderate sodium intake is crucial for kidney health.\"\n},\n\"intestines\": {\n\"rating\": 2,\n\"notes\": \"The high sodium content and the fried puris can disrupt the gut microbiome and lead to digestive issues, especially with frequent consumption.  A balanced diet with adequate fiber intake is beneficial for gut health.\"\n}\n},\n\"post_consumption_values\": {\n\"oxygen_levels\": {\n\"brain\": \"Minimal change\",\n\"heart\": \"Minimal change\",\n\"liver\": \"Minimal change\",\n\"lungs\": \"Minimal change\",\n\"stomach\": \"Minimal change\",\n\"kidneys\": \"Minimal change\",\n\"intestines\": \"Minimal change\"\n},\n\"blood_glucose_levels\": {\n\"brain\": \"Spike in blood glucose levels followed by a dip\",\n\"heart\": \"Slight increase\",\n\"liver\": \"Increased glucose storage\",\n\"lungs\": \"Minimal change\",\n\"stomach\": \"Minimal change\",\n\"kidneys\": \"Increased glucose filtration\",\n\"intestines\": \"Minimal change\"\n},\n\"calorie_levels\": {\n\"brain\": \"Minimal change\",\n\"heart\": \"Minimal change\",\n\"liver\": \"Increased calorie storage\",\n\"lungs\": \"Minimal change\",\n\"stomach\": \"Temporary increase\",\n\"kidneys\": \"Minimal change\",\n\"intestines\": \"Temporary increase\"\n}\n}\n}\n\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status socks"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n\"health_status\": {\n\"brain\": {\n\"rating\": 1,\n\"notes\": \"Socks have no direct impact on brain health.\"\n},\n\"heart\": {\n\"rating\": 1,\n\"notes\": \"Socks have no direct impact on heart health.\"\n},\n\"liver\": {\n\"rating\": 1,\n\"notes\": \"Socks have no direct impact on liver health.\"\n},\n\"lungs\": {\n\"rating\": 1,\n\"notes\": \"Socks have no direct impact on lung health.\"\n},\n\"stomach\": {\n\"rating\": 1,\n\"notes\": \"Socks have no direct impact on stomach health.\"\n},\n\"kidneys\": {\n\"rating\": 1,\n\"notes\": \"Socks have no direct impact on kidney health.\"\n},\n\"intestines\": {\n\"rating\": 1,\n\"notes\": \"Socks have no direct impact on intestinal health.\"\n}\n},\n\"post_consumption_values\": {\n\"oxygen_levels\": {\n\"brain\": \"No change\",\n\"heart\": \"No change\",\n\"liver\": \"No change\",\n\"lungs\": \"No change\",\n\"stomach\": \"No change\",\n\"kidneys\": \"No change\",\n\"intestines\": \"No change\"\n},\n\"blood_glucose_levels\": {\n\"brain\": \"No change\",\n\"heart\": \"No change\",\n\"liver\": \"No change\",\n\"lungs\": \"No change\",\n\"stomach\": \"No change\",\n\"kidneys\": \"No change\",\n\"intestines\": \"No change\"\n},\n\"calorie_levels\": {\n\"brain\": \"No change\",\n\"heart\": \"No change\",\n\"liver\": \"No change\",\n\"lungs\": \"No change\",\n\"stomach\": \"No change\",\n\"kidneys\": \"No change\",\n\"intestines\": \"No change\"\n}\n}\n}\n\n\n```"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(`status ${Foods_eaten}`);
    console.log(result.response.text());
    return result.response.text();
  }
  
  run("dosa");
  
  