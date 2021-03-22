import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar'
// import Bg from './Assets/Vector 5.svg';
import search from './Assets/search.svg';
import arrow from './Assets/arrow.svg';
import group from './Assets/Group.svg';
import hat from './Assets/hat.svg';
import user from './Assets/users.svg';
import lens from './Assets/lens.svg'

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="upper">
                    <Navbar/>    
                    <div className="content">
                        <div className="desc">
                            <h1 id="heading1">Search</h1>
                            <h1 id="heading2">the database</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,</p>
                            <div id="input" className="ui icon input">
                                <input type="text" placeholder="Search..." />
                                <i className="search icon"></i>
                                <div class="ui selection dropdown">
                                    <input type="hidden" name="gender" />
                                    <i class="dropdown icon"></i>
                                    <div class="default text">Choose</div>
                                    <div class="menu">
                                        <div class="item" data-value="1">Alum</div>
                                        <div class="item" data-value="0">Intern</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={search} alt="logo" />
                        </div>
                    </div>
                    <div className="arrow">
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className="ui container mid">
                    <div className="group">
                        <img src={group} alt="group" />
                    </div>
                    <div className="midDesc">
                        <h1>About the website</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, 
                        </p>
                    </div>
                    <div className="midContent">
                        <div>
                            <div>
                                <img src={hat} alt="hat" />
                            </div>
                            <h1>Alumin Form</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus 
                            </p>
                        </div>
                        <div>
                            <div>
                                <img src={user} alt="user" />
                            </div>
                            <h1>Intern Form</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus 
                            </p>
                        </div>
                        <div>
                            <div>
                                <img src={lens} alt="lens" />
                            </div>
                            <h1>Search</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;
