import React, { Component } from 'react'
import logo from "./logo.png";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger.png";
import "./HamburgerNav.css"
export default class HamburgerNav extends Component{
    state ={
        presentState: false
    }
    handlehamburger= ()=>{
        if(this.state.presentState===true){
            this.setState({presentState:false});
        }
        else{
            this.setState({presentState: true});
        }
    }
    render(){
        return(<>
            {!this.state.presentState && <div className="Navcontainer">
                <div className="newsLogo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="hamIcon">
                     <button><img src ={Hamburger} alt = "logo" onClick={this.handlehamburger}/></button>
                </div>
                
                <div className="login">
                    <a href="/">Login</a>
                </div>
            </div>}
            {this.state.presentState && <div className="hamburgerContainer">
                <div className="hamContainerList">
                    <Link to="/business">Business</Link>
                    <Link to="/entertainment">Entertainment</Link>
                    <Link to="/general">General</Link>
                    <Link to="/health">Health</Link>
                    <Link to="/science">Science</Link>
                </div>
                
               <div className="hamIcon">
                     <button><img src ={Hamburger} alt = "logo" onClick={this.handlehamburger}/></button>
                </div>
            </div>}
        </>)
    }
}