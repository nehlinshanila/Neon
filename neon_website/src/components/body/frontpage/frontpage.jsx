import "./frontpage.css";
import Stars from "./wrapper/stars";
import About from "./about/about";

const Frontpage = () => {
  return (
    <div>
      <div className="hero" id="home">
        <Stars/>
        <div className="hero__container">
          <h1 className="hero__heading">
            Once In A <span>Lifetime</span>
          </h1>
          <div className="shundor">
            <p className="hero__description">Unlimited Possibilities</p>
          </div>
          <button className="main__btn">
            <a href="#">
              <p>Explore</p>
            </a>
          </button>
        </div>
      </div>
      <About/>
    </div>
  );
};

export default Frontpage;
