import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import Kevin from '../../img/kevin.webp';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { useContext } from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';





function Intro() {

  const transition = {duration:2, type: 'spring'}

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hello! I'm</span>
                <span>Kevin Mugo</span>
                <span>Front-end developer with great experience in web design and development.</span>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                 <button className="button i-button">Hire Me</button>
            </Link>  
            <div className="i-icons">
                <a href="https://github.com/mugokevin"><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/kelvin-mugo"><img src={Linkedin} alt="" /></a>
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
              <img src={Vector1} alt="" />
              <img src={Vector2} alt="" />
              <img src={Kevin} alt="" />
              <motion.img initial={{left:'-36%'}} whileInView={{left:'-24%'}} transition={transition} src={Glassesimoji} alt="" />
              <motion.div 
                initial={{top:'-4%', left:'74%'}}
                whileInView={{left:'68%'}}
                transition={transition}
                style={{top:'-4%', left:'68%'}}
                className="floating-div">
                  <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
              </motion.div>
              <motion.div
                initial={{top:'18rem', left:'9rem'}}
                whileInView={{left:'0rem'}}
                transition={transition}
                style={{top:'352px', left:'0'}}
                className='floating-div'>
                  <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
              </motion.div>
              {/*blur divs */}
              <div className="blur" style={{background:'rgb(238 210 255)'}}></div>
              <div className="blur" style={{background:'#C1F5FF',top:'272px',width:'336px',height:'176px',left:'-144px'}}></div>
        </div>
    </div>
  )
}

export default Intro