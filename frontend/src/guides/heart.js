import './Guide.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { motion } from "framer-motion";
import Header from '../homepagenew/components/Header';

<<<<<<< HEAD
import './Brain.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
function Heart(){

  const [guides_heart_status_text, setguides_heart_status_text] = useState("This is the initial text .");
  const [guides_heart_consumed_text, setguides_heart_consumed_text] = useState("This is the initial text.");
  const [guides_heart_info_text, setguides_heart_info_text] = useState("This is the initial text.");
  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };
    return(
=======
function Heart() {
  // State variables
  const [guides_heart_status_text, setguides_heart_status_text] = useState("Analysing...");
  const [guides_heart_consumed_text, setguides_heart_consumed_text] = useState("Getting...");
  const [guides_heart_info_text, setguides_heart_info_text] = useState("Analysing...");
  const [organName, setOrganName] = useState("Heart");

  const token = localStorage.getItem("jwtToken");
  let email;
>>>>>>> main

  // Ostatus function definition
  function Ostatus(a) {
    switch (a) {
      case 0:
        return "DEAD";
      case 1:
        return "Healthy";
      case 2:
        return "Very Healthy";
      case 3:
        return "UnHealthy";
      case 4:
        return "Very UnHealthy";
      default:
        return "Normal";
    }
  }

  useEffect(() => {
    // Token check logic
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken && decodedToken.email) {
          email = decodedToken.email;
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, [token]);

  useEffect(() => {
    axios.post('http://localhost:3001/api/organs/organGuides', {
      email: email,
      organName: organName,
    })
        .then(response => {
          const { AIorganGuideRes, consumedFoods } = response.data;
          setguides_heart_status_text(Ostatus(AIorganGuideRes.rating));
          setguides_heart_consumed_text(consumedFoods);
          setguides_heart_info_text(`
        1) ${AIorganGuideRes.guide1}
        2) ${AIorganGuideRes.guide2}
        3) ${AIorganGuideRes.guide3}
        4) ${AIorganGuideRes.guide4}
        5) ${AIorganGuideRes.guide5}
        6) ${AIorganGuideRes.guide6}
        7) ${AIorganGuideRes.guide7}
        8) ${AIorganGuideRes.guide8}
        `);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }, [email, organName]);

  return (
      <div className='guide-heart pt-28 mb-8 '>
        <Header />
        <div className="guide-content pl-12 ">
          <div className='newflex '>
            <h3 className='head3'>Current Status Of The Heart</h3>
            <br></br>
            <br></br>
            <br></br>
            <h2 className='heading'>Status of the Heart :</h2>
            <div className="containernew">
              <p className='guides_heart_status_text'>{guides_heart_status_text}</p>
            </div>
            <br></br>
            <br></br>

            <h2 className='heading'>Foods Consumed :</h2>
            <div className="containernew">
              <p className='guides_heart_consumed_text'>{guides_heart_consumed_text}</p>
            </div>
            <br></br>
            <br></br>

            <h2 className='heading'>Info about the heart :</h2>
            <div className="containernew">
              <div>
                {guides_heart_info_text.split('\n').map((line, index) => (
                    <p className='guides_heart_info_text' key={index}>{line}</p>
                ))}
              </div>
              {/*<img src="https://png.pngtree.com/png-vector/20240722/ourmid/pngtree-real-human-heart-isolated-on-transparent-background-png-image_13102597.png"*/}
              {/*     alt='Heart'*/}
              {/*     className="food-image-i" />*/}
            </div>
          </div>

          {/* Good Foods Section */}
          <section className="good-foods">
            <h3 className='head31'>FOOD THAT'S GOOD FOR HEART</h3>
            <div className="card-container four-elements" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {/* Good Foods Cards */}

            <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='Fatty Fish' className="food-card-image" />
              <div className="food-card-content">
                <h5 className='food-card-title'>Fatty Fish (Salmon, Mackerel, Sardines)</h5>
                <p className='foodpara'><strong>Omega-3 Fatty Acids:</strong> Help reduce inflammation, lower triglycerides, and decrease the risk of arrhythmias.</p>
                <p className='foodpara'><strong>Improves Cholesterol:</strong> Omega-3s increase HDL (good cholesterol) and reduce plaque buildup in arteries.</p>
              </div>
            </motion.article>
            <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img src="https://www.bing.com/th?id=OIP.j1WfA-1HnuUuicubXhR1OwHaEq&w=315&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt='Nuts' className="food-card-image" />
              <div className="food-card-content">
                <h5 className='food-card-title'>Nuts (Almonds, Walnuts)</h5>
                <p className='foodpara'><strong>Rich in Healthy Fats:</strong> Contain monounsaturated and polyunsaturated fats, which lower LDL (bad cholesterol).</p>
                <p className='foodpara'><strong>Antioxidants:</strong> Help reduce inflammation and improve the health of your blood vessels.</p>
              </div>
            </motion.article>
            <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img src="https://th.bing.com/th?id=OIP.b9It-_1kiy-uxqOalKV1JwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt='Oats' className="food-card-image" />
              <div className="food-card-content">
                <h5 className='food-card-title'>Oats</h5>
                <p className='foodpara'><strong>High in Soluble Fiber:</strong> Soluble fiber reduces cholesterol absorption, lowering LDL cholesterol.</p>
                <p className='foodpara'><strong>Beta-Glucan:</strong> Helps lower cholesterol levels, improving heart function.</p>
              </div>
            </motion.article>
            <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img src="https://th.bing.com/th?id=OIP.Qmk7f6puo63EoqkKdIAP-QAAAA&w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt='Leafy Greens' className="food-card-image" />
              <div className="food-card-content">
                <h5 className='food-card-title'>Leafy Greens (Spinach, Kale)</h5>
                <p className='foodpara'><strong>Rich in Potassium:</strong> Helps control blood pressure, reducing the strain on your heart.</p>
                <p className='foodpara'><strong>Vitamin K:</strong> Promotes healthy blood clotting and prevents calcification of arteries.</p>
              </div>
            </motion.article>
            <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img src="https://www.pngmart.com/files/15/Avocado-PNG-Transparent-HD-Photo.png" alt='Avocados' className="food-card-image" />
              <div className="food-card-content">
                <h5 className='food-card-title'>Avocados</h5>
                <p className='foodpara'><strong>Rich in Monounsaturated Fats:</strong> Avocados can help reduce LDL cholesterol levels and improve heart health.</p>
                <p className='foodpara'><strong>High in Potassium:</strong> They help regulate blood pressure and support heart function.</p>
              </div>
            </motion.article>
            <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img src="https://pngimg.com/uploads/kidney_beans/kidney_beans_PNG28.png" alt='Beans' className="food-card-image" />
              <div className="food-card-content">
                <h5 className='food-card-title'>Beans (Black Beans, Kidney Beans, Chickpeas)</h5>
                <p className='foodpara'><strong>High in Fiber:</strong> Beans can help lower cholesterol and improve overall heart health.</p>
                <p className='foodpara'><strong>Rich in Antioxidants:</strong> Help combat oxidative stress, which is linked to heart disease.</p>
              </div>
            </motion.article>
            <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img src="https://www.bing.com/th/id/OIP.GEyLT9N8t1gV5pXZDNXHUAHaFg?w=259&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='Berries' className="food-card-image" />
              <div className="food-card-content">
                <h5 className='food-card-title'>Berries (Strawberries, Blueberries, Raspberries)</h5>
                <p className='foodpara'><strong>High in Antioxidants:</strong> Berries are packed with anthocyanins, which reduce inflammation and lower the risk of heart disease.</p>
                <p className='foodpara'><strong>Improve Cholesterol:</strong> They can help lower LDL cholesterol and prevent plaque buildup in arteries.</p>
              </div>
            </motion.article>
            <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img src="https://www.bing.com/th/id/OIP.tWq2a6lTpuwIa-4U4dWjSgAAAA?w=188&h=141&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='Dark Chocolate' className="food-card-image" />
              <div className="food-card-content">
                <h5 className='food-card-title'>Dark Chocolate</h5>
                <p className='foodpara'><strong>Rich in Flavonoids:</strong> Dark chocolate is high in flavonoids, which boost brain plasticity, improve memory, and enhance cognitive function.</p>
                <p className='foodpara'><strong>Improves Blood Flow:</strong> The flavonoids in dark chocolate improve blood flow to the heart, increasing cardiovascular health.</p>
              </div>
            </motion.article>

        </div>
      </section>

{/* Bad Foods Section */}
  <section className="bad-foods">
    <h4 className='head31 pt-8'>FOOD THAT'S BAD FOR HEART</h4>
    <div className="card-container four-elements " style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {/* Bad Foods Cards */}
      <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <img src="https://tse1.mm.bing.net/th/id/OIP.CW22Grctx2l5DxNmU4wZ5gHaEn?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='Processed Meats' className="food-card-image" />
        <div className="food-card-content">
          <h5 className='food-card-title'>Processed Meats (Bacon, Sausage, Hot Dogs)</h5>
          <p className='foodpara'><strong>High in Sodium:</strong> Increases blood pressure, leading to heart disease.</p>
          <p className='foodpara'><strong>Saturated Fats:</strong> Promote plaque buildup in arteries, raising the risk of heart attacks.</p>
        </div>
      </motion.article>
      <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <img src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt='Sugary Beverages' className="food-card-image" />
        <div className="food-card-content">
          <h5 className='food-card-title'>Sugary Beverages (Soda, Energy Drinks)</h5>
          <p className='foodpara'><strong>Increases Blood Sugar:</strong> Leads to weight gain and insulin resistance, increasing heart disease risk.</p>
          <p className='foodpara'><strong>High Caloric Intake:</strong> Promotes obesity, a key risk factor for heart disease.</p>
        </div>
      </motion.article>
      <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <img src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='Fried Foods' className="food-card-image" />
        <div className="food-card-content">
          <h5 className='food-card-title'>Fried Foods (French Fries, Fried Chicken)</h5>
          <p className='foodpara'><strong>Trans Fats:</strong> Raise LDL cholesterol, increasing heart disease risk.</p>
          <p className='foodpara'><strong>Leads to Inflammation:</strong> Unhealthy oils contribute to chronic inflammation, harming heart health.</p>
        </div>
      </motion.article>
      <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <img src="https://static.vecteezy.com/system/resources/previews/030/214/371/original/sliced-white-bread-png.png" alt='Refined Carbs' className="food-card-image" />
        <div className="food-card-content">
          <h5 className='food-card-title'>Refined Carbs (White Bread, Pastries)</h5>
          <p className='foodpara'><strong>Increases Blood Sugar:</strong> Refined carbs lead to blood sugar spikes, contributing to insulin resistance and heart disease.</p>
          <p className='foodpara'><strong>Linked to Weight Gain:</strong> Refined carbs contribute to obesity, a significant risk factor for heart disease.</p>
        </div>
      </motion.article>
      <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <img src="https://static.vecteezy.com/system/resources/previews/024/108/097/non_2x/frozen-pizza-with-cheese-and-tomatoes-on-transparent-background-png.png" alt='High-Sodium Foods' className="food-card-image" />
        <div className="food-card-content">
          <h5 className='food-card-title'>High-Sodium Foods (Canned Soups, Frozen Meals)</h5>
          <p className='foodpara'><strong>Increases Blood Pressure:</strong> Excessive sodium in the diet raises blood pressure, straining the heart.</p>
          <p className='foodpara'><strong>Promotes Water Retention:</strong> Sodium causes the body to retain water, putting additional strain on the heart.</p>
        </div>
      </motion.article>
      <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <img src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='Alcohol' className="food-card-image" />
        <div className="food-card-content">
          <h5 className='food-card-title'>Alcohol</h5>
          <p className='foodpara'><strong>Increases Blood Pressure:</strong> Chronic alcohol consumption can raise blood pressure, contributing to heart disease.</p>
          <p className='foodpara'><strong>Weakens Heart Muscle:</strong> Excessive drinking can lead to cardiomyopathy, a condition that weakens the heart muscle.</p>
        </div>
      </motion.article>



    </div>
  </section>
</div>
<<<<<<< HEAD
</div>
  
        <section className="good-foods">
          <h3 className='head31'>FOOD THAT'S GOOD FOR HEART</h3>


  
          <article className="food-iteml"><div class="particle"></div>
            <img 
              src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
                    alt='.'
             
              className="food-image"
            />

             < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
              <h5 className='head5'>Fatty Fish (Salmon, Mackerel, Sardines)</h5><br></br>
              <p className='foodpara'><p className = "foodtext">Omega-3 Fatty Acids:</p>
               Help reduce inflammation, lower triglycerides, and decrease the risk of arrhythmias.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Improves Cholesterol:</p>
              Omega-3s increase HDL (good cholesterol) and reduce plaque buildup in arteries.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Blood Pressure Regulation:</p>
               Regular consumption can reduce blood pressure, lowering the risk of stroke and heart attack.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Reduces Risk of Heart Failure:</p>
              Omega-3s may lower the risk of heart failure by supporting overall heart function.</p><br></br>
              </motion.div>
          </article><div class="particle"></div>
      
          <article className="food-itemr">
            <img 
              src="https://www.bing.com/th?id=OIP.j1WfA-1HnuUuicubXhR1OwHaEq&w=315&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
                    alt='.'
           
              className="food-image"
            />
           <motion.div
              className="food-contentr"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
            <div class="particle"></div>
              <h5 className='head5'>2. Nuts (Almonds, Walnuts)</h5><br></br>
              <p className='foodpara'><p className = "foodtext">Rich in Healthy Fats:</p> 
              Contain monounsaturated and polyunsaturated fats, which lower LDL (bad cholesterol).</p><br></br>
              <p className='foodpara'><p className = "foodtext">Antioxidants:</p>
              Help reduce inflammation and improve the health of your blood vessels.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Plant Sterols:</p>
              Compounds found in nuts that help lower cholesterol.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Magnesium Source:</p>
              Supports healthy heart rhythms and prevents the hardening of arteries.</p><br></br>
              </motion.div>
          </article>
  
          <article className="food-iteml">
            <img 
              src="https://th.bing.com/th?id=OIP.b9It-_1kiy-uxqOalKV1JwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
                    alt='.'
             
              className="food-image"
            /><div class="particle"></div>
             < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
           

              <h5 className='head5'>3. Oats</h5><br></br>
              <p className='foodpara'><p className = "foodtext">High in Soluble Fiber:</p> 
              Soluble fiber reduces cholesterol absorption, lowering LDL cholesterol.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Beta-Glucan:</p>
               Helps lower cholesterol levels, improving heart function.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Controls Blood Sugar:</p> 
            Oats prevent sharp rises in blood sugar, reducing the risk of heart disease.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Weight Management:</p> 
             The fiber in oats promotes weight management, aiding heart health.</p><br></br>
             </motion.div>
          </article>
         

  
          <article className="food-itemr">
            <img 
              src="https://th.bing.com/th?id=OIP.Qmk7f6puo63EoqkKdIAP-QAAAA&w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
                    alt='.'

              className="food-image"
            /> <div class="particle"></div>
           <motion.div
              className="food-contentr"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h5 className='head5'>4. Leafy Greens (Spinach, Kale)</h5><br></br>
              <p className='foodpara'><p className = "foodtext">Rich in Potassium:</p>
               Helps control blood pressure, reducing the strain on your heart.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Vitamin K:</p> 
            Promotes healthy blood clotting and prevents calcification of arteries.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Nitrates:</p> 
            Help reduce blood pressure and improve arterial function.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Antioxidants:</p> 
              Protect against oxidative stress, a key factor in heart disease development.</p><br></br>
              </motion.div>
          </article>
          <div class="particle"></div>
          <article className="food-iteml">
    <img 
      src="https://www.pngmart.com/files/15/Avocado-PNG-Transparent-HD-Photo.png"
            alt='.'
      className="food-image"
    />
     < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
      <h5 className='head5'>5. Avocados</h5><br></br>
      <p className='foodpara'><p className = "foodtext">Rich in Monounsaturated Fats:</p> 
      Avocados can help reduce LDL cholesterol levels and improve heart health.</p><br></br>
      <p className='foodpara'><p className = "foodtext">High in Potassium:</p> 
    They help regulate blood pressure and support heart function.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Folate:</p> 
      Avocados contain folate, which supports heart health and helps reduce homocysteine levels, a risk factor for heart disease.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Anti-Inflammatory:</p> 
      Their compounds can reduce inflammation, improving overall cardiovascular health.</p><br></br>
      </motion.div>
  </article>

  <article className="food-itemr">
    <img 
      src="https://pngimg.com/uploads/kidney_beans/kidney_beans_PNG28.png"
            alt='.'
      className="food-image"
    />
   <motion.div
              className="food-contentr"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
      <h5 className='head5'>Beans (Black Beans, Kidney Beans, Chickpeas)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">High in Fiber:</p>
      Beans can help lower cholesterol and improve overall heart health.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Rich in Antioxidants:</p>
       Help combat oxidative stress, which is linked to heart disease.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Support Weight Loss:</p> 
     The fiber in beans helps promote a feeling of fullness and can aid in weight management.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Lower Blood Pressure:</p>
      Beans are rich in potassium and magnesium, which help regulate blood pressure.</p><br></br>
      </motion.div>
  </article>

  <article className="food-iteml">
    <img 
      src="https://www.bing.com/th/id/OIP.GEyLT9N8t1gV5pXZDNXHUAHaFg?w=259&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
            alt='.'
      className="food-image"
    />
     < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
      <h5 className='head5'> Berries (Strawberries, Blueberries, Raspberries)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">High in Antioxidants:</p>
       Berries are packed with anthocyanins, which reduce inflammation and lower the risk of heart disease.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Improve Cholesterol:</p> 
      They can help lower LDL cholesterol and prevent plaque buildup in arteries.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Boost Heart Health:</p> 
     The compounds in berries help improve blood vessel function and reduce oxidative stress.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Regulate Blood Pressure:</p>
      Berries are rich in flavonoids that support healthy blood pressure levels.</p><br></br>
      </motion.div>
  </article>

  <article className="food-itemr">
    <img 
      src="https://www.bing.com/th/id/OIP.tWq2a6lTpuwIa-4U4dWjSgAAAA?w=188&h=141&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
      className="food-image"
    />
   <motion.div
              className="food-contentr"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
      <h5 className='head5'> Dark Chocolate</h5><br></br>
      < p className='foodpara'><p className = "foodtext">Rich in Flavonoids:</p>
      Dark chocolate, especially varieties with 70% cocoa or more, helps lower blood pressure and improves circulation.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Improves Cholesterol:</p>
     Can reduce LDL cholesterol and improve HDL cholesterol levels.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Reduces Inflammation:</p> 
      The antioxidants in dark chocolate can help reduce inflammation and protect heart health.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Enhances Blood Vessel Function:</p>
      Dark chocolate can help improve blood vessel function, reducing the risk of heart disease.</p><br></br>
      </motion.div>
  </article>
        </section>
  
        <section className="bad-foods">
          <h2 className='head2'>FOOD THAT'S BAD FOR HEART</h2>
         
  
          <article className="food-iteml">
            <img 
              src="https://tse1.mm.bing.net/th/id/OIP.CW22Grctx2l5DxNmU4wZ5gHaEn?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
                    alt='.'
              
              className="food-image"
            /> 
             < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}> <div class="nparticle"></div>
              <h5 className='head5'> Processed Meats (Bacon, Sausage, Hot Dogs)</h5><br></br>
              <p className='foodpara'><p className = "foodtext">High in Sodium:</p>
          Increases blood pressure, leading to heart disease.</p>
            
 
              <p className='foodpara'><p className = "foodtext">Saturated Fats:</p> 
           Promote plaque buildup in arteries, raising the risk of heart attacks.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Preservatives:</p> 
             Nitrates in processed meats are linked to heart disease and cancer.</p><br></br>
              <p className='foodpara' ><p className = "foodtext">Increases Inflammation:</p>
           Triggers inflammation, contributing to heart disease.</p><br></br>
           </motion.div>
          </article>
  
          <article className="food-itemr">
            <img 
              src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
                    alt='.'
              
              className="food-image"
            />
                    
                    <div class="nparticle"></div>
  
 
           <motion.div
              className="food-contentr"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h5 className='head5'> Sugary Beverages (Soda, Energy Drinks)</h5><br></br>
              <p className='foodpara'><p className = "foodtext">Increases Blood Sugar:</p> 
              <br></br>Leads to weight gain and insulin resistance, increasing heart disease risk.</p><br></br>
              <div class="nparticle"></div>

              <p className='foodpara'><p className = "foodtext">High Caloric Intake:</p>
              Promotes obesity, a key risk factor for heart disease.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Increases Triglycerides:</p>
              High sugar intake raises triglyceride levels, risking heart attacks.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Leads to Fatty Liver Disease:</p> 
            Excess sugar can lead to non-alcoholic fatty liver disease, linked to heart disease.</p><br></br>
            </motion.div>
          </article>
          <div class="nparticle"></div>
          <article className="food-iteml">
            <img 
              src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
                    alt='.'
             
              className="food-image"
            />
             < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
           
 
 
              <h5 className='head5'> Fried Foods (French Fries, Fried Chicken)</h5><br></br>
              <p className='foodpara'><p className = "foodtext">Trans Fats:</p>
            Raise LDL cholesterol, increasing heart disease risk.</p><br></br>
             
              <div class="nparticle"></div>
 
  

              <p className='foodpara'><p className = "foodtext">Leads to Inflammation:</p>
              Unhealthy oils contribute to chronic inflammation, harming heart health.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Promotes Weight Gain:</p>
              Calorie-dense fried foods contribute to obesity, increasing heart disease risk.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Increases Blood Pressure:</p> 
            High in salt and unhealthy fats, fried foods elevate blood pressure.</p><br></br>
            </motion.div>
           
          </article>
          <article className="food-itemr">
    <img 
      src="https://static.vecteezy.com/system/resources/previews/030/214/371/original/sliced-white-bread-png.png"
            alt='.'
      className="food-image"
    />
   <motion.div
              className="food-contentr"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
      <h5 className='head5'> Refined Carbs (White Bread, Pastries)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">Increases Blood Sugar:</p>
 Refined carbs lead to blood sugar spikes, contributing to insulin resistance and heart disease.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Linked to Weight Gain:</p>
     Refined carbs contribute to obesity, a significant risk factor for heart disease.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Inflammatory Effects:</p>
      These carbs increase inflammation in the body, impacting heart health.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Raises Triglycerides:</p>
    They contribute to higher triglyceride levels, a major risk factor for heart attacks.</p><br></br>
    </motion.div>
  </article>

  <article className="food-iteml">
    <img 
      src="https://static.vecteezy.com/system/resources/previews/024/108/097/non_2x/frozen-pizza-with-cheese-and-tomatoes-on-transparent-background-png.png"
            alt='.'
      className="food-image"
    />
     < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
      <h5 className='head5'>High-Sodium Foods (Canned Soups, Frozen Meals)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">Increases Blood Pressure:</p> Excessive sodium in the diet raises blood pressure, straining the heart.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Promotes Water Retention:</p> Sodium causes the body to retain water, putting additional strain on the heart.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Contributes to Heart Disease:</p> A high-sodium diet increases the risk of heart attacks and strokes.</p><br></br>
      </motion.div>
  </article>

  <article className="food-itemr">
    <img 
      src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
      className="food-image"
    />
   <motion.div
              className="food-contentr"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
      <h5 className='head5'>Alcohol</h5><br></br>
      <p className='foodpara'><p className = "foodtext">Increases Blood Pressure:</p>
  Chronic alcohol consumption can raise blood pressure, contributing to heart disease.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Weakens Heart Muscle:</p>
     Excessive drinking can lead to cardiomyopathy, a condition that weakens the heart muscle.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Promotes Weight Gain:</p>
       Alcohol is calorie-dense and can contribute to obesity, increasing the risk of heart disease.</p><br></br>
       </motion.div>
  </article>

  <article className="food-iteml">
    <img 
      src="https://tse4.mm.bing.net/th/id/OIP.UNWx5QnfFvyIes0hv4rdwgHaGK?w=232&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
      className="food-image"
    />
     < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
      <h5 className='head5'> Dairy (Whole Milk, Cheese)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">High in Saturated Fat:</p> 
     Saturated fats can raise LDL cholesterol, increasing the risk of heart disease.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Contributes to Weight Gain:</p>
     Dairy products high in fat can contribute to obesity, a risk factor for heart disease.</p><br></br>
      <p className='foodpara'><p className = "foodtext">May Increase Inflammation:</p>
      Dairy consumption has been linked to increased inflammation, contributing to heart disease.</p><br></br>
      </motion.div>
  </article>

  <article className="food-itemr">
    <img 
      src="https://tse3.mm.bing.net/th/id/OIP.MgE-cT93SEQTWdcVG2B_pgHaEk?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      alt='.'
      className="food-image"
    />
   <motion.div
              className="food-contentr"
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
      <h5 className='head5'> Packaged Snacks (Chips, Crackers)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">High in Trans Fats:</p> 
     Trans fats increase LDL cholesterol, which contributes to plaque buildup in arteries.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Promotes Inflammation:</p>
       These snacks often contain unhealthy fats that increase inflammation in the body.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Contribute to Obesity:</p> 
      These calorie-dense snacks are linked to weight gain, a major risk factor for heart disease.</p><br></br>
    </motion.div>
  </article>
        </section>
=======
>>>>>>> main
      </div>);
        }

      export default Heart;
