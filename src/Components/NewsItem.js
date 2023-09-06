import React, { Component } from 'react'
import './NewsItem.css'
import logo from './logo.png'
export default class NewsItem extends Component{
    render(){
        return(

            <div className="card">
                <div className="imgcontain">
                <img src={this.props.imgurl?this.props.imgurl:logo} alt="" />
                </div>
                <div className="container">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <p>By {this.props.author?this.props.author:"Unknown"} on {this.props.published?this.props.published:""}</p>
                    <div>
                    <a className='readMoreBtn' href={this.props.url} target='_blank' rel="noopener noreferrer">Read More</a>
                    </div>
                </div>
            </div>
           
        );
    }
}