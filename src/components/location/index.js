import React from 'react';



const Location = () => {
    return (
        <div className='location_wrapper'>

            <iframe 
            src='https://www.google.com/maps/d/embed?mid=1M-B_QUb9Mpu58uDs5X7kVZb9vGM&hl=en'
            width='100%'
            height='500px'
            frameBorder='0'
            allowFullScreen
            />

            <div className='location_tag'>
                <div>Location</div>

            </div>
            
        </div>
    );
};
 
export default Location;