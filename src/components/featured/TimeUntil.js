import React, { Component } from 'react';
import Slide from 'react-reveal/Slide'



class TimeUntil extends Component {

    state={
        deadline:'sep, 25, 2020',
        days:'0',
        hours:'0',
        minutes:'0',
        seconds:'0'
    }


    // get the time reamianing from the deadline and the current date
    getTimeUntil=(deadline)=>{
        const time = Date.parse(deadline)- Date.parse(new Date())
        if (time < 0){
            // console.log('time passed')
        }else{
            const seconds = Math.floor((time/1000)%60)
            const minutes = Math.floor((time/1000/60)%60)
            const hours = Math.floor((time/(1000*60*60))%24)
            const days = Math.floor(time/(1000*60*60*24))

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
        // console.log(time)
    }

    componentDidMount(){
        // change the time every 1 second after mounting and calling the getTimeUntil function
        setInterval(()=>this.getTimeUntil(this.state.deadline), 1000)
    }

    render() {
        return (
           <Slide left delay={1000} >
                <div className='countdown_wrapper'>
                <div className='countdown_top'>Event starts in</div>
                <div className='countdown_bottom'>
                    <div className='countdown_item'>
                        <div className='countdown_time'>{this.state.days} </div>
                        <div className='countdown_tag'>Days</div>
                    </div>
                    <div className='countdown_item'>
                        <div className='countdown_time'> {this.state.hours}</div>
                        <div className='countdown_tag'>Hs</div>
                    </div>
                    <div className='countdown_item'>
                        <div className='countdown_time'>{this.state.minutes} </div>
                        <div className='countdown_tag'>Min</div>
                    </div>
                    <div className='countdown_item'>
                        <div className='countdown_time'>{this.state.seconds} </div>
                        <div className='countdown_tag'>Sec</div>
                    </div>
                </div>
            </div>
           </Slide>
        );
    }
}

export default TimeUntil;