import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';



function Works() {

     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
        {/* left side */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Works for All these:</span>
            <span>Brands & Clients</span>
            <span>
              Worked remotely with clients on some projects including product <br/> customization, 
              content management systems, e commerce sites,<br/> data visualizations, admin interfaces,
              kiosks, and more
            </span>
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                 <div className="button s-button">Hire Me</div>
            </Link>  
             <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 3.5, type: "spring" }} className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </motion.div>
            {/* background circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>  
  )
}

export default Works