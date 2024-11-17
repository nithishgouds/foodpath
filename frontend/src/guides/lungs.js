import "./Guide.css";
import axios from "axios";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Header from "../homepagenew/components/Header";
import { motion } from "framer-motion";

<<<<<<< HEAD
import './Brain.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
function Lungs(){

       
  const [guides_lungs_status_text, setguides_lungs_status_text] = useState("This is the initial text .");
  const [guides_lungs_consumed_text, setguides_lungs_consumed_text] = useState("This is the initial text.");
  const [guides_lungs_info_text, setguides_lungs_info_text] = useState("This is the initial text.");
  const slideInFromLeft = {
    hidden: { x: -200, opacity: 0},
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } }
  };

  const slideInFromRight = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } }
  };
  return(
=======
function Lungs() {
  const [guides_lungs_status_text, setguides_lungs_status_text] =
      useState("Analysing...");
  const [guides_lungs_consumed_text, setguides_lungs_consumed_text] =
      useState("Getting...");
  const [guides_lungs_info_text, setguides_lungs_info_text] =
      useState("Analysing...");

  // Ensure jwt-decode is imported
  const [isSignIn, setSingIn] = useState(false);
>>>>>>> main

  let email;

  const token = localStorage.getItem("jwtToken");
  console.log(token);

  const checkSignIn = () => {
    if (token) {
      setSingIn(true);
    }
  };

  useEffect(() => {
    checkSignIn();
  });

  if (token) {
    try {
      console.log("Entered token check");

      // Decode the JWT token to extract the payload
      const decodedToken = jwtDecode(token);
      console.log(decodedToken); // Log the entire decoded token to check its structure

      console.log(decodedToken.email);

      // Check if the decoded token contains the email property
      if (decodedToken && decodedToken.email) {
        email = decodedToken.email;
        console.log("Decoded email:", email);
      } else {
        console.log("Email not found in token payload.");
      }
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  } else {
    console.log("No JWT token found in localStorage.");
  }

  const [organName, setOrganName] = useState("Lungs");

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
    // Make POST request with email and organName in the body
    axios
        .post("http://localhost:3001/api/organs/organGuides", {
          email: email,
          organName: organName,
        })
        .then((response) => {
          const { message, AIorganGuideRes, consumedFoods } = response.data;

          // Update state with the response data
          setguides_lungs_status_text(Ostatus(AIorganGuideRes.rating)); // Set the status to the message received
          // setguides_brain_consumed_text(consumedFoods.join(', '));
          setguides_lungs_consumed_text(consumedFoods); // Convert consumedFoods array to a comma-separated string
          setguides_lungs_info_text(`
        1) ${AIorganGuideRes.guide1}
        2) ${AIorganGuideRes.guide2}
        3) ${AIorganGuideRes.guide3}
        4) ${AIorganGuideRes.guide4}
        5) ${AIorganGuideRes.guide5}
        6) ${AIorganGuideRes.guide6}
        7) ${AIorganGuideRes.guide7}
        8) ${AIorganGuideRes.guide8}
        `); // Format guides in separate lines
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  }, [email, organName]);

  return (
      <div className="guide pt-28 mb-8">
        <Header/>
        <div className="guide-content pl-12 ">
          <div className="newflex ">
            <h3 className="head3">Current Status Of The Lungs</h3>

            <br></br>
            <br></br>
            <br></br>
            <h2 className="heading">Status of the Lungs :</h2>
            <div class="containernew">
              <p className="guides_lungs_status_text">{guides_lungs_status_text}</p>
              <br></br>
              <br></br>
            </div>

            <h2 className="heading">Foods Consumed :</h2>
            <div class="containernew">
<<<<<<< HEAD
        
  <p className='guides_lungs_info_text'> {guides_lungs_info_text}</p>
  <img src="https://static.vecteezy.com/system/resources/previews/035/589/357/original/ai-generated-3d-realistic-human-lungs-with-a-transparent-background-png.png"
alt='.'
  className="food-image-i"/>

</div>
     </div>

      <section className="good-foods">
        <h3  className='head31'>FOOD THAT'S GOOD FOR LUNGS</h3>
        <div class="particle"></div>

        <article className="food-iteml">
          <img
            src="https://th.bing.com/th?id=OIP.Qmk7f6puo63EoqkKdIAP-QAAAA&w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt='.' 
            className="food-image"
          />
         < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
            <h5  className='head5'>Leafy Greens (Spinach, Kale)</h5><br></br>
            <p className='foodpara'><p className = "foodtext">Rich in Antioxidants:</p> Help protect lung tissue from damage caused by pollution and cigarette smoke.</p><br></br>
      

            <p className='foodpara'><p className = "foodtext">Vitamin C and E:</p> These vitamins support lung function by fighting oxidative stress.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Anti-inflammatory Properties:</p> Reducing lung inflammation can improve respiratory health.</p><br></br>
            </motion.div>
        </article>
        <div class="particle"></div>
 
        <article className="food-itemr">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
            className="food-image"
          />
         < motion.div
           className="food-contentl"
          
           variants={slideInFromRight}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
            <h5  className='head5'>Fatty Fish (Salmon, Sardines)</h5><br></br>
          

            <p className='foodpara'><p className = "foodtext">Omega-3 Fatty Acids:</p> Help reduce inflammation in the lungs, improving overall lung function.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Reduces Asthma Symptoms:</p> Regular consumption of fatty fish can alleviate asthma symptoms.</p><br></br>
           
            <p className='foodpara'><p className = "foodtext">Prevents Respiratory Illness:</p> Omega-3s support lung health by reducing inflammation caused by respiratory diseases.</p><br></br>
            </motion.div>
        </article>
      
        <article className="food-iteml">
          <img
            src="https://th.bing.com/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt='.'
            className="food-image"
          />
         < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
            <h5  className='head5'> Apples</h5><br></br>
           
            <p className='foodpara'><p className = "foodtext">High in Antioxidants:</p> Help reduce the decline of lung function as people age.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Improves Respiratory Health:</p> Regular consumption of apples has been linked to better overall lung function.</p><br></br>
            
            <p className='foodpara'><p className = "foodtext">Quercetin:</p> A flavonoid in apples that helps reduce oxidative damage to the lungs.</p><br></br>
           
            </motion.div>
        </article>
        <article className="food-itemr">
  <img
    src="https://www.bing.com/th/id/OIP.GEyLT9N8t1gV5pXZDNXHUAHaFg?w=259&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  alt='.'
    className="food-image"
  />
 < motion.div
           className="food-contentl"
          
           variants={slideInFromRight}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
    <h5 className='head5'> Berries (Blueberries, Raspberries)</h5><br></br>
    <p className='foodpara'><p className = "foodtext">High in Antioxidants:</p> Berries are rich in anthocyanins, which reduce lung damage and inflammation.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Supports Lung Function:</p> Regular consumption can help maintain respiratory health.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Prevents Oxidative Damage:</p> The antioxidants in berries protect lung tissue from pollutants.</p><br></br>
    </motion.div>
</article>

<article className="food-iteml">
  <img
    src="https://www.bing.com/th?id=OIP.j1WfA-1HnuUuicubXhR1OwHaEq&w=315&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
   alt='.'
    className="food-image"
  />
 < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
    <h5 className='head5'> Nuts and Seeds (Almonds, Flaxseeds)</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Rich in Vitamin E:</p> Helps protect cells from oxidative damage, supporting lung function.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Anti-inflammatory:</p> Reduces inflammation in lung tissues.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Omega-3 Fatty Acids:</p> Found in flaxseeds, beneficial for respiratory health.</p><br></br>
    </motion.div>
</article>

<article className="food-itemr">
  <img
    src="https://th.bing.com/th?id=OIP.2GnzkY2_WugcUUHZq7ovxgHaGS&w=271&h=230&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
   alt='.'
    className="food-image"
  />
 < motion.div
           className="food-contentl"
          
           variants={slideInFromRight}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
    <h5 className='head5'>Ginger</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Clears Airways:</p> Known for reducing mucus and opening up airways.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Anti-inflammatory Properties:</p> Reduces inflammation in the lungs and eases breathing.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Antioxidant Effects:</p> Helps in detoxifying the lungs from pollutants.</p><br></br>
    </motion.div>
</article>

<article className="food-iteml">
  <img
    src="https://www.bing.com/th/id/OIP.mtGep9sTfgXz1W_6ezXGtQHaF8?w=211&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
 < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
    <h5 className='head5'>Beets and Beet Greens</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Nitric Oxide Production:</p> Improves lung function and helps dilate blood vessels.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Rich in Antioxidants:</p> Beet greens provide compounds that support lung health.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Reduces Inflammation:</p> The nitrates in beets contribute to reducing lung inflammation.</p><br></br>
    </motion.div>
</article>

<article className="food-itemr">
  <img
    src="https://www.bing.com/th/id/OIP.LRnCvYY4Ol5edevkmMNrwgHaFS?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
 < motion.div
           className="food-contentl"
          
           variants={slideInFromRight}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
    <h5 className='head5'>Turmeric</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Curcumin:</p> The active compound has strong anti-inflammatory effects.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Protects Lungs:</p> Regular consumption can reduce the risk of lung disease.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Improves Airflow:</p> Known to benefit people with asthma and COPD.</p><br></br>
    </motion.div>
</article>
      </section>

      <section className="bad-foods">
        <h2 className='head2'>FOOD THAT'S BAD FOR LUNGS</h2>
        <div class="nparticle"></div>
 
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
           viewport={{ once: true }}>
            <h5  className='head5'>Processed Meats (Bacon, Sausage)</h5><br></br>
           

            <p className='foodpara'><p className = "foodtext">Nitrites:</p> Found in processed meats, can worsen lung health by increasing oxidative stress.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Linked to Chronic Obstructive Pulmonary Disease (COPD):</p> Frequent consumption may increase the risk of developing COPD.</p><br></br>
         
  
 
            <p className='foodpara'><p className = "foodtext">Promotes Inflammation:</p> Processed meats contribute to inflammation, which can exacerbate lung conditions.</p><br></br>
          
            </motion.div>
        </article>

        <article className="food-itemr">
          <img
            src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt='.'
            className="food-image"
          />
         < motion.div
           className="food-contentl"
          
           variants={slideInFromRight}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
          <div class="nparticle"></div>
     
            <h5  className='head5'>Sugary Beverages (Soda, Energy Drinks)</h5><br></br>
          
  
            <p className='foodpara'><p className = "foodtext">Increases Inflammation:</p> High sugar intake promotes systemic inflammation, negatively impacting lung function.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Risk of Asthma:</p> Sugary drinks can worsen symptoms of asthma and increase the risk of respiratory diseases.</p><br></br>
      
  
            <p className='foodpara'><p className = "foodtext">Obesity:</p> Weight gain from sugary drinks can strain the lungs and lead to respiratory problems.</p><br></br>
            </motion.div>
        </article>

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
            <h5  className='head5'> Fried Foods (French Fries, Fried Chicken)</h5><br></br>
          
            <p className='foodpara'><p className = "foodtext">Trans Fats:</p> Increase inflammation in the lungs, worsening lung conditions.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Increases Risk of Lung Diseases:</p> Fried foods can lead to inflammation and conditions like asthma.</p><br></br>
       
 
            <p className='foodpara'><p className = "foodtext">Weight Gain:</p> Obesity from high-calorie fried foods can make it harder for the lungs to function properly.</p><br></br>
           
            </motion.div>
            <div class="nparticle"></div>
        </article>
        <article className="food-itemr">
  <img
    src="https://tse4.mm.bing.net/th/id/OIP.UNWx5QnfFvyIes0hv4rdwgHaGK?w=232&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
 < motion.div
           className="food-contentl"
          
           variants={slideInFromRight}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
    <h5 className='head5'>Dairy Products (Full-fat Milk, Cheese)</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Produces Mucus:</p> Dairy can thicken mucus, making it harder to clear airways.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Triggers Asthma Symptoms:</p> Some individuals may find that dairy worsens asthma.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Inflammatory Potential:</p> Full-fat dairy products can contribute to inflammation.</p><br></br>
    </motion.div>
</article>

<article className="food-iteml">
  <img
    src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
 < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
    <h5 className='head5'>Excessive Alcohol</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Dehydration:</p> Can dry out the respiratory tract.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Suppresses Immune Function:</p> Alcohol can impair the body's ability to fight respiratory infections.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Reduces Lung Defense:</p> Chronic use may weaken the lung's natural defense system.</p><br></br>
    </motion.div>
</article>

<article className="food-itemr">
  <img
    src="https://www.bing.com/th/id/OIP.8-zc2m8dW1-37-mtD8qZ2AHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
 < motion.div
           className="food-contentl"
          
           variants={slideInFromRight}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
    <h5 className='head5'>White Bread and Pasta</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Low Nutritional Value:</p> Processed carbs provide little benefit for lung health.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Causes Inflammation:</p> High glycemic index can trigger inflammation in the body.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Potential for Obesity:</p> Excessive intake may lead to weight gain, impacting lung function.</p><br></br>
    </motion.div>
</article>

<article className="food-iteml">
  <img
    src="https://www.bing.com/th/id/OIP.xP6wBeNTiHY_kGkr0mahnwHaF5?w=229&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.' 
    className="food-image"
  />
 < motion.div
           className="food-contentl"
          
           variants={slideInFromLeft}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
    <h5 className='head5'> Salty Foods (Chips, Pickles)</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Water Retention:</p> High salt intake can lead to water retention, affecting lung function.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Exacerbates Asthma:</p> Excessive sodium may increase asthma symptoms.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Contributes to Inflammation:</p> Can worsen lung health by promoting fluid buildup.</p><br></br>
    </motion.div>
</article>

<article className="food-itemr">
  <img
    src="https://www.bing.com/th/id/OIP.p_pebnS80ESbaxIixeE25gAAAA?w=210&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
 < motion.div
           className="food-contentl"
          
           variants={slideInFromRight}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}>
    <h5 className='head5'>Artificial Sweeteners</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Potential Lung Irritant:</p> Certain artificial sweeteners may trigger respiratory issues.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Linked to Inflammation:</p> Some studies suggest they can promote inflammation in the body.</p><br></br>
    <p className='foodpara'><p className = "foodtext">May Trigger Asthma:</p> Artificial sweeteners could exacerbate asthma or allergy symptoms.</p><br></br>
  </motion.div>
</article>
=======
              <p className="guides_lungs_consumed_text">
                {guides_lungs_consumed_text}
              </p>
              <br></br>
              <br></br>
            </div>
            <h2 className="heading">Info about the Lungs :</h2>
            <div class="containernew">
              <div>
                {guides_lungs_info_text.split("\n").map((line, index) => (
                    <p className="guides_brain_info_text"> {line}</p>
                ))}
              </div>
              {/*<img*/}
              {/*    src="https://static.vecteezy.com/system/resources/previews/035/589/357/original/ai-generated-3d-realistic-human-lungs-with-a-transparent-background-png.png"*/}
              {/*    alt="."*/}
              {/*    className="food-image-i"*/}
              {/*/>*/}
            </div>
          </div>

          <section className="good-foods">
            <h3 className="head31">FOOD THAT'S GOOD FOR LUNGS</h3>
            <div className="card-container four-elements" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th?id=OIP.Qmk7f6puo63EoqkKdIAP-QAAAA&w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt='Leafy Greens' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Leafy Greens (Spinach, Kale)</h5>
                  <p className='foodpara'><strong>Rich in Potassium:</strong> Helps control blood pressure, reducing the
                    strain on your heart.</p>
                  <p className='foodpara'><strong>Vitamin K:</strong> Promotes healthy blood clotting and prevents
                    calcification of arteries.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='Fatty Fish' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Fatty Fish (Salmon, Mackerel, Sardines)</h5>
                  <p className='foodpara'><strong>Omega-3 Fatty Acids:</strong> Help reduce inflammation, lower
                    triglycerides, and decrease the risk of arrhythmias.</p>
                  <p className='foodpara'><strong>Improves Cholesterol:</strong> Omega-3s increase HDL (good
                    cholesterol)
                    and reduce plaque buildup in arteries.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt='Apples' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Apples</h5>
                  <p className='foodpara'><strong>High in Antioxidants:</strong> Help reduce the decline of lung
                    function
                    as people age.</p>
                  <p className='foodpara'><strong>Improves Respiratory Health:</strong> Regular consumption of apples
                    has
                    been linked to better overall lung function.</p>
                  <p className='foodpara'><strong>Quercetin:</strong> A flavonoid in apples that helps reduce oxidative
                    damage to the lungs.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th/id/OIP.GEyLT9N8t1gV5pXZDNXHUAHaFg?w=259&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='Berries' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Berries (Strawberries, Blueberries, Raspberries)</h5>
                  <p className='foodpara'><strong>High in Antioxidants:</strong> Berries are packed with anthocyanins,
                    which reduce inflammation and lower the risk of heart disease.</p>
                  <p className='foodpara'><strong>Improve Cholesterol:</strong> They can help lower LDL cholesterol and
                    prevent plaque buildup in arteries.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th?id=OIP.j1WfA-1HnuUuicubXhR1OwHaEq&w=315&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt='Nuts' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Nuts and Seeds (Almonds, Flaxseeds)</h5>
                  <p className='foodpara'><strong>Rich in Healthy Fats:</strong> Contain monounsaturated and
                    polyunsaturated fats, which lower LDL (bad cholesterol).</p>
                  <p className='foodpara'><strong>Antioxidants:</strong> Help reduce inflammation and improve the health
                    of your blood vessels.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th?id=OIP.2GnzkY2_WugcUUHZq7ovxgHaGS&w=271&h=230&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt='Ginger' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Ginger</h5>
                  <p className='foodpara'><strong>Clears Airways:</strong> Known for reducing mucus and opening up
                    airways.</p>
                  <p className='foodpara'><strong>Anti-inflammatory Properties:</strong> Reduces inflammation in the
                    lungs
                    and eases breathing.</p>
                  <p className='foodpara'><strong>Antioxidant Effects:</strong> Helps in detoxifying the lungs from
                    pollutants.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th/id/OIP.mtGep9sTfgXz1W_6ezXGtQHaF8?w=211&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='Beets and Beet Greens' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Beets and Beet Greens</h5>
                  <p className='foodpara'><strong>Nitric Oxide Production:</strong> Improves lung function and helps
                    dilate blood vessels.</p>
                  <p className='foodpara'><strong>Rich in Antioxidants:</strong> Beet greens provide compounds that
                    support lung health.</p>
                  <p className='foodpara'><strong>Reduces Inflammation:</strong> The nitrates in beets contribute to
                    reducing lung inflammation.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th/id/OIP.LRnCvYY4Ol5edevkmMNrwgHaFS?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='Turmeric' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Turmeric</h5>
                  <p className='foodpara'><strong>Curcumin:</strong> The active compound has strong anti-inflammatory
                    effects.</p>
                  <p className='foodpara'><strong>Protects Lungs:</strong> Regular consumption can reduce the risk of
                    lung
                    disease.</p>
                  <p className='foodpara'><strong>Improves Airflow:</strong> Known to benefit people with asthma and
                    COPD.
                  </p>
                </div>
              </motion.article>
            </div>
            <div/>
          </section>

          <section className="bad-foods">
            <h2 className="head31 pt-8">FOOD THAT'S BAD FOR LUNGS</h2>
            <div className="card-container four-elements" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.CW22Grctx2l5DxNmU4wZ5gHaEn?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='Processed Meats' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Processed Meats (Bacon, Sausage, Hot Dogs)</h5>
                  <p className='foodpara'><strong>High in Sodium:</strong> Increases blood pressure, leading to heart
                    disease.</p>
                  <p className='foodpara'><strong>Saturated Fats:</strong> Promote plaque buildup in arteries, raising
                    the
                    risk of heart attacks.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt='Sugary Beverages' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Sugary Beverages (Soda, Energy Drinks)</h5>
                  <p className='foodpara'><strong>Increases Blood Sugar:</strong> Leads to weight gain and insulin
                    resistance, increasing heart disease risk.</p>
                  <p className='foodpara'><strong>High Caloric Intake:</strong> Promotes obesity, a key risk factor for
                    heart disease.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='Fried Foods' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Fried Foods (French Fries, Fried Chicken)</h5>
                  <p className='foodpara'><strong>Trans Fats:</strong> Raise LDL cholesterol, increasing heart disease
                    risk.</p>
                  <p className='foodpara'><strong>Leads to Inflammation:</strong> Unhealthy oils contribute to chronic
                    inflammation, harming heart health.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse4.mm.bing.net/th/id/OIP.UNWx5QnfFvyIes0hv4rdwgHaGK?w=232&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='Dairy' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Dairy (Whole Milk, Cheese)</h5>
                  <p className='foodpara'><strong>High in Saturated Fat:</strong> Saturated fats can raise LDL
                    cholesterol, increasing the risk of heart disease.</p>
                  <p className='foodpara'><strong>Contributes to Weight Gain:</strong> Dairy products high in fat can
                    contribute to obesity, a risk factor for heart disease.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='Alcohol' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Excessive Alcohol</h5>
                  <p className='foodpara'><strong>Suppresses Immune Function:</strong> Alcohol can impair the body's
                    ability to fight respiratory infections</p>
                  <p className='foodpara'><strong>Reduces Lung Defence</strong> Chronic use may weaken the lung's
                    natural
                    defense system.
>>>>>>> main

                  </p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th/id/OIP.8-zc2m8dW1-37-mtD8qZ2AHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='White Bread and Pasta' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>White Bread and Pasta</h5>
                  <p className='foodpara'><strong>Low Nutritional Value:</strong> Processed carbs provide little benefit
                    for lung health.</p>
                  <p className='foodpara'><strong>Causes Inflammation:</strong> High glycemic index can trigger
                    inflammation in the body.</p>
                  <p className='foodpara'><strong>Potential for Obesity:</strong> Excessive intake may lead to weight
                    gain, impacting lung function.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th/id/OIP.xP6wBeNTiHY_kGkr0mahnwHaF5?w=229&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='Salty Foods (Chips, Pickles)' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Salty Foods (Chips, Pickles)</h5>
                  <p className='foodpara'><strong>Water Retention:</strong> High salt intake can lead to water
                    retention,
                    affecting lung function.</p>
                  <p className='foodpara'><strong>Exacerbates Asthma:</strong> Excessive sodium may increase asthma
                    symptoms.</p>
                  <p className='foodpara'><strong>Contributes to Inflammation:</strong> Can worsen lung health by
                    promoting fluid buildup.</p>
                </div>
              </motion.article>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th/id/OIP.p_pebnS80ESbaxIixeE25gAAAA?w=210&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt='Artificial Sweeteners' className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className='food-card-title'>Artificial Sweeteners</h5>
                  <p className='foodpara'><strong>Potential Lung Irritant:</strong> Certain artificial sweeteners may
                    trigger respiratory issues.</p>
                  <p className='foodpara'><strong>Linked to Inflammation:</strong> Some studies suggest they can promote
                    inflammation in the body.</p>
                  <p className='foodpara'><strong>May Trigger Asthma:</strong> Artificial sweeteners could exacerbate
                    asthma or allergy symptoms.</p>
                </div>
              </motion.article>
            </div>
          </section>
          <div/>
          </div>
        </div>

        );
        }

        export default Lungs;
