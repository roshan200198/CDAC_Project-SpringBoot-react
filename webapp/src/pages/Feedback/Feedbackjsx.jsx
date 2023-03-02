import React, { Component } from 'react';
//import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
//import "./Contact.css";
import "./Feedback.css"
//import Recommended from "../../components/Recommended/Recommended";
import FeedbackService from '../../Services/FeedbackService';
//import axios from 'axios';

class Feedbackjsx extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            name: '',
            email: '',
            phone: '',
            comment: ''
        }
        
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeCommentHandler = this.changeCommentHandler.bind(this);

        this.saveFeedback = this.saveFeedback.bind(this);
    }

    

    saveFeedback = (e) => {
        e.preventDefault();
        let feedback = {name: this.state.name, email: this.state.email, 
            phone: this.state.phone, comment: this.state.comment};
            
            console.log('Feedback =>' + JSON.stringify(feedback));

            FeedbackService.createFeedback(feedback).then(res =>{
                //this.props.history.push("/campdetail");
                alert("Data save successfully!");
            })
    }
    
    getFeedback = () => {
        
        FeedbackService.getFeedback().then(res =>{
                //this.props.history.push("/campdetail");
                console.log("Data get", res);
            })
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changePhoneHandler = (event) => {
        this.setState({phone: event.target.value});
    }

    changeCommentHandler = (event) => {
        this.setState({comment: event.target.value});
    }

    componentDidMount(){
        this.getFeedback();

    }

    render() {
        // console.log("xyzzz!!", this.props);
        return (
            <div>
            <NavBar />
            
            <div class="container" style={{marginTop: "60px"}}>
              <div className="contact-box">
                <div className="left" />
                <div className="right">
                  <h2>Feedback</h2>
      
                  <input type="text" className="field" placeholder="Your Name"
                      value={this.state.name} 
                      onChange={this.changeNameHandler} />
      
                  <input type="text" className="field" placeholder="Your Email"
                      value={this.state.email} 
                      onChange={this.changeEmailHandler} />
      
                  <input type="text" className="field" placeholder="Contact Number" 
                      value={this.state.phone} 
                      onChange={this.changePhoneHandler }/>
                  <textarea
                    placeholder="Please leave your feedback "
                    className="field"
                    //defaultValue={""}
                    value={this.state.comment} 
                    onChange={this.changeCommentHandler}
                  />
                  <button className="btn" onClick={this.saveFeedback} > Submit</button>
                </div>
              </div>
            </div>
      
            <Footer />
          </div>
        );
    }
}

export default Feedbackjsx;