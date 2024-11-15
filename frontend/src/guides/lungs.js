
import './Brain.css';
import React, { useState } from 'react';
function Lungs(){

       
  const [guides_lungs_status_text, setguides_lungs_status_text] = useState("This is the initial text .");
  const [guides_lungs_consumed_text, setguides_lungs_consumed_text] = useState("This is the initial text.");
  const [guides_lungs_info_text, setguides_lungs_info_text] = useState("This is the initial text.");
  return(

    <div className="App">
    <header className='newhead'>
      <h1  className='para' >What's Good and Bad for Your Lungs?</h1>
    </header>
   <div className='newflex'>

      <h3 className='head3'>Current Status Of The Lungs</h3>

      
          <h2  className='heading'>Status of the Lungs :</h2>
          <div class="container">
      
    
     <p className='guides_lungs_status_text'>
     {guides_lungs_status_text}
    
     </p>
     </div>
     
   
          <h2 className='heading'>Foods Consumed :</h2>
          <div class="container"> 
        
       
  <p className='guides_lungs_consumed_text'>
{guides_lungs_consumed_text}
  </p>
    </div><h2 className='heading'>Info about the Lungs :</h2>
          <div class="container">
        
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
          <div className="food-contentl">
            <h5  className='head5'>Leafy Greens (Spinach, Kale)</h5><br></br>
            <p className='foodpara'><p className = "foodtext">Rich in Antioxidants:</p> Help protect lung tissue from damage caused by pollution and cigarette smoke.</p><br></br>
      

            <p className='foodpara'><p className = "foodtext">Vitamin C and E:</p> These vitamins support lung function by fighting oxidative stress.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Anti-inflammatory Properties:</p> Reducing lung inflammation can improve respiratory health.</p><br></br>
           </div>
        </article>
        <div class="particle"></div>
 
        <article className="food-itemr">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
            className="food-image"
          />
          <div className="food-contentr">
            <h5  className='head5'>Fatty Fish (Salmon, Sardines)</h5><br></br>
          

            <p className='foodpara'><p className = "foodtext">Omega-3 Fatty Acids:</p> Help reduce inflammation in the lungs, improving overall lung function.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Reduces Asthma Symptoms:</p> Regular consumption of fatty fish can alleviate asthma symptoms.</p><br></br>
           
            <p className='foodpara'><p className = "foodtext">Prevents Respiratory Illness:</p> Omega-3s support lung health by reducing inflammation caused by respiratory diseases.</p><br></br>
          </div>
        </article>
      
        <article className="food-iteml">
          <img
            src="https://th.bing.com/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt='.'
            className="food-image"
          />
          <div className="food-contentl">
            <h5  className='head5'> Apples</h5><br></br>
           
            <p className='foodpara'><p className = "foodtext">High in Antioxidants:</p> Help reduce the decline of lung function as people age.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Improves Respiratory Health:</p> Regular consumption of apples has been linked to better overall lung function.</p><br></br>
            
            <p className='foodpara'><p className = "foodtext">Quercetin:</p> A flavonoid in apples that helps reduce oxidative damage to the lungs.</p><br></br>
           
          </div>
        </article>
        <article className="food-itemr">
  <img
    src="https://www.bing.com/th/id/OIP.GEyLT9N8t1gV5pXZDNXHUAHaFg?w=259&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  alt='.'
    className="food-image"
  />
  <div className="food-contentr">
    <h5 className='head5'> Berries (Blueberries, Raspberries)</h5><br></br>
    <p className='foodpara'><p className = "foodtext">High in Antioxidants:</p> Berries are rich in anthocyanins, which reduce lung damage and inflammation.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Supports Lung Function:</p> Regular consumption can help maintain respiratory health.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Prevents Oxidative Damage:</p> The antioxidants in berries protect lung tissue from pollutants.</p><br></br>
  </div>
</article>

<article className="food-iteml">
  <img
    src="https://www.bing.com/th?id=OIP.j1WfA-1HnuUuicubXhR1OwHaEq&w=315&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
   alt='.'
    className="food-image"
  />
  <div className="food-contentl">
    <h5 className='head5'> Nuts and Seeds (Almonds, Flaxseeds)</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Rich in Vitamin E:</p> Helps protect cells from oxidative damage, supporting lung function.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Anti-inflammatory:</p> Reduces inflammation in lung tissues.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Omega-3 Fatty Acids:</p> Found in flaxseeds, beneficial for respiratory health.</p><br></br>
  </div>
</article>

<article className="food-itemr">
  <img
    src="https://th.bing.com/th?id=OIP.2GnzkY2_WugcUUHZq7ovxgHaGS&w=271&h=230&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
   alt='.'
    className="food-image"
  />
  <div className="food-contentr">
    <h5 className='head5'>Ginger</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Clears Airways:</p> Known for reducing mucus and opening up airways.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Anti-inflammatory Properties:</p> Reduces inflammation in the lungs and eases breathing.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Antioxidant Effects:</p> Helps in detoxifying the lungs from pollutants.</p><br></br>
  </div>
</article>

<article className="food-iteml">
  <img
    src="https://www.bing.com/th/id/OIP.mtGep9sTfgXz1W_6ezXGtQHaF8?w=211&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
  <div className="food-contentl">
    <h5 className='head5'>Beets and Beet Greens</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Nitric Oxide Production:</p> Improves lung function and helps dilate blood vessels.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Rich in Antioxidants:</p> Beet greens provide compounds that support lung health.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Reduces Inflammation:</p> The nitrates in beets contribute to reducing lung inflammation.</p><br></br>
  </div>
</article>

<article className="food-itemr">
  <img
    src="https://www.bing.com/th/id/OIP.LRnCvYY4Ol5edevkmMNrwgHaFS?w=247&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
  <div className="food-contentr">
    <h5 className='head5'>Turmeric</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Curcumin:</p> The active compound has strong anti-inflammatory effects.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Protects Lungs:</p> Regular consumption can reduce the risk of lung disease.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Improves Airflow:</p> Known to benefit people with asthma and COPD.</p><br></br>
  </div>
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
          <div className="food-contentl">
            <h5  className='head5'>Processed Meats (Bacon, Sausage)</h5><br></br>
           

            <p className='foodpara'><p className = "foodtext">Nitrites:</p> Found in processed meats, can worsen lung health by increasing oxidative stress.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Linked to Chronic Obstructive Pulmonary Disease (COPD):</p> Frequent consumption may increase the risk of developing COPD.</p><br></br>
         
  
 
            <p className='foodpara'><p className = "foodtext">Promotes Inflammation:</p> Processed meats contribute to inflammation, which can exacerbate lung conditions.</p><br></br>
          
            </div>
        </article>

        <article className="food-itemr">
          <img
            src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt='.'
            className="food-image"
          />
          <div className="food-contentr">
          <div class="nparticle"></div>
     
            <h5  className='head5'>Sugary Beverages (Soda, Energy Drinks)</h5><br></br>
          
  
            <p className='foodpara'><p className = "foodtext">Increases Inflammation:</p> High sugar intake promotes systemic inflammation, negatively impacting lung function.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Risk of Asthma:</p> Sugary drinks can worsen symptoms of asthma and increase the risk of respiratory diseases.</p><br></br>
      
  
            <p className='foodpara'><p className = "foodtext">Obesity:</p> Weight gain from sugary drinks can strain the lungs and lead to respiratory problems.</p><br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt='.'
            className="food-image"
          />
          <div className="food-contentl">
            <h5  className='head5'> Fried Foods (French Fries, Fried Chicken)</h5><br></br>
          
            <p className='foodpara'><p className = "foodtext">Trans Fats:</p> Increase inflammation in the lungs, worsening lung conditions.</p><br></br>
            <p className='foodpara'><p className = "foodtext">Increases Risk of Lung Diseases:</p> Fried foods can lead to inflammation and conditions like asthma.</p><br></br>
       
 
            <p className='foodpara'><p className = "foodtext">Weight Gain:</p> Obesity from high-calorie fried foods can make it harder for the lungs to function properly.</p><br></br>
           
            </div>
            <div class="nparticle"></div>
        </article>
        <article className="food-itemr">
  <img
    src="https://tse4.mm.bing.net/th/id/OIP.UNWx5QnfFvyIes0hv4rdwgHaGK?w=232&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
  <div className="food-contentr">
    <h5 className='head5'>Dairy Products (Full-fat Milk, Cheese)</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Produces Mucus:</p> Dairy can thicken mucus, making it harder to clear airways.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Triggers Asthma Symptoms:</p> Some individuals may find that dairy worsens asthma.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Inflammatory Potential:</p> Full-fat dairy products can contribute to inflammation.</p><br></br>
  </div>
</article>

<article className="food-iteml">
  <img
    src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
  <div className="food-contentl">
    <h5 className='head5'>Excessive Alcohol</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Dehydration:</p> Can dry out the respiratory tract.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Suppresses Immune Function:</p> Alcohol can impair the body's ability to fight respiratory infections.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Reduces Lung Defense:</p> Chronic use may weaken the lung's natural defense system.</p><br></br>
  </div>
</article>

<article className="food-itemr">
  <img
    src="https://www.bing.com/th/id/OIP.8-zc2m8dW1-37-mtD8qZ2AHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
  <div className="food-contentr">
    <h5 className='head5'>White Bread and Pasta</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Low Nutritional Value:</p> Processed carbs provide little benefit for lung health.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Causes Inflammation:</p> High glycemic index can trigger inflammation in the body.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Potential for Obesity:</p> Excessive intake may lead to weight gain, impacting lung function.</p><br></br>
  </div>
</article>

<article className="food-iteml">
  <img
    src="https://www.bing.com/th/id/OIP.xP6wBeNTiHY_kGkr0mahnwHaF5?w=229&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.' 
    className="food-image"
  />
  <div className="food-contentl">
    <h5 className='head5'> Salty Foods (Chips, Pickles)</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Water Retention:</p> High salt intake can lead to water retention, affecting lung function.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Exacerbates Asthma:</p> Excessive sodium may increase asthma symptoms.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Contributes to Inflammation:</p> Can worsen lung health by promoting fluid buildup.</p><br></br>
  </div>
</article>

<article className="food-itemr">
  <img
    src="https://www.bing.com/th/id/OIP.p_pebnS80ESbaxIixeE25gAAAA?w=210&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt='.'
    className="food-image"
  />
  <div className="food-contentr">
    <h5 className='head5'>Artificial Sweeteners</h5><br></br>
    <p className='foodpara'><p className = "foodtext">Potential Lung Irritant:</p> Certain artificial sweeteners may trigger respiratory issues.</p><br></br>
    <p className='foodpara'><p className = "foodtext">Linked to Inflammation:</p> Some studies suggest they can promote inflammation in the body.</p><br></br>
    <p className='foodpara'><p className = "foodtext">May Trigger Asthma:</p> Artificial sweeteners could exacerbate asthma or allergy symptoms.</p><br></br>
  </div>
</article>

      </section>
    </div>


    );
}
export default Lungs;