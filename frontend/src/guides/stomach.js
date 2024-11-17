import "./Brain.css";
import axios from "axios";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Header from "../homepagenew/components/Header";
function Stomach() {
  const [guides_stomach_status_text, setguides_stomach_status_text] =
    useState("Analysing...");
  const [guides_stomach_consumed_text, setguides_stomach_consumed_text] =
    useState("Getting...");
  const [guides_stomach_info_text, setguides_stomach_info_text] =
    useState("Analysing...");
    const [showBulletedList, setShowBulletedList] = useState(false);

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

  const [organName, setOrganName] = useState("Stomach");

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
        setguides_stomach_status_text(Ostatus(AIorganGuideRes.rating)); // Set the status to the message received
        // setguides_brain_consumed_text(consumedFoods.join(', '));
        setguides_stomach_consumed_text(consumedFoods); // Convert consumedFoods array to a comma-separated string
        setguides_stomach_info_text(`
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
        <h3 className="head3">Current Status Of The Stomach</h3>

        <br></br>
        <br></br>
        <br></br>
        <h2 className="heading">Status of the Stomach :</h2>
        <div class="containernew">
          <p className="guides_stomach_status_text">
            {guides_stomach_status_text}
          </p>
          <br></br>
          <br></br>
        </div>

        <h2 className="heading">Foods Consumed :</h2>
        <div class="containernew">
          <p className="guides_stomach_consumed_text">
            {guides_stomach_consumed_text}
          </p>
          <br></br>
          <br></br>
        </div>
        <h2 className="heading">Info about the Stomach:</h2>
        <div class="containernew">
        <div className="guides_stomach_info_text">
  {showBulletedList ? (
    <ul className="custom-bulleted-list">
      {guides_stomach_info_text.split('\n').map((line, index) => (
        line.trim() && (
          <li key={index} className="custom-bulleted-item">{line}</li>
        )
      ))}
    </ul>
  ) : (
    <p>{guides_stomach_info_text}</p>
  )}
</div>

          <img
            src="https://pluspng.com/img-png/stomach-png-hd-stomach-png-238.png"
            alt="."
            className="food-image-i"
          />
        </div>
      </div>

      <section className="good-foods">
        <h3 className="head31">FOOD THAT'S GOOD FOR STOMACH</h3>
        <div class="particle"></div>
        <article className="food-iteml">
          <img
            src="https://www.bing.com/th?id=OIP.k1stYDeWBudlhWwKxCKZFwAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5">Yogurt</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Probiotics:</p> Contains healthy bacteria
              that aid digestion and reduce bloating.
            </p>
            <br></br>

            <p className="foodpara">
              <p className="foodtext">Supports Gut Health:</p> Helps balance the
              gut microbiome, improving overall stomach function.
            </p>
            <br></br>

            <p className="foodpara">
              <p className="foodtext">Reduces Inflammation:</p> Can soothe
              stomach discomfort and reduce inflammation in the digestive tract.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-itemr">
          <img
            src="https://th.bing.com/th?id=OIP.2GnzkY2_WugcUUHZq7ovxgHaGS&w=271&h=230&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <div class="particle"></div>
            <h5 className="head5">Ginger</h5>
            <br></br>

            <p className="foodpara">
              <p className="foodtext">Reduces Nausea:</p> Helps alleviate nausea
              and vomiting caused by digestive issues.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Anti-Inflammatory:</p> Reduces
              inflammation in the stomach and promotes digestion.
            </p>
            <br></br>

            <p className="foodpara">
              <p className="foodtext">Soothes Upset Stomach:</p> Ginger is known
              for its ability to calm an upset stomach and ease discomfort.
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
              <p className="foodtext">High in Fiber:</p> Bananas help regulate
              bowel movements and prevent constipation.
            </p>
            <br></br>

            <p className="foodpara">
              <p className="foodtext">Eases Acid Reflux:</p> Bananas are
              alkaline, which can neutralize stomach acid and reduce acid
              reflux.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Gentle on the Stomach:</p> Easy to digest
              and soothing for the digestive tract.
            </p>
            <br></br>
          </div>
          <div class="particle"></div>
        </article>

        <article className="food-itemr">
          <img
            src="https://th.bing.com/th?id=OIP.b9It-_1kiy-uxqOalKV1JwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5"> Oats</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Rich in Fiber:</p> Supports healthy
              digestion and prevents bloating.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Soothing Properties:</p> Helps with acid
              reflux and stomach discomfort.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Easy to Digest:</p> Gentle on the stomach,
              promoting regular bowel movements.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://th.bing.com/th?id=OIP.B6H6YbqQV6QElTzXnyqJQAHaFm&w=287&h=217&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5">Papaya</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Contains Papain:</p> Aids in digestion and
              breaks down proteins for better absorption.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Prevents Bloating:</p> Reduces gas and
              eases bloating.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Soothing Effect:</p> Helps prevent and
              treat stomach ulcers.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-itemr">
          <img
            src="https://www.bing.com/th/id/OIP.3k37mbku3Ck4MPYbWlyzEQAAAA?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5">Applesauce</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Rich in Fiber:</p> Helps regulate bowel
              movements and supports digestion.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Gentle on Stomach:</p> Easy to digest and
              soothing for an upset stomach.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Contains Pectin:</p> Promotes healthy gut
              bacteria.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://www.bing.com/th/id/OIP.u_bOkum5Sors7I-hGw8g1QAAAA?w=135&h=155&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5">Fennel</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Reduces Gas:</p> Helps reduce bloating and
              gas.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Promotes Digestion:</p> Contains anethole,
              which stimulates the secretion of digestive juices.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Soothes Stomach Cramps:</p> Eases
              discomfort and stomach pain.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-itemr">
          <img
            src="https://www.bing.com/th/id/OIP.ohGRKK_P-7-QMXceBrs8XQHaE8?w=284&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5">Rice (Plain)</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Easy to Digest:</p> Gentle on the stomach
              and non-irritating.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Low in Fiber:</p> Helps with diarrhea by
              absorbing fluids.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Calms the Stomach:</p> Provides energy
              without triggering stomach issues.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://www.bing.com/th/id/OIP.M7Fmc9-pq3L9_rZwhedxlAHaEz?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5"> Chamomile Tea</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Reduces Inflammation:</p> Has
              anti-inflammatory properties to soothe the stomach.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Relieves Nausea:</p> Can reduce nausea and
              stomach cramping.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Calms Stomach Pain:</p> Eases overall
              discomfort.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-itemr">
          <img
            src="https://www.bing.com/th/id/OIP.X7y8DeC2H-_GZZf6JKb5XAHaFW?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5">Sweet Potatoes</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Rich in Fiber:</p> Supports digestion and
              promotes gut health.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Contains Vitamin A:</p> Supports a healthy
              stomach lining.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Easy to Digest:</p> Gentle on the stomach.
            </p>
            <br></br>
          </div>
        </article>
      </section>

      <section className="bad-foods">
        <h2 className="head2">FOOD THAT'S BAD FOR STOMACH</h2>

        <article className="food-iteml">
          <img
            src="https://th.bing.com/th?id=OIP.v9JWr6ustsxI7iiI7OFPswHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5">Spicy Foods</h5>
            <br></br>

            <p className="foodpara">
              <p className="foodtext">Increases Stomach Acid:</p> Can irritate
              the stomach lining and lead to indigestion or heartburn.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Triggers Acid Reflux:</p> Spicy foods can
              cause the lower esophageal sphincter to relax, leading to acid
              reflux.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Causes Stomach Discomfort:</p> Spicy foods
              may cause discomfort, bloating, or gas for sensitive individuals.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-itemr">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.3B3kU6ZYJdDzN8b1jdeh6QHaFc?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <div class="nparticle"></div>

            <h5 className="head5">Fried Foods</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Hard to Digest:</p> High-fat content in
              fried foods slows digestion and can cause stomach discomfort.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Increases Acid Production:</p> Fried foods
              can lead to excessive stomach acid, causing indigestion or acid
              reflux.
            </p>
            <br></br>

            <p className="foodpara">
              <p className="foodtext">Leads to Bloating:</p> Greasy foods can
              cause bloating and gas, making the stomach feel heavy.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://th.bing.com/th?id=OIP.IUPD-jZqMJ9JH_6JJL-0jgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />

          <div className="food-contentl">
            <h5 className="head5">
              Carbonated Beverages (Soda, Sparkling Water)
            </h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Causes Bloating:</p> The gas in carbonated
              drinks can cause bloating and discomfort in the stomach.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Triggers Acid Reflux:</p> Carbonation can
              lead to acid reflux and exacerbate heartburn.
            </p>
            <br></br>

            <p className="foodpara">
              <p className="foodtext">Disrupts Digestion:</p> These beverages
              can slow digestion, leading to gas and stomach pain.
            </p>
            <br></br>
          </div>
          <div class="nparticle"></div>
        </article>
        <article className="food-itemr">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.CW22Grctx2l5DxNmU4wZ5gHaEn?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5">Processed Meats</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">High in Fat and Preservatives:</p> Can
              irritate the stomach and slow digestion.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Contains Additives:</p> May lead to
              bloating and discomfort.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Hard to Digest:</p> Processed meats can be
              challenging for the stomach to break down.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://th.bing.com/th/id/OIP.L1KZ9kz1QJoYJ089IYH4jQHaFV?w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5">Citrus Fruits</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">High in Acid:</p> Can irritate the stomach
              lining and cause discomfort.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Triggers Acid Reflux:</p> The acidic
              nature can lead to heartburn and indigestion.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Can Cause Stomach Pain:</p> Particularly
              in people with sensitive stomachs or ulcers.
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
            <p className="foodpara">
              <p className="foodtext">Increases Acid Production:</p> Can lead to
              acid reflux and gastritis.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Weakens Stomach Lining:</p> Excessive
              alcohol intake can damage the stomach lining, causing ulcers.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Slows Digestion:</p> May lead to bloating
              and discomfort.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.UNWx5QnfFvyIes0hv4rdwgHaGK?w=232&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5"> High-Fat Dairy</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Hard to Digest:</p> High-fat content can
              lead to bloating and gas.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Triggers Acid Reflux:</p> Fatty foods can
              relax the lower esophageal sphincter.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Can Cause Discomfort:</p> May irritate
              those with lactose intolerance or sensitivity.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-itemr">
          <img
            src="https://www.bing.com/th/id/OIP.p_pebnS80ESbaxIixeE25gAAAA?w=210&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5"> Artificial Sweeteners</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Disrupts Gut Health:</p> May affect
              healthy gut bacteria.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Causes Gas and Bloating:</p> Some
              artificial sweeteners, like sorbitol, are hard to digest.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Leads to Stomach Pain:</p> Can cause
              cramps in sensitive individuals.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-iteml">
          <img
            src="https://www.bing.com/th/id/OIP.tWq2a6lTpuwIa-4U4dWjSgAAAA?w=188&h=141&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentl">
            <h5 className="head5">Chocolate</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Triggers Acid Reflux:</p> Contains
              caffeine and fat, which can increase acid production.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Relaxes Esophageal Sphincter:</p> Can
              cause acid to flow back into the esophagus.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">May Lead to Discomfort:</p> Especially if
              consumed in large quantities.
            </p>
            <br></br>
          </div>
        </article>

        <article className="food-itemr">
          <img
            src="https://www.bing.com/th/id/OIP.AXrK0kpXxixXz-IAHZsqsQHaFj?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="."
            className="food-image"
          />
          <div className="food-contentr">
            <h5 className="head5"> Onions</h5>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Triggers Acid Reflux:</p> Can relax the
              lower esophageal sphincter and cause heartburn.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Causes Gas:</p> Onions are known to cause
              bloating and gas.
            </p>
            <br></br>
            <p className="foodpara">
              <p className="foodtext">Can Cause Discomfort:</p> Especially when
              consumed raw.
            </p>
            <br></br>
          </div>
        </article>
      </section>
    </div>
  );
}
export default Stomach;
