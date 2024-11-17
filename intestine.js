
import './Brain.css';
import React, { useState } from 'react';
function Intestine(){
  const [guides_intestine_status_text, setguides_intestine_status_text] = useState("This is the initial text .");
  const [guides_intestine_consumed_text, setguides_intestine_consumed_text] = useState("This is the initial text.");
  const [guides_intestine_info_text, setguides_intestine_info_text] = useState("This is the initial text.");
  return(

    <div className="App">
    <header className='newhead'>
      <h1  >What's Good and Bad for Your Intestine?</h1>
    </header>
   <div className='newflex'>

      <h3>Current Status Of The Intestine</h3>

      
          <h2  className='heading'>Status of the Intestine :</h2>
          <div class="container">
      
    
     <p className='guides_intestine_status_text'>
     {guides_intestine_status_text}
    
     </p>
     </div>
     
   
          <h2 className='heading'>Foods Consumed :</h2>
          <div class="container"> 
          <div className='food-item-i'>
       
  <p className='guides_intestine_consumed_text'>
{guides_intestine_consumed_text}
  </p>
  </div>  </div><h2 className='heading'>Info about the Intestine :</h2>
          <div class="container">
          <div className='food-item-i'>
  <p className='guides_intestine_info_text'> {guides_intestine_info_text}</p></div>
  <img src="https://c8.alamy.com/comp/JABGW6/human-intestine-illustration-as-a-digestive-system-organ-and-digestion-JABGW6.jpg"
  alt="Intestine"
  className="food-image-i"/>

</div>
     </div>
  
        <section className="good-foods">
          <h3>Good for Your Intestine</h3>
  
          <div class="particle"></div>
  
          <article className="food-item">
            <img
              src="https://th.bing.com/th?id=OIP.PeS8e8xmZneGh88jE1JcpgHaFu&w=284&h=219&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="High-Fiber Foods"
              className="food-image"
            />
            <div className="food-content">
              <h3>1. High-Fiber Foods (Whole Grains, Vegetables)</h3>
              <p><strong>Promotes Regularity:</strong> Fiber helps maintain smooth digestion and prevents constipation.</p>

              <p><strong>Feeds Gut Bacteria:</strong> Soluble fiber promotes healthy gut flora by providing food for beneficial bacteria.</p>
              <p><strong>Reduces Inflammation:</strong> A diet rich in fiber can reduce intestinal inflammation and improve bowel health.</p>
            </div>
          </article>
  
          <article className="food-item">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.gQLzkzxIGlHngcgTF4EdxQHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Fermented Foods"
              className="food-image"
            />
            <div className="food-content">
            <div class="particle"></div>
 

              <h3>2. Fermented Foods (Kimchi, Sauerkraut)</h3>
              <p><strong>Rich in Probiotics:</strong> Fermented foods contain live bacteria that improve gut health by balancing the intestinal microbiome.</p>
              <p><strong>Improves Digestion:</strong> Probiotics can help break down food and enhance nutrient absorption.</p>
            

              <p><strong>Supports Immune Function:</strong> A healthy gut can bolster the immune system, as many immune cells are located in the intestines.</p>
            </div>
          </article>
  
          <article className="food-item">
            <img
              src="https://th.bing.com/th?id=OIP.a2C1m4ANAydojmA6Y2yITgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Water"
              className="food-image"
            />
            <div className="food-content">
           

              <h3>3. Water</h3>
              <p><strong>Aids in Digestion:</strong> Staying hydrated helps prevent constipation and ensures smooth bowel movements.</p>
              <p><strong>Flushes Toxins:</strong> Water helps cleanse the intestines by flushing out waste and toxins.</p>
              <div class="particle"></div>


              <p><strong>Supports Nutrient Absorption:</strong> Water is essential for breaking down food and absorbing nutrients in the intestines.</p>
            </div>
          </article>
        </section>
  
        <section className="bad-foods">
          <h2>Bad for Your Intestine</h2>
          <div class="nparticle"></div>
  
          <article className="food-item">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.MgE-cT93SEQTWdcVG2B_pgHaEk?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Processed Foods"
              className="food-image"
            />
            <div className="food-content">
              <h2>1. Processed Foods (Chips, Fast Food)</h2>
              <p><strong>Low in Fiber:</strong> Processed foods often lack fiber, leading to slower digestion and constipation.</p>
              <p><strong>Disrupts Gut Bacteria:</strong> Excessive consumption of processed foods can harm gut bacteria, leading to digestive problems.</p>
              <div class="nparticle"></div>
  
              <p><strong>Promotes Inflammation:</strong> The artificial ingredients and preservatives in processed foods can cause inflammation in the intestines.</p>
            </div>
          </article>
  
          <article className="food-item">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Alcohol"
              className="food-image"
            />
            <div className="food-content">
              <h2>2. Alcohol</h2>
              <div class="nparticle"></div>
 
              <p><strong>Irritates Intestinal Lining:</strong> Alcohol can damage the protective lining of the intestines, leading to inflammation and discomfort.</p>
              <p><strong>Disrupts Digestion:</strong> Alcohol interferes with digestive enzymes and nutrient absorption, causing gastrointestinal problems.</p>
  
              <p><strong>Leads to Dysbiosis:</strong> Excessive drinking can cause an imbalance in gut bacteria, leading to poor digestion and intestinal issues.</p>
            </div>
          </article>
  
          <article className="food-item">
            <img
              src="https://th.bing.com/th?id=OIP.pbYnjMHa2tA22On6j6eHAQHaEr&w=314&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Red Meat"
              className="food-image"
            />

            <div className="food-content">
              <h2>3. Red Meat</h2>
              <p><strong>Hard to Digest:</strong> Red meat is difficult for the intestines to break down and can lead to constipation.</p>
              <div class="nparticle"></div>

  
              <p><strong>Increases Risk of Colorectal Cancer:</strong> Frequent consumption of red meat has been linked to a higher risk of colon and rectal cancers.</p>
              <p><strong>Contributes to Inflammation:</strong> High consumption of red meat can trigger inflammation in the intestines, leading to digestive problems.</p>
              
 
 </div>
          </article>
        </section>
      </div>
    );
}
export default Intestine;