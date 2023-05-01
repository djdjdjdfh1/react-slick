import React, { Component } from "react";
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as faUser, faPaste, faEnvelope, faCopy, faDriversLicense, faFaceMeh, faFolderOpen, faLemon, faHeart } from '@fortawesome/free-regular-svg-icons'



export default function SimpleSlider() {

    const pics = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings} className="mx-5">
            {
                pics.map((pic)=>(
                    <div>
                        <img 
                        src={require(`../img/${pic}`)} 
                        alt="" 
                        width={500}
                        style={{margin:"auto"}}
                        />
                    </div>
                ))
            }
        </Slider>
        <FontAwesomeIcon icon={faUser} style={{margin:"20px"}} className='icons'/>
        <FontAwesomeIcon icon={faPaste} style={{margin:"20px"}} className='icons'/>
        <FontAwesomeIcon icon={faEnvelope} style={{margin:"20px"}} className='icons'/>
        <FontAwesomeIcon icon={faCopy} style={{margin:"20px"}} className='icons'/>
        <FontAwesomeIcon icon={faDriversLicense} style={{margin:"20px"}} className='icons'/>
        <FontAwesomeIcon icon={faFaceMeh} style={{margin:"20px"}} className='icons'/>
        <FontAwesomeIcon icon={faFolderOpen} style={{margin:"20px"}} className='icons'/>
        <FontAwesomeIcon icon={faLemon} style={{margin:"20px"}} className='icons'/>
        <FontAwesomeIcon icon={faHeart} style={{margin:"20px"}} className='icons'/>
      </div>
    );
}