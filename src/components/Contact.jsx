import imgOne from "../img/1.png";
import imgTwo from "../img/2.png";
import imgThree from "../img/3.png";
const Contact = () => {
  return (
    <>
      <div>
        <section className="contactContent">
          <div className="imagesContent">
            <div className="images">
              <img src={imgOne} alt="" />
            </div>
            <div className="images">
              <img src={imgTwo} alt="" />
            </div>
            <div className="images">
              <img src={imgThree} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
