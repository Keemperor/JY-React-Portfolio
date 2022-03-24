import React from 'react'
import coverImage from "../../assets/Images/Jacob-portrait.png";

function About() {

  return (
    <section className="my-5" >
      <h1 className="xcenter">Jacob Yarce</h1>
      <img src={coverImage} className="my-2" style={{ width: "35%",  }} alt="Jacob Yarce" />
      <div className="my-2">
        <p>
          I am a Web Developer and a Graphic Designer, my intention is to bring your web projects to life and make them look visually amazing and efficient.
      </p>
      <p>
        I am knowledgeable in HTML, CSS, Javascript, MERN, as well as the adobe suit, to aid you in bringing any and all of your projects to a successful deployment.
      </p>
      </div>
    </section>
  )
}

export default About