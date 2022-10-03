import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { themeContext } from "../../Context";
import {motion} from 'framer-motion';
import { useContext } from 'react';



const Services = () => {

   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
 
   // transition
   const transition = {duration: 1, type: "spring"};

  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>services</span>
            <span>
              Hello my name is kevin. I am a front-end developer based in Nairobi. <br/>
              I’m Constantly learning the best practices of software using react and node <br/>
              while having user needs in mind. Robust problem solving skills and deliver work<br/>
              according to clients specification.
            </span>
            <a href={Resume} download>
                <div className="button s-button">Download C.V</div>
            </a>

            <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>

        </div>
        {/* right side */}
        <div className="cards">
               {/*first card */}
               <motion.div  initial={{ left: "25rem" }} whileInView={{ left: "14rem" }}transition={transition} style={{left:'14rem'}}>
                  <Card emoji={HeartEmoji} heading={'Design'} detail={"Figma, Sketch, Adobe, Adobe xd"} />
               </motion.div>
                {/*second card */}
                <motion.div   initial={{ left: "-11rem", top: "12rem" }} whileInView={{ left: "-4rem" }}transition={transition} style={{top:'12rem' ,left:'-4rem'}}>
                  <Card emoji={Glasses} heading={'Developer'} detail={"HTML, CSS, JavaScript, React, Node"} />
               </motion.div>
                {/*third card */}
                <motion.div  initial={{ top: "19rem", left: "25rem" }} whileInView={{ left: "12rem" }} transition={transition}  style={{top:'19rem',left:'12rem'}}>
                  <Card emoji={Humble} heading={'UI/UX'} detail={" I design user friendly online experiences."} />
               </motion.div>
               <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>

        </div>
    </div>
  )
}

export default Services