import "./about.css";
import Shundor from "./shundor.png"

const About = () => {
  return (
    <div>
      {/* <!-- about section --> */}
      <div className="main" id="about">
        <div className="main__container">
          <a href="#popabout">
            <div className="main__img--container" id="cardtwo">
              <div className="main__img--card">
                {/* image name writted as ./ in front */}
                {/* img src written as src ={} and each img imported on top */}
                <img src={Shundor} alt="" className="shundorpng" />
              </div>
            </div>
          </a>
          <div className="main__content">
            <h1>What do we do?</h1>
            <h2>We help Business scale</h2>
            <p>Scedule a call to learn more about our services</p>
            <button className="main__btn">
              <a href="#">Schedule Call</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
