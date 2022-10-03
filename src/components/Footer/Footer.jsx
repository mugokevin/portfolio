import './Footer.css';
import Wave from '../../img/wave.png';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';


function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}} />
        <div className="f-content">
            <span>kevinmugo4@gmail.com</span>
            <div className="f-icons">
                <Instagram color='white' size='3rem'/>
                <a href="https://www.facebook.com/kevin.mugo.505"><Facebook color='white' size='3rem'/></a>
                <a href="https://github.com/mugokevin"><Github color='white' size='3rem'/></a>
            </div>
            <span> Copyright &copy; kevin mugo</span>
        </div>
    </div>
  )
}

export default Footer