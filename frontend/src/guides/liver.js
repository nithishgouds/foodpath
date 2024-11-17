import "./Guide.css";
import axios from "axios";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Header from "../homepagenew/components/Header";
import { motion } from "framer-motion";

function Liver() {
  const [guides_liver_status_text, setguides_liver_status_text] =
      useState("Analysing...");
  const [guides_liver_consumed_text, setguides_liver_consumed_text] =
      useState("Getting...");
  const [guides_liver_info_text, setguides_liver_info_text] =
      useState("Analysing...");

  // Ensure jwt-decode is imported
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

  const [organName, setOrganName] = useState("Liver");

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
    axios
        .post("http://localhost:3001/api/organs/organGuides", {
          email: email,
          organName: organName,
        })
        .then((response) => {
          const { message, AIorganGuideRes, consumedFoods } = response.data;

          // Update state with the response data
          setguides_liver_status_text(Ostatus(AIorganGuideRes.rating)); // Set the status to the message received
          // setguides_brain_consumed_text(consumedFoods.join(', '));
          setguides_liver_consumed_text(consumedFoods); // Convert consumedFoods array to a comma-separated string
          setguides_liver_info_text(`
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
          <h3 className="head3">Current Status Of The Liver</h3>

          <br></br>
          <br></br>
          <br></br>
          <h2 className="heading">Status of the Liver :</h2>
          <div className="containernew">
            <p className="guides_liver_status_text">{guides_liver_status_text}</p>
            <br></br>
            <br></br>
          </div>

          <h2 className="heading">Foods Consumed :</h2>
          <div className="containernew">
            <p className="guides_liver_consumed_text">
              {guides_liver_consumed_text}
            </p>
            <br></br>
            <br></br>
          </div>
          <h2 className="heading">Info about the liver :</h2>
          <div className="containernew">
            <div>
              {guides_liver_info_text.split("\n").map((line, index) => (
                  <p className="guides_brain_info_text"> {line}</p>
              ))}
            </div>
            {/*<img*/}
            {/*    src="https://pngfre.com/wp-content/uploads/Liver-21.png"*/}
            {/*    alt="."*/}
            {/*    id="change"*/}
            {/*    className="food-image-i"*/}
            {/*/>*/}
          </div>
        </div>

          <section className="good-foods">
            <h3 className="head31">FOOD THAT'S GOOD FOR LIVER</h3>
            <div className="card-container" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th?id=OIP.Qmk7f6puo63EoqkKdIAP-QAAAA&w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Leafy Greens" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Leafy Greens (Spinach, Kale)</h5>
                  <p className="foodpara"><strong>Rich in Antioxidants:</strong> Leafy greens contain antioxidants that
                    help reduce oxidative stress on the liver.</p>
                  <p className="foodpara"><strong>Detoxifying Properties:</strong> They help in cleansing the liver by
                    neutralizing harmful substances.</p>
                  <p className="foodpara"><strong>Lowers Fat Levels:</strong> Consuming leafy greens regularly can
                    reduce liver fat, which promotes better liver function.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://th.bing.com/th?id=OIP.kyRLAQX3QkDh_mxgYYuAtgAAAA&w=277&h=225&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Green Tea" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Green Tea</h5>
                  <p className="foodpara"><strong>Contains Catechins:</strong> A type of antioxidant that boosts liver
                    function and protects it from damage.</p>
                  <p className="foodpara"><strong>Improves Fat Metabolism:</strong> Green tea helps in reducing liver
                    fat and supports its detoxification processes.</p>
                  <p className="foodpara"><strong>Protects Against Toxins:</strong> Regular consumption can protect the
                    liver from the damage caused by toxins like alcohol.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse2.mm.bing.net/th/id/OIP.XJ0VwZaNBPPm8hJoGrEXEgHaEQ?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Fatty Fish" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Fatty Fish (Salmon, Mackerel)</h5>
                  <p className="foodpara"><strong>Rich in Omega-3 Fatty Acids:</strong> Omega-3s reduce liver
                    inflammation and lower the risk of fatty liver disease.</p>
                  <p className="foodpara"><strong>Reduces Liver Fat Accumulation:</strong> Omega-3s help balance the
                    levels of liver fat, promoting better overall function.</p>
                  <p className="foodpara"><strong>Improves Enzyme Levels:</strong> Fatty fish can help regulate liver
                    enzyme levels, enhancing liver health.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th/id/OIP.B9mTsJ46LPJ_rxfnJZQiiwHaGT?w=225&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Garlic" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Garlic</h5>
                  <p className="foodpara"><strong>Boosts Liver Detoxification:</strong> Garlic contains sulfur compounds
                    that enhance the liver's ability to detoxify harmful substances.</p>
                  <p className="foodpara"><strong>Reduces Liver Inflammation:</strong> Garlic has anti-inflammatory
                    properties that can help reduce liver damage.</p>
                  <p className="foodpara"><strong>Supports Antioxidant Defense:</strong> Garlic promotes antioxidant
                    activity, protecting liver cells from oxidative damage.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th?id=OIP.j1WfA-1HnuUuicubXhR1OwHaEq&w=315&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                    alt="Walnuts" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Walnuts</h5>
                  <p className="foodpara"><strong>Rich in Healthy Fats:</strong> Walnuts contain omega-3 fatty acids,
                    which reduce inflammation and protect the liver.</p>
                  <p className="foodpara"><strong>Enhances Detoxification:</strong> They aid the liver's detox processes
                    and improve its function.</p>
                  <p className="foodpara"><strong>Supports Liver Repair:</strong> Walnuts help regenerate liver tissue
                    by supporting its natural repair processes.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://www.bing.com/th/id/OIP.p6e_BQT1_HF222FsOhSgYAHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Turmeric" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Turmeric</h5>
                  <p className="foodpara"><strong>Reduces Liver Inflammation:</strong> Curcumin in turmeric is known to
                    reduce liver inflammation and protect liver cells.</p>
                  <p className="foodpara"><strong>Boosts Antioxidants:</strong> Turmeric promotes the production of
                    antioxidants in the liver, enhancing its detoxification ability.</p>
                  <p className="foodpara"><strong>Supports Liver Repair:</strong> Turmeric helps regenerate liver cells
                    and promotes overall liver health.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse1.mm.bing.net/th/id/OIP.x1csDKOyN70vsQCvHrYPhAAAAA?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Beets" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Beets</h5>
                  <p className="foodpara"><strong>Rich in Fiber:</strong> Beets help in detoxifying the liver by
                    promoting the elimination of toxins.</p>
                  <p className="foodpara"><strong>Supports Liver Health:</strong> Beets improve the liver's natural
                    detoxification processes and promote healthy bile production.</p>
                  <p className="foodpara"><strong>Improves Liver Function:</strong> Beets have been shown to help reduce
                    fatty deposits in the liver and enhance its function.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse4.mm.bing.net/th/id/OIP.tnHP4TZDa1BNEzSSIzk1dwHaGz?w=226&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Avocados" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Avocados</h5>
                  <p className="foodpara"><strong>Rich in Healthy Fats:</strong> Avocados contain healthy fats that help
                    lower cholesterol levels and improve liver function.</p>
                  <p className="foodpara"><strong>Enhances Detoxification:</strong> They support the liver's ability to
                    detoxify and neutralize harmful substances.</p>
                  <p className="foodpara"><strong>Promotes Liver Health:</strong> Regular consumption of avocados helps
                    protect the liver from oxidative stress and inflammation.</p>
                </div>
              </motion.article>

              <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <img
                    src="https://tse4.mm.bing.net/th/id/OIP.tnHP4TZDa1BNEzSSIzk1dwHaGz?w=226&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Apples" className="food-card-image"/>
                <div className="food-card-content">
                  <h5 className="food-card-title">Apples</h5>
                  <p className="foodpara"><strong>Rich in Fiber:</strong> Apples are high in pectin, which helps in
                    detoxifying the liver by eliminating toxins from the digestive tract.</p>
                  <p className="foodpara"><strong>Promotes Liver Cleanse:</strong> Regular consumption helps cleanse the
                    liver, supporting its optimal function.</p>
                </div>
              </motion.article>
              </div>

          </section>

          <section className="bad-foods">
            <h2 className="head31 pt-8">FOOD THAT'S BAD FOR LIVER</h2>
              <div className="card-container" style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
                <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                  <img
                      src="https://tse1.mm.bing.net/th/id/OIP.CW22Grctx2l5DxNmU4wZ5gHaEn?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt="Processed Meats" className="food-card-image"/>
                  <div className="food-card-content">
                    <h5 className="food-card-title">Processed Meats (Sausages, Bacon)</h5>
                    <p className="foodpara"><strong>High in Fat:</strong> Processed meats are high in saturated fats,
                      which can irritate the stomach lining.</p>
                    <p className="foodpara"><strong>Preservatives:</strong> Contains nitrates and preservatives that are
                      difficult for the stomach to digest.</p>
                    <p className="foodpara"><strong>Increases Acid Reflux:</strong> Can lead to increased acid
                      production, causing heartburn and acid reflux.</p>
                  </div>
                </motion.article>

                <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                  <img
                      src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt="Fried Foods" className="food-card-image"/>
                  <div className="food-card-content">
                    <h5 className="food-card-title">Fried Foods (French Fries, Fried Chicken)</h5>
                    <p className="foodpara"><strong>Hard to Digest:</strong> High in fat, making them difficult for the
                      stomach to digest, leading to indigestion.</p>
                    <p className="foodpara"><strong>Increases Acid Production:</strong> Can lead to excessive acid
                      production, which can irritate the stomach lining.</p>
                    <p className="foodpara"><strong>Linked to Gastric Discomfort:</strong> May cause bloating, gas, and
                      stomach pain.</p>
                  </div>
                </motion.article>

                <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                  <img
                      src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt="Excessive Alcohol" className="food-card-image"/>
                  <div className="food-card-content">
                    <h5 className="food-card-title">Excessive Alcohol</h5>
                    <p className="foodpara"><strong>Damages Stomach Lining:</strong> Alcohol irritates the stomach
                      lining and can lead to gastritis.</p>
                    <p className="foodpara"><strong>Increases Acid Production:</strong> Causes excessive stomach acid
                      production, leading to heartburn.</p>
                    <p className="foodpara"><strong>Slows Digestion:</strong> Can slow down the digestion process,
                      causing bloating and discomfort.</p>
                  </div>
                </motion.article>

                <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                  <img
                      src="https://tse4.mm.bing.net/th/id/OIP.UNWx5QnfFvyIes0hv4rdwgHaGK?w=232&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt="Dairy Products" className="food-card-image"/>
                  <div className="food-card-content">
                    <h5 className="food-card-title">Dairy Products (Full-fat Milk, Cheese)</h5>
                    <p className="foodpara"><strong>Lactose Intolerance:</strong> Many people have difficulty digesting
                      lactose, leading to stomach cramps and diarrhea.</p>
                    <p className="foodpara"><strong>High in Fat:</strong> Full-fat dairy products are difficult to
                      digest and can cause bloating.</p>
                    <p className="foodpara"><strong>Increases Mucus Production:</strong> Can lead to increased mucus
                      production, causing discomfort.</p>
                  </div>
                </motion.article>

                <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                  <img
                      src="https://th.bing.com/th?id=OIP.pbYnjMHa2tA22On6j6eHAQHaEr&w=314&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      alt="Red Meat" className="food-card-image"/>
                  <div className="food-card-content">
                    <h5 className="food-card-title">Red Meat (Beef, Pork)</h5>
                    <p className="foodpara"><strong>High in Fat:</strong> Contains high levels of fat, which makes it
                      difficult for the stomach to digest.</p>
                    <p className="foodpara"><strong>Linked to Acid Reflux:</strong> Can increase acid production,
                      leading to acid reflux and heartburn.</p>
                    <p className="foodpara"><strong>Slows Digestion:</strong> Can stay in the stomach longer, causing
                      discomfort and bloating.</p>
                  </div>
                </motion.article>

                <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                  <img
                      src="https://th.bing.com/th?id=OIP.cf8I0fDPz9qAxQkbpQxmhAHaLb&w=201&h=310&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      alt="Sugary Beverages" className="food-card-image"/>
                  <div className="food-card-content">
                    <h5 className="food-card-title">Sugary Beverages (Soda, Energy Drinks)</h5>
                    <p className="foodpara"><strong>High Sugar Content:</strong> Can lead to gas and bloating, which
                      irritates the stomach.</p>
                    <p className="foodpara"><strong>Carbonation:</strong> Carbonated drinks can cause excess gas,
                      leading to stomach discomfort.</p>
                    <p className="foodpara"><strong>Linked to Acid Reflux:</strong> Increases stomach acid production,
                      leading to acid reflux.</p>
                  </div>
                </motion.article>

                <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                  <img
                      src="https://th.bing.com/th/id/OIP.L1KZ9kz1QJoYJ089IYH4jQHaFV?w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      alt="Citrus Fruits" className="food-card-image"/>
                  <div className="food-card-content">
                    <h5 className="food-card-title">Citrus Fruits (Oranges, Lemons)</h5>
                    <p className="foodpara"><strong>High Acidity:</strong> Citrus fruits are highly acidic and can
                      irritate the stomach lining.</p>
                    <p className="foodpara"><strong>Triggers Acid Reflux:</strong> Can cause acid reflux and worsen
                      symptoms in people with GERD.</p>
                    <p className="foodpara"><strong>Not Suitable for Ulcers:</strong> Can irritate stomach ulcers and
                      cause pain.</p>
                  </div>
                </motion.article>

                <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                  <img
                      src="https://tse3.mm.bing.net/th/id/OIP.mndou8ofE5v67rPNMGlRpQHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt="Pickled Foods" className="food-card-image"/>
                  <div className="food-card-content">
                    <h5 className="food-card-title">Pickled Foods</h5>
                    <p className="foodpara"><strong>High in Sodium:</strong> The high salt content can lead to stomach
                      irritation and bloating.</p>
                    <p className="foodpara"><strong>Acidic Nature:</strong> Pickled foods contain vinegar, which can
                      irritate the stomach lining.</p>
                    <p className="foodpara"><strong>Triggers Acid Reflux:</strong> May lead to acid reflux in
                      individuals with sensitive stomachs.</p>
                  </div>
                </motion.article>

                <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                  <img
                      src="https://www.bing.com/th/id/OIP.tqAWK8yGjpV-Fw2XJiCfhAHaGi?w=266&h=234&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      alt="Spicy Foods" className="food-card-image"/>
                  <div className="food-card-content">
                    <h5 className="food-card-title">Spicy Foods</h5>
                    <p className="foodpara"><strong>Increases Stomach Acid:</strong> Spicy foods can increase stomach
                      acid production, leading to heartburn.</p>
                    <p className="foodpara"><strong>Can Irritate Stomach Lining:</strong> May cause irritation and pain
                      in the stomach lining.</p>
                    <p className="foodpara"><strong>Triggers Acid Reflux:</strong> Can worsen acid reflux symptoms in
                      sensitive individuals.</p>
                  </div>
                </motion.article>

                <motion.article className="food-card" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                  <img
                      src="https://th.bing.com/th?id=OIP.WtnUC_HUGvbchERjKrj-5QHaE8&w=308&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt="Chocolate" className="food-card-image"/>
                  <div className="food-card-content">
                    <h5 className="food-card-title">Chocolate</h5>
                    <p className="foodpara"><strong>Contains Caffeine:</strong> Caffeine in chocolate can increase acid
                      production in the stomach.</p>
                    <p className="foodpara"><strong>Relaxes Lower Esophageal Sphincter:</strong> Can cause acid to flow
                      back into the esophagus, causing heartburn.</p>
                    <p className="foodpara"><strong>High in Fat:</strong> Fatty nature of chocolate can slow digestion
                      and cause stomach discomfort.</p>
                  </div>
                </motion.article>

              </div>
          </section>
        </div>
      </div>
);
}

export default Liver;
