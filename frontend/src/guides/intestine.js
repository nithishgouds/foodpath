import "./Brain.css";
import axios from "axios";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Header from "../homepagenew/components/Header";
function Intestine() {
  const [guides_intestine_status_text, setguides_intestine_status_text] =
    useState("Analysing...");
  const [guides_intestine_consumed_text, setguides_intestine_consumed_text] =
    useState("Getting...");
  const [guides_intestine_info_text, setguides_intestine_info_text] =
    useState("Analysing...");
    const [showBulletedList, setShowBulletedList] = useState(false);

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
        setguides_intestine_status_text(Ostatus(AIorganGuideRes.rating)); // Set the status to the message received
        // setguides_brain_consumed_text(consumedFoods.join(', '));
        setguides_intestine_consumed_text(consumedFoods); // Convert consumedFoods array to a comma-separated string
        setguides_intestine_info_text(`
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
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="newflex">
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
        <div className="guides_intestine_info_text">
  {showBulletedList ? (
    <ul className="custom-bulleted-list">
      {guides_intestine_info_text.split('\n').map((line, index) => (
        line.trim() && (
          <li key={index} className="custom-bulleted-item">{line}</li>
        )
      ))}
    </ul>
  ) : (
    <p>{guides_intestine_info_text}</p>
  )}
</div>

          <img
            src="https://img.freepik.com/premium-photo/life-art_1139222-8704.jpg"
            alt="."
            className="food-image-i"
          />
        </div>
      </div>

      <section className="good-foods">
        <h3 className="head31">FOOD THAT'S GOOD FOR INTESTINE</h3>

        <div class="particle"></div>

        <article className="food-iteml">
          <img
            src="https://th.bing.com/th?id=OIP.PeS8e8xmZneGh88jE1JcpgHaFu&w=284&h=219&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5">
              {" "}
              High-Fiber Foods (Whole Grains, Vegetables)
            </h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Promotes Regularity:</p> Fiber helps
              maintain smooth digestion and prevents constipation.
            </p>
            <br></br>

            <p className="foodpara">
              <p className="foodtext">Feeds Gut Bacteria:</p> Soluble fiber
              promotes healthy gut flora by providing food for beneficial
              bacteria.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Reduces Inflammation:</p> A diet rich in
              fiber can reduce intestinal inflammation and improve bowel health.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-itemr">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.gQLzkzxIGlHngcgTF4EdxQHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <div class="particle"></div>

            <h5 className="head5">Fermented Foods (Kimchi, Sauerkraut)</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Rich in Probiotics:</p> Fermented foods
              contain live bacteria that improve gut health by balancing the
              intestinal microbiome.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Improves Digestion:</p> Probiotics can
              help break down food and enhance nutrient absorption.
            </p>
            <br></br>

            <p className="foodpara">
              <p className="foodtext">Supports Immune Function:</p> A healthy
              gut can bolster the immune system, as many immune cells are
              located in the intestines.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://th.bing.com/th?id=OIP.a2C1m4ANAydojmA6Y2yITgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5"> Water</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Aids in Digestion:</p> Staying hydrated
              helps prevent constipation and ensures smooth bowel movements.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Flushes Toxins:</p> Water helps cleanse
              the intestines by flushing out waste and toxins.
            </p>
            <br></br>
            <div class="particle"></div>

            <p className="foodpara">
              <p className="foodtext">Supports Nutrient Absorption:</p> Water is
              essential for breaking down food and absorbing nutrients in the
              intestines.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-itemr">
          <img
            src="https://www.bing.com/th/id/OIP.2b4-lf6eljpNlTDU7TA-HQHaEa?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5">Olive Oil</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Supports Healthy Digestion:</p> Olive oil
              can help reduce inflammation and promote smoother digestion.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Protects Intestinal Lining:</p> Contains
              antioxidants that protect the gut lining from damage.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Helps Absorb Nutrients:</p> Olive oil aids
              in the absorption of fat-soluble vitamins and minerals in the
              intestines.
            </p>
            <br></br>
          </div>
        </article>
        <div class="particle"></div>
        <article className="food-iteml">
          <img
            src="https://th.bing.com/th?id=OIP.Qmk7f6puo63EoqkKdIAP-QAAAA&w=300&h=199&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5"> Leafy Greens (Spinach, Kale)</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Rich in Magnesium:</p> Helps relax the
              muscles of the intestines, promoting regular bowel movements.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Promotes Healthy Gut Flora:</p> High in
              fiber and antioxidants that support a balanced gut microbiome.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Reduces Inflammation:</p>{" "}
              Anti-inflammatory compounds in leafy greens help soothe the
              intestines.
            </p>
            <br></br>
          </div>
        </article>
        <div class="particle"></div>
        <article className="food-itemr">
          <img
            src="https://th.bing.com/th?id=OIP.2GnzkY2_WugcUUHZq7ovxgHaGS&w=271&h=230&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5">Ginger</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Reduces Bloating:</p> Known to alleviate
              bloating and discomfort in the intestines.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Promotes Digestion:</p> Ginger can help
              speed up gastric emptying and enhance overall digestion.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Anti-inflammatory:</p> Helps reduce
              inflammation in the digestive tract.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://www.bing.com/th?id=OIP.tqAWK8yGjpV-Fw2XJiCfhAHaGi&w=266&h=234&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5">Bananas</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Soothes the Digestive System:</p> Bananas
              are gentle on the stomach and help with digestive health.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Rich in Pectin:</p> This fiber helps move
              food through the intestines and eases constipation.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Supports Gut Health:</p> Bananas help
              increase healthy bacteria in the intestines.
            </p>
            <br></br>
          </div>
        </article>
        <div class="particle"></div>
        <article className="food-itemr">
          <img
            src="https://th.bing.com/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5"> Apples</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">High in Fiber:</p> Apples contain soluble
              fiber that aids digestion and helps prevent constipation.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Promotes Healthy Gut Flora:</p> Apples
              help foster a healthy microbiome in the intestines.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Reduces Digestive Issues:</p> The fiber in
              apples can help prevent bloating and support overall digestive
              health.
            </p>
            <br></br>
          </div>
        </article>
      </section>

      <section className="bad-foods">
        <h2 className="head2">FOOD THAT'S BAD FOR INTESTINE</h2>
        <div class="nparticle"></div>
        <article className="food-iteml">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.MgE-cT93SEQTWdcVG2B_pgHaEk?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5"> Processed Foods (Chips, Fast Food)</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Low in Fiber:</p> Processed foods often
              lack fiber, leading to slower digestion and constipation.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Disrupts Gut Bacteria:</p> Excessive
              consumption of processed foods can harm gut bacteria, leading to
              digestive problems.
            </p>
            <br></br>
            <div class="nparticle"></div>

            <p className="foodpara">
              <p className="foodtext">Promotes Inflammation:</p> The artificial
              ingredients and preservatives in processed foods can cause
              inflammation in the intestines.
            </p>
            <br></br>
          </div>
        </article>
        <article className="food-itemr">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.WFyvuU65H6puydI-H1yxwQHaGg?w=223&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5"> Alcohol</h5>
            <br></br>
            <div class="nparticle"></div>

            <p className="foodpara">
              <p className="foodtext">Irritates Intestinal Lining:</p> Alcohol
              can damage the protective lining of the intestines, leading to
              inflammation and discomfort.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Disrupts Digestion:</p> Alcohol interferes
              with digestive enzymes and nutrient absorption, causing
              gastrointestinal problems.
            </p>
            <br></br>

            <p className="foodpara">
              <p className="foodtext">Leads to Dysbiosis:</p> Excessive drinking
              can cause an imbalance in gut bacteria, leading to poor digestion
              and intestinal issues.
            </p>
            <br></br>
          </div>
        </article>
        <article className="food-iteml">
          <img
            src="https://th.bing.com/th?id=OIP.pbYnjMHa2tA22On6j6eHAQHaEr&w=314&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />

          <div className="food-contentl">
            <h5 className="head5"> Red Meat</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Hard to Digest:</p> Red meat is difficult
              for the intestines to break down and can lead to constipation.
            </p>
            <br></br>
            <div class="nparticle"></div>

            <p className="foodpara">
              <p className="foodtext">Increases Risk of Colorectal Cancer:</p>{" "}
              Frequent consumption of red meat has been linked to a higher risk
              of colon and rectal cancers.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Contributes to Inflammation:</p> High
              consumption of red meat can trigger inflammation in the
              intestines, leading to digestive problems.
            </p>
            <br></br>
          </div>
        </article>
        <article className="food-itemr">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.UNWx5QnfFvyIes0hv4rdwgHaGK?w=232&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5"> Dairy</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Causes Digestive Discomfort:</p> Many
              people are lactose intolerant, which can cause bloating and
              diarrhea.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Leads to Gut Imbalance:</p> Dairy can
              promote an imbalance in gut bacteria for some people, leading to
              digestive distress.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">May Trigger Inflammation:</p> Dairy
              products, particularly high-fat ones, can cause inflammation in
              the intestines.
            </p>
            <br></br>
          </div>
        </article>
        <div class="nparticle"></div>
        <article className="food-iteml">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5"> Fried Foods</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">High in Trans Fats:</p> Fried foods are
              rich in unhealthy fats that can disrupt digestion and gut health.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Leads to Inflammation:</p> The high fat
              content in fried foods can trigger inflammation in the intestines,
              leading to discomfort and bloating.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Damages Gut Lining:</p> Consuming fried
              foods regularly can weaken the protective lining of the
              intestines.
            </p>
            <br></br>
          </div>
        </article>
        <div class="nparticle"></div>
        <article className="food-itemr">
          <img
            src="https://www.bing.com/th/id/OIP.YHffM3-8eeJZMh-kQnhvPQAAAA?w=186&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5">Sugary Snacks (Candy, Cookies)</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Promotes Gut Dysbiosis:</p> Excessive
              sugar intake feeds harmful bacteria in the gut, leading to an
              imbalance.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Reduces Fiber Intake:</p> Sugary snacks
              often replace fiber-rich foods, which are essential for digestion.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Increases Inflammation:</p> Sugar can
              cause inflammation throughout the body, including in the
              intestines.
            </p>
            <br></br>
          </div>
        </article>
        <article className="food-iteml">
          <img
            src="https://www.bing.com/th/id/OIP.OaSVEaQSMVpNhCgA9EYgOQHaHa?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5">
              {" "}
              Caffeinated Beverages (Coffee, Energy Drinks)
            </h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Irritates the Digestive System:</p> High
              caffeine levels can irritate the lining of the intestines and
              exacerbate conditions like IBS.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Increases Acid Production:</p> Caffeine
              can stimulate excessive acid production, which may lead to acid
              reflux or heartburn.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Dehydrates the Body:</p> Caffeine has a
              diuretic effect, which can lead to dehydration, further affecting
              digestion.
            </p>
            <br></br>
          </div>
        </article>
        <div class="nparticle"></div>
        <article className="food-itemr">
          <img
            src="https://th.bing.com/th?id=OIP.v9JWr6ustsxI7iiI7OFPswHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contenrt">
            <h5 className="head5">8. Spicy Foods</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Irritates the Digestive Tract:</p> Spicy
              foods can cause irritation, especially in individuals with
              sensitive stomachs or digestive issues.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Triggers Acid Reflux:</p> Spicy foods may
              contribute to acid reflux or heartburn in some individuals.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Exacerbates Gut Inflammation:</p> For some
              people, spicy foods can trigger inflammation and discomfort in the
              intestines.
            </p>
            <br></br>
          </div>
        </article>{" "}
        <div class="nparticle"></div>
      </section>
    </div>
  );
}
export default Intestine;
