import "./Guide.css";
import axios from "axios";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Header from "../homepagenew/components/Header";
import { motion } from "framer-motion";

function Kidney() {
  const [guides_kidney_status_text, setguides_kidney_status_text] =
      useState("Analysing...");
  const [guides_kidney_consumed_text, setguides_kidney_consumed_text] =
      useState("Getting...");
  const [guides_kidney_info_text, setguides_kidney_info_text] =
      useState("Analysing...");

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
    axios
        .post("https://foodpath-backend.onrender.com/api/organs/organGuides", {
          email: email,
          organName: organName,
        })
        .then((response) => {
          const { message, AIorganGuideRes, consumedFoods } = response.data;

          // Update state with the response data
          setguides_kidney_status_text(Ostatus(AIorganGuideRes.rating)); // Set the status to the message received
          // setguides_brain_consumed_text(consumedFoods.join(', '));
          setguides_kidney_consumed_text(consumedFoods); // Convert consumedFoods array to a comma-separated string
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
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  }, [email, organName]);

  return (
      <div className="guide pt-28 mb-8">
        <Header/>
        <div className="guide-content pl-12 ">
          <div className="newflex ">
          <h3 className="head3">Current Status Of The Kidney</h3>

          <br></br>
          <br></br>
          <br></br>
          <h2 className="heading">Status of the Kidney:</h2>
          <div className="containernew">
            <p className="guides_kidney_status_text">
              {guides_kidney_status_text}
            </p>
            <br></br>
            <br></br>
          </div>

          <h2 className="heading">Foods Consumed:</h2>
          <div className="containernew">
            <p className="guides_kidney_consumed_text">
              {guides_kidney_consumed_text}
            </p>
            <br></br>
            <br></br>
          </div>

          <h2 className="heading">Info about the Kidney:</h2>
          <div className="containernew">
            <p className="guides_kidney_info_text">{guides_kidney_info_text}</p>

            {/*<img*/}
            {/*    src="https://static.skillshare.com/uploads/parentClasses/a72e90e7ea1de970ac435da53448dee5/91ca8ce1"*/}
            {/*    alt="."*/}
            {/*    className="food-image-i"*/}
            {/*/>*/}
          </div>
        </div>

        <section className="good-foods">
          <h3 className="head31">FOOD THAT'S GOOD FOR KIDNEY</h3>
          <div className="card-container" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
            <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
              <img
                  src="https://www.bing.com/th/id/OIP.eU2dTqtjWBvSiWe_cUY_OQAAAA?w=173&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Red Bell Peppers" className="food-card-image"/>
              <div className="food-card-content">
                <h5 className="food-card-title">Red Bell Peppers</h5>
                <p className="foodpara"><strong>Low in Potassium:</strong> Helps reduce workload on kidneys.</p>
                <p className="foodpara"><strong>High in Vitamins:</strong> Rich in vitamin C and antioxidants.</p>
              </div>
            </motion.article>

            <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
              <img
                  src="https://th.bing.com/th?id=OIP.PeS8e8xmZneGh88jE1JcpgHaFu&w=284&h=219&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  alt="Cabbage" className="food-card-image"/>
              <div className="food-card-content">
                <h5 className="food-card-title">Cabbage</h5>
                <p className="foodpara"><strong>Nutrient-Rich:</strong> Contains vitamins C, K, and B, with very low
                  potassium.</p>
                <p className="foodpara"><strong>Antioxidant Benefits:</strong> Helps combat free radicals.</p>
              </div>
            </motion.article>

            <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
              <img
                  src="https://static.vecteezy.com/system/resources/previews/027/214/408/original/cauliflower-cauliflower-transparent-background-ai-generated-free-png.png"
                  alt="Cauliflower" className="food-card-image"/>
              <div className="food-card-content">
                <h5 className="food-card-title">Cauliflower</h5>
                <p className="foodpara"><strong>Detoxifying Agent:</strong> Contains compounds that neutralize toxins.
                </p>
                <p className="foodpara"><strong>Rich in Vitamins:</strong> Provides vitamin C and fiber.</p>
              </div>
            </motion.article>

            <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
              <img
                  src="https://www.bing.com/th/id/OIP.B9mTsJ46LPJ_rxfnJZQiiwHaGT?w=225&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Garlic" className="food-card-image"/>
              <div className="food-card-content">
                <h5 className="food-card-title">Garlic</h5>
                <p className="foodpara"><strong>Reduces Inflammation:</strong> Has anti-inflammatory properties.</p>
                <p className="foodpara"><strong>Flavor Enhancer:</strong> Reduces the need for added salt.</p>
              </div>
            </motion.article>

            <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
              <img
                  src="https://www.bing.com/th/id/OIP.AXrK0kpXxixXz-IAHZsqsQHaFj?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Onions" className="food-card-image"/>
              <div className="food-card-content">
                <h5 className="food-card-title">Onions</h5>
                <p className="foodpara"><strong>Low in Potassium:</strong> Great for kidney-friendly diets.</p>
                <p className="foodpara"><strong>Rich in Antioxidants:</strong> Contains quercetin to fight free
                  radicals.</p>
              </div>
            </motion.article>

            <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
              <img
                  src="https://th.bing.com/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  alt="Apples" className="food-card-image"/>
              <div className="food-card-content">
                <h5 className="food-card-title">Apples</h5>
                <p className="foodpara"><strong>High in Fiber:</strong> Supports heart health and digestion.</p>
                <p className="foodpara"><strong>Anti-Inflammatory:</strong> Reduces kidney inflammation.</p>
              </div>
            </motion.article>

            <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
              <img
                  src="https://www.bing.com/th/id/OIP.zVqY4dR0JYUsSe5lSFL6EQHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Cranberries" className="food-card-image"/>
              <div className="food-card-content">
                <h5 className="food-card-title">Cranberries</h5>
                <p className="foodpara"><strong>Prevents UTIs:</strong> Supports bladder and kidney health.</p>
                <p className="foodpara"><strong>Rich in Antioxidants:</strong> Good for overall kidney function.</p>
              </div>
            </motion.article>

            <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
              <img
                  src="https://www.bing.com/th/id/OIP.GEyLT9N8t1gV5pXZDNXHUAHaFg?w=259&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Blueberries" className="food-card-image"/>
              <div className="food-card-content">
                <h5 className="food-card-title">Blueberries</h5>
                <p className="foodpara"><strong>High in Antioxidants:</strong> Reduces inflammation and supports
                  kidneys.</p>
                <p className="foodpara"><strong>Low in Potassium:</strong> Safe for kidney diets.</p>
              </div>
            </motion.article>

            <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
              <img
                  src="https://www.bing.com/th/id/OIP.RWNG3aDeaHAJOzRs42MYQAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Strawberries" className="food-card-image"/>
              <div className="food-card-content">
                <h5 className="food-card-title">Strawberries</h5>
                <p className="foodpara"><strong>Nutrient-Dense:</strong> Contains antioxidants and vitamins.</p>
                <p className="foodpara"><strong>Protects Against Damage:</strong> Reduces oxidative stress on kidneys.
                </p>
              </div>
            </motion.article>

            <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                            initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
              <img
                  src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Fish (Salmon, Mackerel)" className="food-card-image"/>
              <div className="food-card-content">
                <h5 className="food-card-title">Fish (Salmon, Mackerel)</h5>
                <p className="foodpara"><strong>Omega-3 Fatty Acids:</strong> Reduces inflammation and improves blood
                  pressure.</p>
                <p className="foodpara"><strong>Supports Heart Health:</strong> Essential for kidney health.</p>
              </div>
            </motion.article>


          </div>
        </section>

          <section className="bad-foods">
            <h2 className="head31 pt-8">FOOD THAT'S BAD FOR KIDNEY</h2>
            <div className="card-container" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.CW22Grctx2l5DxNmU4wZ5gHaEn?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Processed Meats" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Processed Meats (Hot Dogs, Sausages)</h5>
                  <p className="foodpara"><strong>High in Sodium:</strong> Increases blood pressure and kidney strain.
                  </p>
                  <p className="foodpara"><strong>Preservatives:</strong> Contains additives harmful to kidneys.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th/id/OIP.8ZANzjQpk38obzYbB9GKYwAAAA?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Canned Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Canned Foods</h5>
                  <p className="foodpara"><strong>High in Sodium:</strong> Can lead to water retention and kidney
                    strain.</p>
                  <p className="foodpara"><strong>Preservatives:</strong> Chemicals in canned foods are harsh on
                    kidneys.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Soda and Sugary Drinks" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Soda and Sugary Drinks</h5>
                  <p className="foodpara"><strong>High in Sugar:</strong> Increases risk of diabetes and kidney disease.
                  </p>
                  <p className="foodpara"><strong>Contributes to Dehydration:</strong> Puts additional strain on
                    kidneys.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Alcohol" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Alcohol</h5>
                  <p className="foodpara"><strong>Dehydrating:</strong> Causes kidney dehydration and impairs function.
                  </p>
                  <p className="foodpara"><strong>Toxic Metabolites:</strong> Puts extra pressure on the kidneys to
                    filter.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th?id=OIP.pbYnjMHa2tA22On6j6eHAQHaEr&w=314&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Red Meat" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Red Meat</h5>
                  <p className="foodpara"><strong>Hard to Digest:</strong> Can lead to constipation and strain kidneys.
                  </p>
                  <p className="foodpara"><strong>Linked to Cancer:</strong> High consumption associated with colorectal
                    cancer.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse4.mm.bing.net/th/id/OIP.UNWx5QnfFvyIes0hv4rdwgHaGK?w=232&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Dairy Products" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Dairy Products</h5>
                  <p className="foodpara"><strong>High in Phosphorus:</strong> Can lead to weakened bones for those with
                    kidney issues.</p>
                  <p className="foodpara"><strong>High Protein Load:</strong> May increase kidney workload.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th?id=OIP.tqAWK8yGjpV-Fw2XJiCfhAHaGi&w=266&h=234&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Bananas" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Bananas</h5>
                  <p className="foodpara"><strong>High in Potassium:</strong> Can be harmful for those with compromised
                    kidney function.</p>
                  <p className="foodpara"><strong>Leads to Hyperkalemia:</strong> Excess potassium can affect heart
                    function.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse4.mm.bing.net/th/id/OIP.2rUg3mGOiAqd8mzYOBZvhwHaGz?w=198&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Avocados" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Avocados</h5>
                  <p className="foodpara"><strong>High in Potassium:</strong> Too much potassium can strain kidneys.</p>
                  <p className="foodpara"><strong>Should Be Limited:</strong> Best avoided for those with kidney issues.
                  </p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img src="https://th.bing.com/th/id/OIP.L1KZ9kz1QJoYJ089IYH4jQHaFV?w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Oranges and Orange Juice" className="food-card-image" />
              <div className="food-card-content">
                <h5 className="food-card-title">Oranges and Orange Juice</h5>
                <p className="foodpara"><strong>High in Potassium:</strong> Not suitable for people with kidney problems.</p>
                <p className="foodpara"><strong>Leads to Hyperkalemia:</strong> Can disrupt normal kidney function.</p>
              </div>
            </motion.article>

            <motion.article className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <img src="https://tse3.mm.bing.net/th/id/OIP.mndou8ofE5v67rPNMGlRpQHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Pickled and Fermented Foods" className="food-card-image" />
              <div className="food-card-content">
                <h5 className="food-card-title">Pickled and Fermented Foods</h5>
                <p className="foodpara"><strong>High in Sodium:</strong> Can cause fluid retention and increase blood pressure.</p>
                <p className="foodpara"><strong>Strains Kidneys:</strong> Excess sodium can impair kidney function.</p>
              </div>
            </motion.article>


          </div>
        </section>
      </div>
        </div>
  );
}

export default Kidney;
