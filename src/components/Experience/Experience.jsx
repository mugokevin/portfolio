import './Experience.css';
import  { useContext } from "react";
import { themeContext } from "../../Context";

function Experience() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='Experience'>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
            <span  style={{color: darkMode?'white':''}}>Years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
            <span style={{color: darkMode?'white':''}}>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div> 
            <span  style={{color: darkMode?'white':''}}>Companies</span>
            <span>Work</span>
        </div>
    </div> 
  )
}

export default Experience