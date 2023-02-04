import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import Slider from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import "./Slider.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Pagination } from 'swiper'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/css//pagination'
import { Carousel } from 'react-responsive-carousel';
const Banner = ({index}) => {
  return (
    
    <Carousel showIndicators={true} autoPlay infiniteLoop showThumbs={false} interval="3000" transitionTime="94" controls={false}>

    {/* {index.map((item) => {
        
            <Carousel>
            <img className='banner-lists' src={item} alt="Slide"/>
            
            </Carousel>

    })} */}


      <div> 
         {/* FronT Banner  */}
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif"
          alt="First slide" width="100%" height="120%"
        />  
      </div>
      <div> 
        {/* FuTuRistic  */}
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg"
          alt="First slide" width="100%" height="150%"
        />
        
      </div>

      <div>
       {/* 11X pRo  */}
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/3_operator_in/08/06/2021/3e2d6457a1e569145f66318a17ea1e03.jpg"
          alt="First slide" width="100%" height="150%"
        />  
      </div>
      

      <div>
      {/* Notw 10 pRo maXX  */}
         <img
          className="d-block w-100"
          src="https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg"
          alt="First slide" width="100%" height="150%"
        />  
      </div>


      <div> 
       {/* NoteBook  */}
         <img
          className="d-block w-100"
          src="https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg"
          alt="First slide" width="100%" height="150%"
        />  
      </div>

      <div> 
      {/* Note 10  */}
         <img
          className="d-block w-100"
          src="https://i02.appmifile.com/279_operator_in/08/06/2021/072acd0a667c5a0e045ed50a9064c531.jpg"
          alt="First slide" width="100%" height="150%"
        />  
      </div>

      <div>
      {/* TV 40  */}
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/417_operator_in/04/06/2021/36c1c9f10ac411c5ba304d30d60ca234.jpg"
          alt="First slide" width="100%" height="150%"
        />  
      </div>

      <div>
      {/*  11 X  */}
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/172_operator_in/08/06/2021/44c5407a6c9ede6d782bebfd70cecc24.jpg"
          alt="First slide" width="100%" height="150%"
        />  
      </div>

      <div> 
       {/* Tv  */}
          <img
          className="d-block w-100"
          src="https://i02.appmifile.com/667_operator_in/09/06/2021/eca16c5a1a97b1f30cedb943e144e2e0.jpg"
          alt="First slide" width="100%" height="150%"
        />  
      </div>


      <div>
      {/* Watch  */}
        <img
          className="d-block w-100"
          src="https://i02.appmifile.com/934_operator_in/07/06/2021/372a6e5d29c26c34b716b0408a533e3f.jpg"
          alt="First slide" width="100%" height="150%"
        />  
      </div>
      </Carousel>       
  );
}

export default Banner;