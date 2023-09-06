import React, { Component } from 'react'
import loading from './Spinner.gif'
import './Spinner.css'
export default class Spinner extends Component{
    render(){
        return(<div className='rootLoader'>
            <img  className="SpinnerImg" src={loading} alt="Loading" />
        </div> 
        );
    }
}