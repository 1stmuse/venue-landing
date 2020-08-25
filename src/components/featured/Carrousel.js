import React from 'react';
import Slider from "react-slick";


const Carrousel = () => {

    const settings = {
        dots: false,
        infinite:true,
        autoplay:true,
        speed: 500
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`, //to make the image carrousel the size of the window
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            // background:`url(${slide_one})`,
                            background: `url(https://ichef.bbci.co.uk/news/640/cpsprodpb/860D/production/_99371343_gettyimages-882097926.jpg)`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(https://i.ytimg.com/vi/WWYc2ezruO4/maxresdefault.jpg)`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(https://media.ticketmaster.com/en-us/dam/a/104/780c37cf-e460-4efa-a6f8-9555269aa104_770641_TABLET_LANDSCAPE_LARGE_16_9.jpg)`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
            </Slider>
            
        </div>
    );
};

export default Carrousel;