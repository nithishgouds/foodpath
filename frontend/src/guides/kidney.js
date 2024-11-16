import './Brain.css';
import axios from "axios";
import React, { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { useEffect } from 'react';

function Kidney() {
  const [guides_kidney_status_text, setguides_kidney_status_text] = useState("Analysing...");
  const [guides_kidney_consumed_text, setguides_kidney_consumed_text] = useState("Getting...");
  const [guides_kidney_info_text, setguides_kidney_info_text] = useState("Analysing...");

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


const [organName, setOrganName] = useState("Kidney");

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
      setguides_kidney_status_text(Ostatus(AIorganGuideRes.rating)); // Set the status to the message received
      // setguides_brain_consumed_text(consumedFoods.join(', '));
      setguides_kidney_consumed_text(consumedFoods);  // Convert consumedFoods array to a comma-separated string
      setguides_kidney_info_text(`
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
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  
}, [email, organName]);

  return (
    <div className="App">
     
      <div className='newflex'>
        <h3 className='head3'>Current Status Of The Kidney</h3>
        
      <br></br>
      <br></br><br></br>
        <h2 className='heading'>Status of the Kidney:</h2>
          <div className="containernew">
          <p className='guides_kidney_status_text'>{guides_kidney_status_text}</p><br></br><br></br>
        </div>

        <h2 className='heading'>Foods Consumed:</h2>
          <div className="containernew">
         
            <p className='guides_kidney_consumed_text'>{guides_kidney_consumed_text}</p><br></br><br></br>
          </div>
       

        <h2 className='heading'>Info about the Kidney:</h2>
          <div className="containernew">
         
            <p className='guides_kidney_info_text'>{guides_kidney_info_text}</p>
        
          <img 
            src="https://static.skillshare.com/uploads/parentClasses/a72e90e7ea1de970ac435da53448dee5/91ca8ce1"
            alt='.'
            className="food-image-i"
          />
        </div>
      </div>

      <section className="good-foods">
        <h3 className='head31'>FOOD THAT'S GOOD FOR KIDNEY</h3>

        <article className="food-iteml">
        <img
              src="https://www.bing.com/th/id/OIP.eU2dTqtjWBvSiWe_cUY_OQAAAA?w=173&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
            <div className="food-contentl">
          <h5 className='head5'> Red Bell Peppers</h5><br></br>
          <p className='foodpara'><p className = "foodtext">Low in Potassium:</p> Helps reduce the workload on kidneys.</p><br></br>
          <p className='foodpara'><p className = "foodtext">High in Vitamins:</p> Rich in vitamin C and antioxidants.</p><br></br>
       </div> </article>

        <article className="food-itemr">
        <img
              src="https://th.bing.com/th?id=OIP.PeS8e8xmZneGh88jE1JcpgHaFu&w=284&h=219&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt='.'
              className="food-image"
            />
              <div className="food-contentr">
          <h5 className='head5'>Cabbage</h5><br></br>
          <p className='foodpara'><p className = "foodtext">Nutrient-Rich:</p> Contains vitamins C, K, and B, with very low potassium.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Antioxidant Benefits:</p> Helps combat free radicals.</p><br></br>
          </div> </article>


        <article className="food-iteml">
        <img
              src="https://static.vecteezy.com/system/resources/previews/027/214/408/original/cauliflower-cauliflower-transparent-background-ai-generated-free-png.png"
            alt='.'
              className="food-image"
            />
              <div className="food-contentl">
          <h5 className='head5'>Cauliflower</h5><br></br>
          <p className='foodpara'><p className = "foodtext">Detoxifying Agent:</p> Contains compounds that neutralize toxins.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Rich in Vitamins:</p> Provides vitamin C and fiber.</p><br></br>
      </div>  </article>

        <article className="food-itemr">
        <img
              src="https://www.bing.com/th/id/OIP.B9mTsJ46LPJ_rxfnJZQiiwHaGT?w=225&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentr">
          <h5 className='head5'> Garlic</h5><br></br>
          <p className='foodpara'><p className = "foodtext">Reduces Inflammation:</p> Has anti-inflammatory properties.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Flavor Enhancer:</p> Reduces the need for added salt.</p><br></br>
      </div>  </article>

        <article className="food-iteml">
        <img
              src="https://www.bing.com/th/id/OIP.AXrK0kpXxixXz-IAHZsqsQHaFj?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentl">
          <h5 className='head5'>Onions</h5><br></br>
          <p className='foodpara'><p className = "foodtext">Low in Potassium:</p> Great for kidney-friendly diets.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Rich in Antioxidants:</p> Contains quercetin to fight free radicals.</p><br></br>
      </div>  </article>

        <article className="food-itemr">
        <img
              src="https://th.bing.com/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt='.'
              className="food-image"
            />
              <div className="food-contentr">
          <h5 className='head5'> Apples</h5><br></br>
          <p className='foodpara'><p className = "foodtext">High in Fiber:</p> Supports heart health and digestion.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Anti-Inflammatory:</p> Reduces kidney inflammation.</p><br></br>
       </div> </article>

        <article className="food-iteml">
        <img
              src="https://www.bing.com/th/id/OIP.zVqY4dR0JYUsSe5lSFL6EQHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentl">
          <h5 className='head5'>Cranberries</h5><br></br>
          <p className='foodpara'><p className = "foodtext">Prevents UTIs:</p> Supports bladder and kidney health.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Rich in Antioxidants:</p> Good for overall kidney function.</p><br></br>
       </div> </article>

        <article className="food-itemr">
        <img
              src="https://www.bing.com/th/id/OIP.GEyLT9N8t1gV5pXZDNXHUAHaFg?w=259&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentr">
          <h5 className='head5'>Blueberries</h5><br></br>
          <p className='foodpara'><p className = "foodtext">High in Antioxidants:</p> Reduces inflammation and supports kidneys.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Low in Potassium:</p> Safe for kidney diets.</p><br></br>
      </div>  </article>

        <article className="food-iteml">
        <img
              src="https://www.bing.com/th/id/OIP.RWNG3aDeaHAJOzRs42MYQAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentl">
          <h5 className='head5'>Strawberries</h5><br></br>
          <p className='foodpara'><p className = "foodtext">Nutrient-Dense:</p> Contains antioxidants and vitamins.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Protects Against Damage:</p> Reduces oxidative stress on kidneys.</p><br></br>
      </div>  </article>

        <article className="food-itemr">
        <img
              src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentr">
          <h5 className='head5'> Fish (Salmon, Mackerel)</h5><br></br>
          <p className='foodpara'><p className = "foodtext">Omega-3 Fatty Acids:</p> Reduces inflammation and improves blood pressure.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Supports Heart Health:</p> Essential for kidney health.</p><br></br>
        </div></article>
      </section>

      <section className="bad-foods">
        <h2 className='head2'>FOOD THAT'S BAD FOR KIDNEY</h2>

        <article className="food-iteml">
        <img
              src="https://tse1.mm.bing.net/th/id/OIP.CW22Grctx2l5DxNmU4wZ5gHaEn?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentl">
          <h5 className='head5'>Processed Meats (Hot Dogs, Sausages)</h5><br></br>
          <p className='foodpara'><p className = "foodtext">High in Sodium:</p> Increases blood pressure and kidney strain.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Preservatives:</p> Contains additives harmful to kidneys.</p><br></br>
       </div> </article>

        <article className="food-itemr">
        <img
              src="https://www.bing.com/th/id/OIP.8ZANzjQpk38obzYbB9GKYwAAAA?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentr">
          <h5 className='head5'>Canned Foods</h5><br></br>
          <p className='foodpara'><p className = "foodtext">High in Sodium:</p> Can lead to water retention and kidney strain.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Preservatives:</p> Chemicals in canned foods are harsh on kidneys.</p><br></br>
      </div>  </article>

        <article className="food-iteml">
        <img
              src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt='.'
              className="food-image"
            />
              <div className="food-contentl">
          <h5 className='head5'> Soda and Sugary Drinks</h5><br></br>
          <p className='foodpara'><p className = "foodtext">High in Sugar:</p> Increases risk of diabetes and kidney disease.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Contributes to Dehydration:</p> Puts additional strain on kidneys.</p><br></br>
     </div>   </article>

        <article className="food-itemr">
        <img
              src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentr">
          <h5 className='head5'>Alcohol</h5><br></br>
          <p className='foodpara'><p className = "foodtext">Dehydrating:</p> Causes kidney dehydration and impairs function.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Toxic Metabolites:</p> Puts extra pressure on the kidneys to filter.</p><br></br>
       </div> </article>

        <article className="food-iteml">
        <img
              src="https://th.bing.com/th?id=OIP.pbYnjMHa2tA22On6j6eHAQHaEr&w=314&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt='.'
              className="food-image"
            />
              <div className="food-contentl">
          <h5 className='head5'> Red Meat</h5><br></br>
          <p className='foodpara'><p className = "foodtext">Hard to Digest:</p> Can lead to constipation and strain kidneys.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Linked to Cancer:</p> High consumption associated with colorectal cancer.</p><br></br>
       </div> </article>

        <article className="food-itemr">
        <img
              src="https://tse4.mm.bing.net/th/id/OIP.UNWx5QnfFvyIes0hv4rdwgHaGK?w=232&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentr">
          <h5 className='head5'>Dairy Products</h5><br></br>
          <p className='foodpara'><p className = "foodtext">High in Phosphorus:</p> Can lead to weakened bones for those with kidney issues.</p><br></br>
          <p className='foodpara'><p className = "foodtext">High Protein Load:</p> May increase kidney workload.</p><br></br>
      </div>  </article>

        <article className="food-iteml">
        <img
              src="https://www.bing.com/th?id=OIP.tqAWK8yGjpV-Fw2XJiCfhAHaGi&w=266&h=234&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt='.'
              className="food-image"
            />
              <div className="food-contentl">
          <h5 className='head5'> Bananas</h5><br></br>
          <p className='foodpara'><p className = "foodtext">High in Potassium:</p> Can be harmful for those with compromised kidney function.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Leads to Hyperkalemia:</p> Excess potassium can affect heart function.</p><br></br>
      </div>  </article>

        <article className="food-itemr">
        <img
              src="https://tse4.mm.bing.net/th/id/OIP.2rUg3mGOiAqd8mzYOBZvhwHaGz?w=198&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentr">
          <h5 className='head5'>Avocados</h5><br></br>
          <p className='foodpara'><p className = "foodtext">High in Potassium:</p> Too much potassium can strain kidneys.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Should Be Limited:</p> Best avoided for those with kidney issues.</p><br></br>
       </div> </article>

        <article className="food-iteml">
        <img
              src="https://th.bing.com/th/id/OIP.L1KZ9kz1QJoYJ089IYH4jQHaFV?w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt='.'
              className="food-image"
            />
              <div className="food-contentl">
          <h5 className='head5'>Oranges and Orange Juice</h5><br></br>
          <p className='foodpara'><p className = "foodtext">High in Potassium:</p> Not suitable for people with kidney problems.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Leads to Hyperkalemia:</p> Can disrupt normal kidney function.</p><br></br>
     </div>   </article>

        <article className="food-itemr">
        <img
              src="https://tse3.mm.bing.net/th/id/OIP.mndou8ofE5v67rPNMGlRpQHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt='.'
              className="food-image"
            />
              <div className="food-contentr">
          <h5 className='head5'>Pickled and Fermented Foods</h5><br></br>
          <p className='foodpara'><p className = "foodtext">High in Sodium:</p> Can cause fluid retention and increase blood pressure.</p><br></br>
          <p className='foodpara'><p className = "foodtext">Strains Kidneys:</p> Excess sodium can impair kidney function.</p><br></br>
       </div> </article>
      </section>
    </div>
  );
}

export default Kidney;
