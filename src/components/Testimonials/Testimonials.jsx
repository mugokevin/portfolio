import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';



function Testimonials() {
    const clients = [
        {
          img: profilePic1,
          review:
            "Knowledgable, experienced, responsive and prompt.",
        },
        {
          img: profilePic2,
          review:
            "Astounding responsiveness. Good long time partner.",
        },
        {
          img: profilePic3,
          review:
            "Feedback from users is overwhelmingly positive.",
        },
        {
          img: profilePic4,
          review:
            "Open minded and resolves issues quickly.",
        },
      ];

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get</span> &nbsp;
            <span>Exceptional work</span> &nbsp;
            <span>from me....</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>
        {/* slider */}
        <Swiper modules={[Pagination]} slidesPerView={1} pagination={{clickable:true}} >
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                             <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>

    </div>
  )
}

export default Testimonials