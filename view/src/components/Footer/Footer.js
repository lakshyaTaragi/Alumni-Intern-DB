import React from 'react';
import group from './Assets/Group.svg';
import './footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="logo">
                        <img src={group} alt="group" />
                </div>
                <div className="content"> 
                    <div className="left">
                        <p>
                            The Department of Biotechnology,
                            Indian Institute of Technology, Roorkee
                            Roorkee, Uttarakhand,
                            India - 247667
                        </p>
                    </div>
                    <div className="right">
                        <div className="contact">Contact Us</div>
                        <div className="info">+91123456789</div>
                        <div className="info">+91123456789</div>
                        <div className="info">abc@gmail.com</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;