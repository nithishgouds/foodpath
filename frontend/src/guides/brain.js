import './Brain.css';
import axios from "axios";
import React, { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { useEffect } from 'react';
import Header from '../homepagenew/components/Header'

function Brain() {

  const [guides_brain_status_text, setguides_brain_status_text] = useState("Analysing...");
  const [guides_brain_consumed_text, setguides_brain_consumed_text] = useState("Getting...");
  const [guides_brain_info_text, setguides_brain_info_text] = useState("Analysing...");
  const [showBulletedList, setShowBulletedList] = useState(false); // or false, based on your logic


    const [isSignIn, setSingIn] = useState(false);
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


  const [organName, setOrganName] = useState("Brain");
  
  function Ostatus(a) {
    switch (a) {
      case 0:
        return "DEAD";
        break;
      case 1:
        return "Healthy";
        break;
      case 2:
        return "Very Healthy";
        break;
      case 3:
        return "UnHealthy";
        break;
      case 4:
        return "Very UnHealthy";
        break;
      default:
        return "Normal";
    }
  }

  useEffect(() => {
    // Make POST request with email and organName in the body
    axios.post('http://localhost:3001/api/organs/organGuides', {
      email: email,
      organName: organName,
    })
      .then(response => {
        const { message, AIorganGuideRes, consumedFoods } = response.data;
    
        // Update state with the response data
        setguides_brain_status_text(Ostatus(AIorganGuideRes.rating)); // Set the status to the message received
        // setguides_brain_consumed_text(consumedFoods.join(', '));
        setguides_brain_consumed_text(consumedFoods);  // Convert consumedFoods array to a comma-separated string
        setguides_brain_info_text(`
        ${AIorganGuideRes.guide1}
        ${AIorganGuideRes.guide2}
        ${AIorganGuideRes.guide3}
        ${AIorganGuideRes.guide4}
        ${AIorganGuideRes.guide5}
        ${AIorganGuideRes.guide6}
        ${AIorganGuideRes.guide7}
        ${AIorganGuideRes.guide8}
        `); // Format guides in separate lines

        setShowBulletedList(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    
  }, []);

  

  return(
<div className='newapp'>
  <Header/>
    <div className="App">
  
   <div className='newflex'>

      <h3 className='head3'  >Current Status Of The Brain</h3>

      <br></br>
      <br></br>
      <br></br>
          <h2  className='heading'>Status of the Organ :</h2>
          <div class="containernew">
      
    
     <p className='guides_brain_status_text'>
     {guides_brain_status_text}
    
     </p><br></br><br></br>
     </div>
     
   
          <h2 className='heading'>Foods Consumed :</h2>
          <div class="containernew"> 
          
       
  <p className='guides_brain_consumed_text'>
{guides_brain_consumed_text}
  </p><br></br><br></br>
       </div>
      <h2 className='heading'>Info about the brain :</h2>
          <div class="containernew">
          
          <div className="guides_brain_info_text">
  {showBulletedList ? (
    <ul className="custom-bulleted-list">
      {guides_brain_info_text.split('\n').map((line, index) => (
        line.trim() && (
          <li key={index} className="custom-bulleted-item">{line}</li>
        )
      ))}
    </ul>
  ) : (
    <p>{guides_brain_info_text}</p>
  )}
</div>


<img src="https://th.bing.com/th/id/R.3cd0ee5e418250f2d18a186841ce60cc?rik=vJb2qOAZkQJ8Zw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fBrain-PNG-Image.png&ehk=cIrtlwwNSqpbI9itUL0CMD3%2b0C59yTt37Wj8jOauEAU%3d&risl=&pid=ImgRaw&r=0"
alt='.'
  
  className="food-image-i"/> 
  
</div>
     </div>

      <section className="good-foods">
        <h3 className='head31' >FOOD THAT'S GOOD FOR BRAIN</h3>
      
  <div class="particle"></div>
 

        <article className="food-iteml">
    
        <img src="https://th.bing.com/th/id/OIP.L1KZ9kz1QJoYJ089IYH4jQHaFV?w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        alt='.'
         className="food-image"/>
     
          <div className="food-contentl">
            <h5 className='head5'> Oranges</h5><br></br>
            <p className='foodpara'><p className = "foodtext">Rich in Vitamin C:</p>
           Vitamin C is a powerful antioxidant that helps prevent mental decline by protecting brain cells from damage by free radicals.</p>
           <br></br>
            <p className='foodpara'><p className = "foodtext">Supports Overall Brain Function:</p>
          
             It helps with the synthesis of neurotransmitters like dopamine and serotonin, which play a role in mood regulation and cognitive function.</p>
             <br></br>
          </div>
        </article>

        <article className="food-itemr">
        
            <img src="https://tse4.mm.bing.net/th/id/OIP.l2WJdPUIQezUJc6rRxv9EAHaE7?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
            alt='.'
             className="food-image"/>
        
          <div className="food-contentr">
          <div class="waves"></div>
  <div class="particle"></div>
 
  <h5 className='head5'> EGGS</h5><br></br>
            <p className='foodpara'><p className = "foodtext">Choline for Memory:</p> 
         
            Choline is used to produce acetylcholine, a neurotransmitter that plays a role in memory and mood regulation.</p>
            <br></br>
            <p className='foodpara'><p className = "foodtext">B Vitamins:</p>
          Eggs are rich in B6, B12, and folate, which have been linked to slowing mental decline and preventing brain shrinkage.</p> <br></br>
            <p className='foodpara'><p className = "foodtext">Enhances Mood:</p>
Folate and B vitamins also play a role in reducing the risk of depression and cognitive impairment.</p> <br></br>
          </div>
        </article>
        <article className="food-iteml">
            <img src="https://www.bing.com/th/id/OIP.GEyLT9N8t1gV5pXZDNXHUAHaFg?w=259&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
             className="food-image" />
            <div className="food-contentl">
              <h5 className='head5'>Blueberries</h5>
              <br></br>
              <p className='foodpara'><p className = "foodtext">Rich in Antioxidants:</p> 
           Blueberries are packed with antioxidants that help fight free radicals and prevent oxidative stress in the brain.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Enhances Memory:</p> 
           Studies show that blueberries may improve memory and delay age-related cognitive decline.</p><br></br>
           <br></br>
            </div>
          </article>

          <article className="food-itemr">
            <img src="https://www.bing.com/th?id=OIP.j1WfA-1HnuUuicubXhR1OwHaEq&w=315&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
            alt='.'
            className="food-image" />
            <div className="food-contentr">
              <h5 className='head5'> Walnuts</h5>
              <br></br>
              <p className='foodpara'><p className = "foodtext">High in Omega-3:</p>
              Walnuts are rich in omega-3 fatty acids, which support brain health and cognitive function.</p><br></br><br></br>
              <p className='foodpara'><p className = "foodtext">Improves Brain Function:</p>
              Regular walnut consumption can improve memory and concentration while protecting against age-related cognitive decline.</p><br></br><br></br>
            </div>
          </article>
          <div class="particle"></div>
 
          <article className="food-iteml">
            <img src="https://www.bing.com/th/id/OIP.tWq2a6lTpuwIa-4U4dWjSgAAAA?w=188&h=141&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
             className="food-image" />
            <div className="food-contentl">
              <h5 className='head5'>Dark Chocolate</h5>
              <br></br>
              <p className='foodpara'><p className = "foodtext">Rich in Flavonoids:</p>
            Dark chocolate is high in flavonoids, which have been shown to boost brain plasticity, improve memory, and enhance cognitive function.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Improves Blood Flow to the Brain:</p>
              The flavonoids in dark chocolate improve blood flow to the brain, increasing brain function and mental clarity.</p><br></br>
            </div>
          </article>

          <article className="food-itemr"> <div class="particle"></div>
 
            <img src="https://th.bing.com/th?id=OIP.Qmk7f6puo63EoqkKdIAP-QAAAA&w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt='.'
             className="food-image" />
            <div className="food-contentr">
              <h5 className='head5'>Spinach</h5>
              <br></br>
              <p className='foodpara'><p className = "foodtext">High in Vitamin K:</p> 
              Spinach is rich in vitamin K, which is essential for the synthesis of sphingolipids, a type of fat found in brain cells.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Supports Brain Function:</p>
          The nutrients in spinach have been shown to improve memory and cognitive function, especially in older adults.</p><br></br>
            </div>
          </article>

          <article className="food-iteml">
            <img src="https://www.bing.com/th/id/OIP.p6e_BQT1_HF222FsOhSgYAHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.' className="food-image" />
            <div className="food-contentl">
              <h5 className='head5'>Turmeric</h5><br></br>
              <p className='foodpara'><p className = "foodtext">Anti-inflammatory Properties:</p>
              Curcumin, the active compound in turmeric, reduces inflammation in the brain and has neuroprotective effects.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Boosts Mood:</p>
             Turmeric can help increase levels of brain-derived neurotrophic factor (BDNF), which improves mood and cognitive function.</p><br></br>
            </div>
          </article>

          <article className="food-itemr">
            <img src="https://www.pngmart.com/files/15/Avocado-PNG-Transparent-HD-Photo.png"
            alt='.'
             className="food-image" />
            <div className="food-contentr">
              <h5 className='head5'> Avocados</h5><br></br>
              <p className='foodpara'><p className = "foodtext">Rich in Healthy Fats:</p>
               Avocados contain healthy fats that support brain function and improve memory.</p><br></br>
              <p className='foodpara'><p className = "foodtext">Boosts Cognitive Function:</p> 
              The monounsaturated fats in avocados help improve overall brain function by increasing blood flow to the brain.</p><br></br>
            </div>
          </article>
      </section>
 
      <section className="bad-foods">
        <h4 className='head4'>FOOD THAT'S BAD FOR BRAIN</h4>
        
  
  <div class="nparticle"></div>

        <article className="food-iteml">
          
            <img src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
            alt='.'
             className="food-image"/>
          
          <div className="food-contentl">

            <h5 className='head5'> Fried Foods (French Fries, Fried Chicken, Doughnuts)</h5><br></br>
            <p className='foodpara'><p className = "foodtext">Lowers Learning Ability:</p>
             Diets high in fried foods have been shown to impair learning and memory over time.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Increases Risk of Dementia:</p>
          Regular consumption of fried foods is associated with an increased risk of dementia and cognitive decline.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Causes Inflammation:</p>
           The high levels of unhealthy fats and oxidized oils in fried foods contribute to inflammation in the brain, negatively affecting cognitive function.</p><br></br>
          </div>
        </article>
 


        <article className="food-itemr">
        
            <img src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
             className="food-image"/>
        
          <div className="food-contentr">
            <h5 className='head5'> Alcohol</h5><br></br>
            <div class="nparticle"></div>
 
  

  
 
            <p className='foodpara'><p className = "foodtext">Impairs Cognitive Function:</p>
             Excessive alcohol consumption can impair memory, decision-making, and motor skills in both the short and long term.</p><br></br>
            < p className='foodpara'><p className = "foodtext">Linked to Brain Shrinkage:</p>
          Chronic alcohol use has been associated with a decrease in brain volume, especially in regions responsible for memory and learning.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Increases Risk of Dementia:</p>
            Heavy drinking significantly increases the risk of developing dementia and other cognitive impairments.</p><br></br>
          </div>
       
        </article>
     
 

  <article className="food-iteml">
    <img src="https://www.bing.com/th/id/OIP.YHffM3-8eeJZMh-kQnhvPQAAAA?w=186&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
     className="food-image" />
    <div className="food-contentl">
      <h5 className='head5'> Sugary Snacks (Candy, Cookies, Soda)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">Increases Inflammation:</p> 
      High sugar intake leads to inflammation in the brain, which can impair memory and cognitive function.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Reduces Brain Plasticity:</p>
       Diets high in sugar have been shown to reduce brain plasticity, which is essential for learning and memory.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Impairs Memory:</p> 
  High sugar consumption can damage the hippocampus, the part of the brain involved in memory and learning.</p><br></br>
    </div>
  </article>

  <article className="food-itemr">
    <img src="https://tse1.mm.bing.net/th/id/OIP.CW22Grctx2l5DxNmU4wZ5gHaEn?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image" />
    <div className="food-contentr">
      <h5 className='head5'> Processed Meats (Bacon, Sausages, Hot Dogs)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">High in Saturated Fats:</p>
    Processed meats contain unhealthy fats that contribute to inflammation in the brain, which impairs cognitive function.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Increases Risk of Alzheimer's:</p>
   Studies have linked high consumption of processed meats to an increased risk of Alzheimer's disease.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Contains Nitrates:</p>
       The nitrates used to preserve processed meats can produce harmful compounds that damage brain cells over time.</p><br></br>
    </div>
  </article>
  <div class="nparticle"></div>

  <article className="food-iteml">
    <img src="https://www.bing.com/th/id/OIP.BEH8rpIxoiUt_AQDRmSYTAHaFY?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
    alt='.'
    className="food-image" />
    <div className="food-contentl">
      <h5 className='head5'> Refined Carbohydrates (White Bread, Pastries, Pizza)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">Causes Blood Sugar Spikes:</p> 
      Refined carbs cause rapid spikes in blood sugar levels, leading to inflammation in the brain.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Linked to Cognitive Decline:</p>
      Diets high in refined carbs have been linked to a higher risk of cognitive decline and dementia in later life.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Increases Risk of Obesity:</p> 
      High consumption of refined carbs contributes to weight gain, which has been associated with reduced brain function.</p><br></br>
    </div>
  </article>

  <article className="food-itemr">
    <img src="https://www.bing.com/th/id/OIP.p_pebnS80ESbaxIixeE25gAAAA?w=210&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
    
    alt='.'
    className="food-image" />
    <div className="food-contentr">
      <h5 className='head5'> Artificial Sweeteners (Aspartame, Sucralose)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">Interferes with Brain Signals:</p>
    Some studies suggest that artificial sweeteners may interfere with neurotransmitter signaling in the brain, affecting mood and cognition.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Linked to Memory Issues:</p>
   Long-term use of artificial sweeteners may be linked to memory deficits and an increased risk of neurodegenerative diseases.</p><br></br>
    </div><div class="nparticle"></div>

  </article>

  <article className="food-iteml">
    <img src="https://www.venturafoods.com/wp-content/uploads/2022/02/margerines-spreads.png"
    alt='.'
     className="food-image" />
    <div className="food-contentl">
      <h5 className='head5'> Trans Fats (Margarine, Packaged Snacks)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">Damages Brain Cells:</p> 
      Trans fats are harmful to brain cells, impairing cognitive function and increasing the risk of Alzheimer's disease.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Raises Inflammation:</p>
      These fats increase inflammation in the brain, which negatively affects mental clarity and memory.</p><br></br>
    </div>
  </article>

  <article className="food-itemr">
    <img src="https://www.bing.com/th/id/OIP.8ZANzjQpk38obzYbB9GKYwAAAA?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image" />
    <div className="food-contentr">
      <h5 className='head5'> High-Sodium Foods (Canned Soups, Processed Cheese)</h5><br></br>
      <p className='foodpara'><p className = "foodtext">Increases Blood Pressure:</p>
  High sodium intake raises blood pressure, which can negatively affect brain health and increase the risk of stroke.</p><br></br>
      <p className='foodpara'><p className = "foodtext">Reduces Cognitive Function:</p>
      Excessive salt intake is linked to reduced cognitive function and may increase the risk of dementia and Alzheimer's disease.</p><br></br>
    </div><div class="nparticle"></div>

  </article>
      </section>
     

    </div>

   </div> );
  }
  
  export default Brain;