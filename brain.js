import './Brain.css';
import React, { useState } from 'react';
function Brain() {

  const [guides_brain_status_text, setguides_brain_status_text] = useState("This is the initial text .");
  const [guides_brain_consumed_text, setguides_brain_consumed_text] = useState("This is the initial text.");
  const [guides_brain_info_text, setguides_brain_info_text] = useState("This is the initial text.");
  return(

    <div className="App">
    <header className='newhead'>
      <h1  >What's Good and Bad for Your Brain?</h1>
    </header>
   <div className='newflex'>

      <h3>Current Status Of The Brain</h3>

      
          <h2  className='heading'>Status of the Organ :</h2>
          <div class="container">
      
    
     <p className='guides_brain_status_text'>
     {guides_brain_status_text}
    
     </p>
     </div>
     
   
          <h2 className='heading'>Foods Consumed :</h2>
          <div class="container"> 
          <div className='food-item-i'>
       
  <p className='guides_brain_consumed_text'>
{guides_brain_consumed_text}
  </p>
      </div> </div>
      <h2 className='heading'>Info about the brain :</h2>
          <div class="container">
          <div className='food-item-i'>
  <p className='guides_brain_info_text'> {guides_brain_info_text}</p></div>
  <img src="https://iiif.elifesciences.org/digests/41250/digest-41250.jpg/full/2000,/0/default.jpg"
  alt="brain"
  className="food-image-i"/>

</div>
     </div>

      <section className="good-foods">
        <h3>Good for Your Brain</h3>
      
  <div class="particle"></div>
 

        <article className="food-item">
    
        <img src="https://th.bing.com/th/id/OIP.L1KZ9kz1QJoYJ089IYH4jQHaFV?w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Oranges" className="food-image"/>
     
          <div className="food-content">
            <h3>1. Oranges</h3>
            <p><strong>Rich in Vitamin C:</strong> Vitamin C is a powerful antioxidant that helps prevent mental decline by protecting brain cells from damage by free radicals.</p>
            <p><strong>Supports Overall Brain Function:</strong> It helps with the synthesis of neurotransmitters like dopamine and serotonin, which play a role in mood regulation and cognitive function.</p>
          </div>
        </article>

        <article className="food-item">
        
            <img src="https://tse4.mm.bing.net/th/id/OIP.l2WJdPUIQezUJc6rRxv9EAHaE7?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Eggs" className="food-image"/>
        
          <div className="food-content">
          <div class="waves"></div>
  <div class="particle"></div>
 

            <p><strong>Choline for Memory:</strong> Choline is used to produce acetylcholine, a neurotransmitter that plays a role in memory and mood regulation.</p>
            <p><strong>B Vitamins:</strong> Eggs are rich in B6, B12, and folate, which have been linked to slowing mental decline and preventing brain shrinkage.</p>
            <p><strong>Enhances Mood:</strong> Folate and B vitamins also play a role in reducing the risk of depression and cognitive impairment.</p>
          </div>
        </article>
      </section>
 
      <section className="bad-foods">
        <h4>Bad for Your Brain</h4>
        <div class="nparticle"></div>

  
  <div class="nparticle"></div>

        <article className="food-item">
          
            <img src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Fried Foods" className="food-image"/>
          
          <div className="food-content">

            <h2>1. Fried Foods (French Fries, Fried Chicken, Doughnuts)</h2>
            <p><strong>Lowers Learning Ability:</strong> Diets high in fried foods have been shown to impair learning and memory over time.</p>
            <p><strong>Increases Risk of Dementia:</strong> Regular consumption of fried foods is associated with an increased risk of dementia and cognitive decline.</p>
            <p><strong>Causes Inflammation:</strong> The high levels of unhealthy fats and oxidized oils in fried foods contribute to inflammation in the brain, negatively affecting cognitive function.</p>
          </div>
        </article>
        <div class="nparticle"></div>
  <div class="nparticle"></div>


        <article className="food-item">
        
            <img src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Alcohol" className="food-image"/>
        
          <div className="food-content">
            <h4>2. Alcohol</h4>
            <div class="nparticle"></div>
 
  

  <div class="nparticle"></div>
  <div class="nparticle"></div>
            <p><strong>Impairs Cognitive Function:</strong> Excessive alcohol consumption can impair memory, decision-making, and motor skills in both the short and long term.</p>
            <p><strong>Linked to Brain Shrinkage:</strong> Chronic alcohol use has been associated with a decrease in brain volume, especially in regions responsible for memory and learning.</p>
            <p><strong>Increases Risk of Dementia:</strong> Heavy drinking significantly increases the risk of developing dementia and other cognitive impairments.</p>
          </div>
       
        </article>
     
  <div class="nparticle"></div>
  <div class="nparticle"></div>
  <div class="nparticle"></div>
      </section>
     

    </div>

    );
  }
  
  export default Brain;