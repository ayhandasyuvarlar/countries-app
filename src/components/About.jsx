import React from "react";
const sosialMedia = [
  {
    link: "https://www.linkedin.com/in/ayhan-da%C5%9Fyuvarlar-03a76220a/",
    icon: "uil uil-linkedin",
    name: "Linkedin",
    target :'_blank'
  },
  {
    link: "https://github.com/ayhandasyuvarlar",
    icon: "uil uil-github",
    name: "Github",
    target :'_blank'
  },
  {
    link: "https://www.instagram.com/_theayhan/",
    icon: "uil uil-instagram",
    name: "Instagram",
    target :'_blank'
  },
  {
    link: "https://twitter.com/_theayhan",
    icon: "uil uil-twitter",
    name: "Twitter",
    target :'_blank'
  },
];
function About() {
  return (
    <section className="aboutContent">
      <div className="about">
        <div className="text">
          <h2>About</h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          saepe similique incidunt veritatis quos sunt, perferendis, expedita
          consectetur dolore perspiciatis accusamus, natus alias nulla
          voluptates reprehenderit quidem debitis? Fuga minima amet in esse
          itaque sapiente sit ipsa aspernatur placeat sunt.
        </div>
        <div className="userImg">
          <img
            src="https://avatars.githubusercontent.com/u/81258778?v=4"
            alt=""
          />
        </div>
      </div>
      <div className="sosialMediaGroup">
        <div>
          <h2>Contact Me</h2>
        </div>
        <div className="sosialCards">
          {sosialMedia.map((media) => {
            return (
              <a href={media.link} target={media.target}>
              <div className="sosialCard">
                <i className={media.icon}></i>
                <h3>{media.name}</h3>
              </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default About;
