import React from 'react'
import "./Css/client-slider.css"
import Marquee from 'react-fast-marquee';
import img1 from "../images/client/1.webp";
import img2 from "../images/client/2.webp";
import img3 from "../images/client/3.webp";
import img4 from '../images/client/4.webp';
import img5 from '../images/client/5.webp';
import img6 from '../images/client/6.webp';
import img7 from '../images/client/7.webp';
import img8 from '../images/client/8.webp';
import img9 from '../images/client/9.webp';
import img10 from '../images/client/10.webp';
import img11 from '../images/client/11.webp';
import img12 from '../images/client/12.webp';
import img13 from '../images/client/13.webp';
import img14 from '../images/client/14.webp';
import img15 from '../images/client/15.webp';
import img16 from '../images/client/16.webp';
import img17 from '../images/client/17.webp';
import img18 from '../images/client/18.webp';
import img19 from '../images/client/19.webp';
import img20 from '../images/client/20.webp';
import img21 from '../images/client/21.webp';





function ClientSlider() {
    return (
        <>

            <div className='sliderContainers'>
                <div className='client-slider-title'>
                    Ils nous font confiance
                </div>
                <div className='sliderContainer'>
                    <Marquee direction="right" speed={100} delay={5}>
                        <div className="image_wrapper">
                            <img src={img1} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img2} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img3} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img4} alt="" />
                        </div>
                        {/* <div className="image-wrapper">
                            <img src={img5} alt="" />
                        </div> */}
                        <div className="image_wrapper">
                            <img src={img6} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img7} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img8} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img9} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img10} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img11} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img12} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img13} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img14} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img15} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img16} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img17} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img18} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img19} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img20} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img21} alt="" />
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default ClientSlider