import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="ui secondary menu">
                    <a className="active item">
                        <h3 className="main">Alumni and intern Database</h3>
                    </a>
                    <div className="right menu">
                        <a className="ui item">
                            <span className="Search">Search</span>
                        </a>
                        <a className="ui item">
                            Intern Form
                        </a>
                        <a className="ui item">
                            Alumni Form
                        </a>
                        <a id="login" className="ui item">
                            Log In
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}




export default Navbar;
