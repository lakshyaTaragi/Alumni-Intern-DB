import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar'
import Bg from './Assets/Vector 5.svg';
// import search from './Assets/search.svg';

class Home extends React.Component{
    render(){
        return(
            <div className="Homecontainer">
                {/* <img src={Bg} alt="Bg" />     */}
                <Navbar/>    
            </div>
            
        )
    }
}

export default Home;
