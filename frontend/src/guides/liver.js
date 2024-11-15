
import './Brain.css';
import React, { useState } from 'react';
function Liver(){
  const [guides_liver_status_text, setguides_liver_status_text] = useState("This is the initial text .");
  const [guides_liver_consumed_text, setguides_liver_consumed_text] = useState("This is the initial text.");
  const [guides_liver_info_text, setguides_liver_info_text] = useState("This is the initial text.");
  return(

    <div className="App">
   
   <div className='newflex'>

      <h3 className='head3'>Current Status Of The Liver</h3>

      
      <br></br>
      <br></br>
      <br></br>
          <h2  className='heading'>Status of the Liver :</h2>
            <div class="containernew">
      
    
     <p className='guides_liver_status_text'>
     {guides_liver_status_text}
    
     </p><br></br><br></br>
     </div>
     
   
          <h2 className='heading'>Foods Consumed :</h2>
            <div class="containernew"> 
         
     
       
  <p className='guides_liver_consumed_text'>
{guides_liver_consumed_text}
  </p><br></br><br></br>
    </div>
  <h2 className='heading'>Info about the liver :</h2>
            <div class="containernew">
         
  <p className='guides_liver_info_text'> {guides_liver_info_text}</p>
  <img   src="https://pngfre.com/wp-content/uploads/Liver-21.png"
  alt='.'
  id='change'
  className="food-image-i"/>

</div>
     </div>
  
        <section className="good-foods">
          <h3 className='head31'>FOOD THAT'S GOOD FOR LIVER</h3>
          <div class="particle"></div>
 
 
  
          <article className="food-iteml">
            <img
              src="https://th.bing.com/th?id=OIP.Qmk7f6puo63EoqkKdIAP-QAAAA&w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt='.'
             
              className="food-image"
            />
            <div className="food-contentl">
              <h5  className='head5'> Leafy Greens (Spinach, Kale)</h5><br></br>
               <p className='foodpara'><p className = "foodtext">Rich in Antioxidants:</p> Leafy greens contain antioxidants that help reduce oxidative stress on the liver.</p><br></br>
               <p className='foodpara'><p className = "foodtext">Detoxifying Properties:</p> They help in cleansing the liver by neutralizing harmful substances.</p><br></br>
              
               <p className='foodpara'><p className = "foodtext">Lowers Fat Levels:</p> Consuming leafy greens regularly can reduce liver fat, which promotes better liver function.</p><br></br>
            </div>
          </article>
         
  
  
          <article className="food-itemr">
            <img
              src="https://th.bing.com/th?id=OIP.kyRLAQX3QkDh_mxgYYuAtgAAAA&w=277&h=225&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt='.'
             
              className="food-image"
            />
            <div className="food-contentr">
           
            <div class="particle"></div>
              <h5  className='head5'>Green Tea</h5><br></br>
               <p className='foodpara'><p className = "foodtext">Contains Catechins:</p> A type of antioxidant that boosts liver function and protects it from damage.</p><br></br>
               <p className='foodpara'><p className = "foodtext">Improves Fat Metabolism:</p> Green tea helps in reducing liver fat and supports its detoxification processes.</p><br></br>
               <p className='foodpara'><p className = "foodtext">Protects Against Toxins:</p> Regular consumption can protect the liver from the damage caused by toxins like alcohol.</p><br></br>
            </div>
          </article>
         

          <article className="food-iteml">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt='.'
             
              className="food-image"
            />
            <div className="food-contentl">
            <div class="particle"></div>
  
              <h5  className='head5'> Fatty Fish (Salmon, Mackerel)</h5><br></br>
               <p className='foodpara'><p className = "foodtext">Rich in Omega-3 Fatty Acids:</p> Omega-3s reduce liver inflammation and lower the risk of fatty liver disease.</p><br></br>
               <p className='foodpara'><p className = "foodtext">Reduces Liver Fat Accumulation:</p> Omega-3s help balance the levels of liver fat, promoting better overall function.</p><br></br>
            
               <p className='foodpara'><p className = "foodtext">Improves Enzyme Levels:</p> Fatty fish can help regulate liver enzyme levels, enhancing liver health.</p><br></br>
            </div>
          </article>
          <article className="food-itemr">
          <img
            src="https://www.bing.com/th/id/OIP.B9mTsJ46LPJ_rxfnJZQiiwHaGT?w=225&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className='head5'> Garlic</h5><br></br>
             <p className='foodpara'><p className = "foodtext">Boosts Liver Detoxification:</p> Garlic contains sulfur compounds that enhance the liver's ability to detoxify harmful substances.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Reduces Liver Inflammation:</p> Garlic has anti-inflammatory properties that can help reduce liver damage.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Supports Antioxidant Defense:</p> Garlic promotes antioxidant activity, protecting liver cells from oxidative damage.</p><br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://www.bing.com/th?id=OIP.j1WfA-1HnuUuicubXhR1OwHaEq&w=315&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt='.'
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className='head5'> Walnuts</h5><br></br>
             <p className='foodpara'><p className = "foodtext">Rich in Healthy Fats:</p> Walnuts contain omega-3 fatty acids, which reduce inflammation and protect the liver.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Enhances Detoxification:</p> They aid the liver's detox processes and improve its function.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Supports Liver Repair:</p> Walnuts help regenerate liver tissue by supporting its natural repair processes.</p><br></br>
          </div>
        </article>
        <div class="particle"></div>
        <article className="food-itemr">
          <img
            src="https://www.bing.com/th/id/OIP.p6e_BQT1_HF222FsOhSgYAHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
            className="food-imager"
          />
          <div className="food-content">
            <h5 className='head5'>Turmeric</h5><br></br>
             <p className='foodpara'><p className = "foodtext">Reduces Liver Inflammation:</p> Curcumin in turmeric is known to reduce liver inflammation and protect liver cells.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Boosts Antioxidants:</p> Turmeric promotes the production of antioxidants in the liver, enhancing its detoxification ability.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Supports Liver Repair:</p> Turmeric helps regenerate liver cells and promotes overall liver health.</p><br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.x1csDKOyN70vsQCvHrYPhAAAAA?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className='head5'>Beets</h5><br></br>
             <p className='foodpara'><p className = "foodtext">Rich in Fiber:</p> Beets help in detoxifying the liver by promoting the elimination of toxins.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Supports Liver Health:</p> Beets improve the liver's natural detoxification processes and promote healthy bile production.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Improves Liver Function:</p> Beets have been shown to help reduce fatty deposits in the liver and enhance its function.</p><br></br>
          </div>
        </article>
        <div class="particle"></div>
        <article className="food-itemr">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.tnHP4TZDa1BNEzSSIzk1dwHaGz?w=226&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className='head5'>Avocados</h5><br></br>
             <p className='foodpara'><p className = "foodtext">Rich in Healthy Fats:</p> Avocados contain healthy fats that help lower cholesterol levels and improve liver function.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Enhances Detoxification:</p> They support the liver's ability to detoxify and neutralize harmful substances.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Promotes Liver Health:</p> Regular consumption of avocados helps protect the liver from oxidative stress and inflammation.</p><br></br>
          </div>
        </article>
 
        </section>
  
        <section className="bad-foods">
          <h2 className='head2'>FOOD THAT'S BAD FOR LIVER</h2>
          <div class="nparticle"></div>
  
          <article className="food-iteml">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt='.'
            
              className="food-image"
            />
            <div className="food-contentl">
      
              <h5 className='head5'> Alcohol</h5><br></br>
               <p className='foodpara'><p className = "foodtext">Causes Liver Damage:</p> Excessive alcohol intake can lead to liver inflammation and scarring, resulting in conditions like cirrhosis.</p><br></br>
              
              
               <p className='foodpara'><p className = "foodtext">Disrupts Fat Metabolism:</p> Alcohol interferes with the liver's ability to process fat, leading to fat buildup.</p><br></br>

            
               <p className='foodpara'><p className = "foodtext">Promotes Liver Inflammation:</p> Regular alcohol consumption can trigger inflammation and oxidative stress in the liver.</p><br></br>
            </div>
          </article>
          <div class="nparticle"></div>

  
          <article className="food-itemr">
            <img
              src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt='.'
             
              className="food-image"
            />
            <div className="food-contentr">
       

              <h5  className='head5'>Sugary Foods (Candy, Soft Drinks)</h5><br></br>
               <p className='foodpara'><p className = "foodtext">Leads to Fatty Liver:</p> Excess sugar, particularly fructose, is converted into fat in the liver, leading to fatty liver disease.</p><br></br>
               <p className='foodpara'><p className = "foodtext">Increases Inflammation:</p> A diet high in sugar can cause inflammation, leading to liver damage.</p><br></br>
             
               <p className='foodpara'><p className = "foodtext">Impairs Liver Function:</p> Over time, high sugar intake reduces the liver’s ability to function effectively.</p><br></br>
            </div>
          </article>

  <div class="nparticle"></div>

  

  
          <article className="food-iteml">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt='.'
             
              className="food-image"
            />
            <div className="food-contentl">
          

              <h5  className='head5'>Fried Foods (Fast Food, Chips)</h5><br></br>
               <p className='foodpara'><p className = "foodtext">High in Trans Fats:</p> Fried foods are often loaded with trans fats, which can lead to liver fat accumulation.</p><br></br>
           
               <p className='foodpara'><p className = "foodtext">Causes Inflammation:</p> Trans fats can trigger inflammation in the liver, leading to long-term damage.</p><br></br>
     
               <p className='foodpara'><p className = "foodtext">Leads to Non-Alcoholic Fatty Liver Disease (NAFLD):</p> Frequent consumption of fried foods can result in fat buildup and liver inflammation.</p><br></br>
           
              </div>  <div class="nparticle"></div>
          </article>
          <article className="food-itemr">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.CW22Grctx2l5DxNmU4wZ5gHaEn?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className='head5'> Processed Meats</h5><br></br>
             <p className='foodpara'><p className = "foodtext">High in Sodium and Preservatives:</p> Processed meats like sausages and bacon are high in sodium and chemicals, which stress the liver.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Leads to Inflammation:</p> The preservatives and fats found in processed meats can lead to liver inflammation and disease.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Harmful to Liver Health:</p> Excessive intake of processed meats can harm the liver’s ability to detoxify.</p><br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://png.pngtree.com/png-clipart/20220125/original/pngtree-delicious-salt-and-pepper-peanuts-png-image_7221098.png"
            alt='.'
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className='head5'> Excessive Salt</h5><br></br>
             <p className='foodpara'><p className = "foodtext">Strains the Liver:</p> Too much salt causes water retention, which makes the liver work harder to detoxify the body.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Leads to Fatty Liver:</p> Excess sodium can also lead to fat accumulation around the liver.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Increases Blood Pressure:</p> Excessive salt intake raises blood pressure, further putting strain on the liver.</p><br></br>
          </div>
        </article>  <div class="nparticle"></div>

        <article className="food-itemr">
          <img
            src="https://www.bing.com/th/id/OIP.p_pebnS80ESbaxIixeE25gAAAA?w=210&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className='head5'> Artificial Sweeteners</h5><br></br>
             <p className='foodpara'><p className = "foodtext">Damages Liver Cells:</p> Long-term consumption of artificial sweeteners can damage liver cells and impair liver function.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Disrupts Metabolism:</p> They can disrupt metabolic processes and lead to liver inflammation.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Hinders Detoxification:</p> Artificial sweeteners can hinder the liver's detoxification processes, leading to a buildup of toxins in the body.</p><br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://www.bing.com/th/id/OIP.qLLreN0pA3_rpD_2A7xLeQHaE5?w=284&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className='head5'>High-Fructose Corn Syrup</h5><br></br>
             <p className='foodpara'><p className = "foodtext">Increases Fatty Liver Disease Risk:</p> High-fructose corn syrup is converted to fat in the liver, which can lead to fatty liver disease.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Impairs Liver Function:</p> Excessive consumption of high-fructose corn syrup leads to oxidative stress and impaired liver function.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Promotes Insulin Resistance:</p> This can result in insulin resistance, which increases fat accumulation in the liver.</p><br></br>
          </div>
        </article>
        <div class="nparticle"></div>
        <article className="food-itemr">
          <img
            src="https://static.vecteezy.com/system/resources/previews/030/214/371/original/sliced-white-bread-png.png"
            alt='.'
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className='head5'>White Bread</h5><br></br>
             <p className='foodpara'><p className = "foodtext">Increases Blood Sugar Levels:</p> White bread spikes blood sugar, which can lead to fat accumulation in the liver.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Promotes Inflammation:</p> Refined carbohydrates like white bread increase inflammation, which negatively affects liver health.</p><br></br>
             <p className='foodpara'><p className = "foodtext">Reduces Liver Function:</p> Consuming too much white bread can decrease the liver's efficiency at processing nutrients.</p><br></br>
          </div>
        </article>
 
        </section>
      </div>
    );
}
export default Liver;