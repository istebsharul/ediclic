import React from 'react'
import "./Css/client-slider.css"
import Marquee from 'react-fast-marquee';
import img1 from "../images/client/1.jpeg";
import img2 from "../images/client/2.jpeg";
import img3 from "../images/client/3.jpeg";
import img4 from '../images/client/4.jpeg';
import img5 from '../images/client/5.jpeg';
import img6 from '../images/client/6.jpeg';
import img7 from '../images/client/7.jpeg';
import img8 from '../images/client/8.jpeg';
import img9 from '../images/client/9.jpeg';
import img10 from '../images/client/10.jpeg';
import img11 from '../images/client/12.jpg';
import img12 from '../images/client/13.jpg';
import img13 from '../images/client/14.jpg';
import img15 from '../images/client/15.png';
import img16 from '../images/client/16.png';
import img17 from '../images/client/17.png';
import img18 from '../images/client/18.png';
import img19 from '../images/client/19.png';
import img20 from '../images/client/20.png';
import img21 from '../images/client/21.png';
import img22 from '../images/client/22.png';





function ClientSlider() {
    return (
        <>
            <div className='sliderContainers'>
                <div className='client-slider-title'>
                    ILS NOUS FONT CONFIANCE
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
                        <div>
                            {/* <img src={img5} alt="" /> */}
                        </div>
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
                        {/* <div className="image_wrapper">
                            <img src={img11} alt="" />
                        </div> */}
                        <div className="image_wrapper">
                            <img src={img12} alt="" />
                        </div>
                        <div className="image_wrapper">
                            <img src={img13} alt="" />
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
                        <div className="image_wrapper">
                            <img src={img22} alt="" />
                        </div>

                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default ClientSlider