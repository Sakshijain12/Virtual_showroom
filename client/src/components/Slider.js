import React from 'react'
import '../App.css';
import img1 from '../images/img1.jpg';
import vid from "../images/vid.mp4";
import img2 from '../images/img2.jfif';
import img3 from '../images/img3.jpg';
export default function Slider(props) {
  return (

    <div id= {props.id} className="carousel slide w-30">
        <div className="carousel-indicators">
            <button type="button" data-bs-target={`#${props.id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target={`#${props.id}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target={`#${props.id}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            {/* <img src={img1} className="d-block w-100" alt="..."/> */}
              <video className="img-fluid" autoPlay loop muted>
                 <source src="https://media.istockphoto.com/id/496721068/video/modern-bedroom-interior-4k.mp4?s=mp4-640x640-is&k=20&c=ikBOdDENV3U1USxLFAd-tDGUG4MlqTYWeb6eziKKzuA=" type="video/mp4" />
              </video>
            </div>
            <div className="carousel-item">
            {/* <img src={img2} className="d-block w-100" alt="..."/> */}
                <div id="gallerySLide" class="gallery_area">
                <video width="320" height="240" controls>
                    <source src={vid} type="video/mp4"/>
                </video>
                </div>
            </div>
            <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}
