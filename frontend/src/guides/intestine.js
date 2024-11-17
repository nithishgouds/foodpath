import "./Guide.css";
import axios from "axios";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Header from "../homepagenew/components/Header";
import { motion } from "framer-motion";

function Intestine() {
  const [guides_intestine_status_text, setguides_intestine_status_text] =
      useState("Analysing...");
  const [guides_intestine_consumed_text, setguides_intestine_consumed_text] =
      useState("Getting...");
  const [guides_intestine_info_text, setguides_intestine_info_text] =
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

  const [organName, setOrganName] = useState("Intestine");

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
          setguides_intestine_status_text(Ostatus(AIorganGuideRes.rating)); // Set the status to the message received
          // setguides_brain_consumed_text(consumedFoods.join(', '));
          setguides_intestine_consumed_text(consumedFoods); // Convert consumedFoods array to a comma-separated string
          setguides_intestine_info_text(`
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
          <h3 className="head3">Current Status Of The Intestine</h3>

          <br></br>
          <br></br>
          <br></br>

          <h2 className="heading">Status of the Intestine :</h2>
          <div class="containernew">
            <p className="guides_intestine_status_text">
              {guides_intestine_status_text}
            </p>
            <br></br>
            <br></br>
          </div>

          <h2 className="heading">Foods Consumed :</h2>
          <div class="containernew">
            <p className="guides_intestine_consumed_text">
              {guides_intestine_consumed_text}
            </p>
            <br></br>
            <br></br>
          </div>
          <h2 className="heading">Info about the Intestine :</h2>
          <div class="containernew">
            <div>
              {guides_intestine_info_text.split("\n").map((line, index) => (
                  <p className="guides_heart_info_text"> {line}</p>
              ))}
            </div>
            {/*<img*/}
            {/*    src="https://img.freepik.com/premium-photo/life-art_1139222-8704.jpg"*/}
            {/*    alt="."*/}
            {/*    className="food-image-i"*/}
            {/*/>*/}
          </div>
        </div>

          <section className="good-foods">
            <h3 className="head31">FOOD THAT'S GOOD FOR INTESTINE</h3>

            <div className="card-container four-elements" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th?id=OIP.PeS8e8xmZneGh88jE1JcpgHaFu&w=284&h=219&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="High-Fiber Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">High-Fiber Foods (Whole Grains, Vegetables)</h5>
                  <p className="foodpara"><strong>Promotes Regularity:</strong> Fiber helps maintain smooth digestion
                    and prevents constipation.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.gQLzkzxIGlHngcgTF4EdxQHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Fermented Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Fermented Foods (Kimchi, Sauerkraut)</h5>
                  <p className="foodpara"><strong>Rich in Probiotics:</strong> Fermented foods contain live bacteria
                    that improve gut health by balancing the intestinal microbiome.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.Qmk7f6puo63EoqkKdIAP-QAAAA?w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Leafy Greens" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Leafy Greens (Spinach, Kale)</h5>
                  <p className="foodpara"><strong>Rich in Fiber:</strong> Leafy greens help promote the growth of
                    healthy gut bacteria, supporting digestion.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse3.mm.bing.net/th/id/OIP.GEyLT9N8t1gV5pXZDNXHUAHaFg?w=259&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Berries" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Berries (Blueberries, Raspberries)</h5>
                  <p className="foodpara"><strong>Rich in Antioxidants:</strong> Berries help protect the gut lining and
                    reduce inflammation.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse2.mm.bing.net/th/id/OIP.4GqtzAqzxTyoWwoBAYu7XQHaF7?w=252&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Yogurt" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Yogurt</h5>
                  <p className="foodpara"><strong>Contains Probiotics:</strong> Yogurt with live cultures can help
                    increase good bacteria in the gut.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse3.mm.bing.net/th/id/OIP.5g4XpbXhKdD0V5kF-m-zGgHaFc?w=250&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Bananas" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Bananas</h5>
                  <p className="foodpara"><strong>Natural Prebiotic:</strong> Bananas contain fibers that feed the good
                    bacteria in the intestines.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse3.mm.bing.net/th/id/OIP.uMlJS9v1uDrl9DoA9yUoSwHaFD?w=276&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Chia Seeds" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Chia Seeds</h5>
                  <p className="foodpara"><strong>High in Fiber:</strong> Chia seeds promote regular bowel movements and
                    support healthy digestion.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse4.mm.bing.net/th/id/OIP.5M14IYqORoz0ubP4NEVRgQHaFj?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Oats" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Oats</h5>
                  <p className="foodpara"><strong>Rich in Soluble Fiber:</strong> Oats help keep the digestive tract
                    healthy by adding bulk to stool and promoting regularity.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse2.mm.bing.net/th/id/OIP.R0axX5rXTk0gA5rs4tubngHaEo?w=314&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Ginger" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Ginger</h5>
                  <p className="foodpara"><strong>Improves Digestion:</strong> Ginger helps stimulate the digestive
                    enzymes, aiding in the digestion of food in the intestines.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.uQHJ7Lw9UnScbsm4PbgDOAHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Asparagus" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Asparagus</h5>
                  <p className="foodpara"><strong>Natural Prebiotic:</strong> Asparagus contains prebiotic fiber that
                    helps stimulate the growth of healthy gut bacteria.</p>
                </div>
              </motion.article>

            </div>
          </section>

          <section className="bad-foods">
            <h3 className="head31 pt-8">FOOD THAT'S BAD FOR INTESTINE</h3>

            <div className="card-container four-elements" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Fried Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Fried Foods (French Fries, Onion Rings)</h5>
                  <p className="foodpara"><strong>Hard to Digest:</strong> Fried foods are high in fat, making them
                    difficult for the intestines to process.</p>
                  <p className="foodpara"><strong>Linked to Constipation:</strong> The high fat content can slow down
                    intestinal transit, causing constipation.</p>
                  <p className="foodpara"><strong>Disrupts Gut Flora:</strong> Can negatively impact the balance of good
                    gut bacteria.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Alcohol" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Alcohol</h5>
                  <p className="foodpara"><strong>Disrupts Gut Lining:</strong> Alcohol can irritate the intestinal
                    lining and lead to inflammation.</p>
                  <p className="foodpara"><strong>Decreases Nutrient Absorption:</strong> Reduces the intestine's
                    ability to absorb essential nutrients.</p>
                  <p className="foodpara"><strong>Unbalances Gut Microbiota:</strong> Can kill beneficial bacteria and
                    promote the growth of harmful bacteria.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Sugary Drinks" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Sugary Drinks (Soda, Sweetened Juices)</h5>
                  <p className="foodpara"><strong>Feeds Harmful Bacteria:</strong> High sugar content can feed harmful
                    bacteria, disrupting the gut balance.</p>
                  <p className="foodpara"><strong>Leads to Bloating:</strong> Excess sugar can lead to gas and bloating,
                    causing discomfort in the intestines.</p>
                  <p className="foodpara"><strong>Linked to Inflammation:</strong> Promotes intestinal inflammation,
                    which may lead to irritable bowel syndrome (IBS).</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th/id/OIP.UNWx5QnfFvyIes0hv4rdwgHaGK?w=232&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Dairy Products" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Dairy Products (Milk, Cheese)</h5>
                  <p className="foodpara"><strong>Contains Lactose:</strong> Many people are lactose intolerant, which
                    can cause gas, bloating, and diarrhea.</p>
                  <p className="foodpara"><strong>Triggers Inflammation:</strong> Can lead to inflammation in the
                    intestines, especially in those with lactose intolerance.</p>
                  <p className="foodpara"><strong>Constipation Risk:</strong> Full-fat dairy products can slow down
                    digestion and cause constipation.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th?id=OIP.pbYnjMHa2tA22On6j6eHAQHaEr&w=314&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Red Meat" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Red Meat (Beef, Pork)</h5>
                  <p className="foodpara"><strong>Slow to Digest:</strong> Red meat takes a long time to digest, which
                    can lead to constipation and discomfort.</p>
                  <p className="foodpara"><strong>Increases TMAO Levels:</strong> Promotes the production of TMAO, a
                    compound linked to inflammation and gut issues.</p>
                  <p className="foodpara"><strong>Disrupts Gut Flora:</strong> High intake can alter the balance of gut
                    bacteria, promoting harmful strains.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th/id/OIP.L1KZ9kz1QJoYJ089IYH4jQHaFV?w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Citrus Fruits" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Citrus Fruits (Oranges, Grapefruits)</h5>
                  <p className="foodpara"><strong>High Acidity:</strong> Can irritate the intestinal lining and cause
                    discomfort, especially in those with sensitive stomachs.</p>
                  <p className="foodpara"><strong>May Cause Diarrhea:</strong> The high fiber content can lead to
                    diarrhea in some individuals.</p>
                  <p className="foodpara"><strong>Worsens Acid Reflux:</strong> Can exacerbate acid reflux, leading to
                    discomfort in the intestines.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse3.mm.bing.net/th/id/OIP.mndou8ofE5v67rPNMGlRpQHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Pickled Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Pickled Foods (Pickles, Sauerkraut)</h5>
                  <p className="foodpara"><strong>High in Sodium:</strong> Excessive salt can irritate the intestines
                    and lead to dehydration.</p>
                  <p className="foodpara"><strong>Contains Vinegar:</strong> The vinegar used in pickling can irritate
                    the digestive tract, leading to discomfort.</p>
                  <p className="foodpara"><strong>Triggers Acid Reflux:</strong> Can worsen acid reflux symptoms,
                    causing discomfort in the intestines.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th/id/OIP.tqAWK8yGjpV-Fw2XJiCfhAHaGi?w=266&h=234&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Spicy Foods" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Spicy Foods (Hot Peppers, Chili)</h5>
                  <p className="foodpara"><strong>Increases Gut Sensitivity:</strong> Spicy foods can irritate the
                    intestinal lining, leading to discomfort and pain.</p>
                  <p className="foodpara"><strong>Triggers Diarrhea:</strong> Capsaicin in spicy foods can cause
                    diarrhea, especially in sensitive individuals.</p>
                  <p className="foodpara"><strong>Linked to Acid Reflux:</strong> Can exacerbate acid reflux symptoms,
                    causing discomfort in the intestines.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse4.mm.bing.net/th/id/OIP.2rUg3mGOiAqd8mzYOBZvhwHaGz?w=198&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Artificial Sweeteners" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Artificial Sweeteners (Aspartame, Sucralose)</h5>
                  <p className="foodpara"><strong>Disrupts Gut Flora:</strong> Artificial sweeteners can disrupt the
                    balance of good gut bacteria, leading to digestive issues.</p>
                  <p className="foodpara"><strong>Linked to Gas and Bloating:</strong> Can lead to excess gas
                    production, causing discomfort in the intestines.</p>
                  <p className="foodpara"><strong>Causes Diarrhea:</strong> Some artificial sweeteners have a laxative
                    effect, leading to diarrhea.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse4.mm.bing.net/th/id/OIP.VF0Cp_AzFwnG1xzbn14mMwHaE8?w=271&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Processed Snacks" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Processed Snacks (Chips, Crackers)</h5>
                  <p className="foodpara"><strong>High in Unhealthy Fats:</strong> Processed snacks contain trans fats
                    that are difficult for the intestines to digest.</p>
                  <p className="foodpara"><strong>Low in Fiber:</strong> Lack of fiber can slow down digestion, leading
                    to constipation.</p>
                  <p className="foodpara"><strong>Contains Additives:</strong> Preservatives and additives can irritate
                    the intestinal lining and disrupt gut health.</p>
                </div>
              </motion.article>

            </div>
          </section>
        </div>
      </div>
  );
}

export default Intestine;
