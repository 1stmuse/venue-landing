import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import MyButton from '../utils/MyButton'
class Discount extends Component {

    state={
        discountStart:0,
        discountEnd:30
    }

    porcentage=()=>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart:this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }


    render() {
        return (
            <div className='center_wrapper'>
                <div className='discount_wrapper'>

                    <Fade 
                    onReveal={()=>this.porcentage()}
                    >
                        <div className='discount_porcentage'>
                            <span>{this.state.discountStart}% </span>
                            <sapn>OFF</sapn>
                        </div>
                    </Fade>
                   
                    <Slide right>
                        <div className='discount_description'>
                            <h3>Early birds tickets</h3>

                            <p>better but this ticket in 
                                sdcsfvdgbvdfbhkigefrpl,mgnkj,klsxcrfhyhkjnhngnjmkhgnh
                                time to get eyes blazing percent off and have fun</p>
                            
                            <MyButton
                                text='Purchase ticket'
                                bck='#ffa800'
                                color='#ffffff'
                                link='google.com'
                            />

                        </div>

                    </Slide>
                    
                </div>
                
            </div>
        );
    }
}

export default Discount;