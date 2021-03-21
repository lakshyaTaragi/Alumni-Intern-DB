import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar'
// import Bg from './Assets/Vector 5.svg';
import search from './Assets/search.svg';

class Home extends React.Component{
    render(){
        return(
            <div className="whole">
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
            </div>
            
        )
    }
}

export default Home;
