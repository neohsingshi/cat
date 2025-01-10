// pages/Home.js
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

// Dynamic imports for images
const hotels = [
  {
    image: require("../assets/hompton-by-the-beach.jpg"),
    title: "Hompton By The Beach Penang",
    description:
      "Hompton by the Beach Penang is a 4-star hotel along the strategic Tanjung Tokong seafront that embodies both business and pleasure, offering travellers a home away from home...",
  },
  {
    image: require("./assets/bertam-resort-water-park.jpg"),
    title: "Bertam Resort and Water Park",
    description:
      "Integrated 5-Star Resort in Penang. Experience luxury at the resort, featuring a 15-rides waterpark, convention center, and spa...",
  },
  {
    image: require("../assets/angsana-teluk-bahang.jpg"),
    title: "Angsana Teluk Bahang, Penang",
    description:
      "Angsana Teluk Bahang, Penang, part of Banyan Group is the first Angsana brand in Malaysia. The vibrant resort is located on idyllic Teluk Bahang beach...",
  },
  {
    image: require("../assets/penanghill.jpeg"),
    title: "Bayview Beach Resort",
    description:
      "At Bayview Beach Resort Penang, a tropical garden filled with slender palms is all that separates you from the long stretch of enticing white sand at Batu Ferringhi beach...",
  },
];

const highlights = [
  {
    title: "1. Night Market",
    description:
      "Pasar Malam or night markets happen weekly to serve the neighboring communities. Street vendors set up their stalls along roads around 6.30pm...",
    image: require("../assets/nightmarket.jpg"),
  },
  {
    title: "2. Fruits",
    description:
      "Penang boasts a wide variety of tropical fruits, thanks to its warm, humid climate, which provides an ideal environment for cultivating a diverse range of fruits...",
    image: require("../assets/fruit.jpeg"),
  },
  {
    title: "3. Culture",
    description:
      "Penang is a vibrant melting pot of cultures, making it one of Malaysia's most unique states. The island's rich cultural diversity is a blend of Malay, Chinese, Indian, and various other ethnic groups...",
    image: require("../assets/culture.jpg"),
  },
  {
    title: "4. History",
    description:
      "Penang has a rich history, shaped by its strategic location along the Strait of Malacca. It was founded by Captain Francis Light in 1786 as a British colony...",
    image: require("../assets/history.jpg"),
  },
];

function Home() {
  return (
    <div style={{ marginTop: "20px" }}>
      {/* Carousel Section */}
      <div style={{ margin: "0 auto", width: "1200px", height: "600px" }}>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "550px" }}
              className="d-block w-100"
              src={require("../assets/penang1.jpg")}
              alt="First image"
            />
            <Carousel.Caption>
              <h3>Welcome To Penang!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "550px" }}
              className="d-block w-100"
              src={require("../assets/penang.jpg")}
              alt="Second image"
            />
            <Carousel.Caption>
              <h3>Welcome To Penang!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "550px" }}
              className="d-block w-100"
              src={require("../assets/peanng3.png")}
              alt="Third image"
            />
            <Carousel.Caption>
              <h3>Welcome To Penang!</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Tourist Spots Section */}
      <section>
        <h2>Tourist Spot</h2>
        <div className="scenic-container">
          <div className="scenic-card">
            <img src="/assets/penanghill.jpeg" alt="Penang Hill" />

            <h3>Penang Hill</h3>
            <p>
              Penang Hill is a hill resort comprising a group of peaks on
              Penang Island, Malaysia. It is located in Air Itam, 6 kilometres
              west of the city centre of George Town...
            </p>
          </div>
          <div className="scenic-card">
            <img src={require("../assets/kekloksi.jpeg")} alt="Kek Lok Si" />
            <h3>Kek Lok Si</h3>
            <p>
              Built in 1891, Kek Lok Si Temple is one of the largest and finest
              temple complexes in Southeast Asia...
            </p>
          </div>
          <div className="scenic-card">
            <img src={require("../assets/street art.jpg")} alt="Street Art" />
            <h3>Penang Street Art</h3>
            <p>
              Penang's George Town is a UNESCO World Heritage Site filled with
              vibrant street art depicting its rich history...
            </p>
          </div>
          <div className="scenic-card">
            <img
              src={require("../assets/batu-ferringhi-beach.jpg")}
              alt="Batu Ferringhi Beach"
            />
            <h3>Batu Ferringhi Beach</h3>
            <p>
              Batu Ferringhi Beach is one of Penang’s most popular and vibrant
              coastal destinations...
            </p>
          </div>
        </div>
      </section>

      {/* Food and Beverages Section */}
      <section>
        <h2>Food and Beverages</h2>
        <div className="food-container">
          <div className="food-card">
            <img
              src={require("../assets/Char_kway_teow.jpg")}
              alt="Char kway teow"
            />
            <h3>Char kway teow</h3>
            <p>
              A stir-fried rice noodle dish with garlic, soy sauce, prawns, and
              more, originating from Maritime Southeast Asia...
            </p>
          </div>
          <div className="food-card">
            <img src={require("../assets/Nyonya_Laksa.jpg")} alt="Laksa" />
            <h3>Laksa</h3>
            <p>
              Penang Laksa, also known as Asam Laksa, is a specialty soup with a
              sour and appetizing taste...
            </p>
          </div>
          <div className="food-card">
            <img src={require("../assets/Chendol.jpg")} alt="Cendol" />
            <h3>Cendol</h3>
            <p>
              A refreshing traditional dessert with shaved ice, coconut milk,
              and palm sugar syrup...
            </p>
          </div>
          <div className="food-card">
            <img
              src={require("../assets/Penang-style_Hokkien_mee.jpg")}
              alt="Hokkien Mee"
            />
            <h3>Penang Hokkien Mee</h3>
            <p>
              A flavorful noodle soup with prawns, pork bones, and aromatic
              spices...
            </p>
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <div className="hotels-container">
        <h2 className="hotels-title">Hotel Recommendation</h2>
        {hotels.map((hotel, index) => (
          <div className="hotel-item" key={index}>
            <img src={hotel.image} alt={hotel.title} className="hotel-image" />
            <div className="hotel-text">
              <h3 className="hotel-title">{hotel.title}</h3>
              <p className="hotel-description">{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Highlights Section */}
      <div>
        <h2 style={{ textAlign: "center", margin: "20px 0" }}>
          Others Attractive Thing About Penang
        </h2>
        {highlights.map((highlight, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "20px",
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <img
              src={highlight.image}
              alt={highlight.title}
              style={{
                width: "20%",
                height: "200px",
                marginRight: "20px",
                borderRadius: "10px",
              }}
            />
            <div style={{ width: "60%" }}>
              <h3
                style={{
                  fontSize: "1.5em",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                {highlight.title}
              </h3>
              <p style={{ fontSize: "1em", color: "#666" }}>
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

