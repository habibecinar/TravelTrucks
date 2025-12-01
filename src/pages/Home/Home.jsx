import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>

        <button 
          className="hero-btn"
          onClick={() => navigate("/catalog")}
        >
          View Now
        </button>
      </div>
    </section>
  );
};

export default Home;
