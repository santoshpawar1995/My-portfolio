import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/vector3.png";
import Vector2 from "../../img/vector6.png";
// import boy2 from "../../img/boy4.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin .png";
import Instagram from "../../img/instagram .png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Santosh pawar</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/santoshpawar1995"><img src={Github} alt="" /></a>
          <img src={LinkedIn} alt="" />
          <a href="https://instagram.com/santos_8977?igshid=MWg2YzZtOGF2MHIydA=="><img src={Instagram} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
       
        <img className="my-image1" src={Vector1} alt="" />
        <img className="my-image" src={Vector2 } alt="" />
        {/* <img className="my-image" src={boy2} alt="" /> */}
        {/* animation */}
         {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "65%" }}
          transition={transition}
          className="floating-div"
        > */}
          {/* <FloatinDiv img={crown} text1="Software" text2="Developer" />
        </motion.div> */}

        {/* animation */}
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        > */}
          {/* floatinDiv mein change hy dark mode ka */}
           {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>   */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
