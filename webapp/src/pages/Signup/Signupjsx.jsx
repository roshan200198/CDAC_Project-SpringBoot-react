import React, { Component } from 'react';
//import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./Signup.css";
//import Recommended from "../../components/Recommended/Recommended";
import SignupService from '../../Services/SignupService';
//import axios from 'axios';

class Signupjsx extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            name: '',
            email: '',
            phone: '',
            dob: '',
            password: ''
        }
        
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.saveSignup = this.saveSignup.bind(this);
    }

    

    saveSignup = (e) => {
        e.preventDefault();
        let signup = {name: this.state.name, email: this.state.email, 
            phone: this.state.phone, dob: this.state.dob, 
            password: this.state.password};

            console.log('Signup =>' , signup);

            SignupService.createSignup(signup).then(res =>{
                //this.props.history.push("/campdetail");
                alert("Signup successfull!");
            })
    }
    
    getSignup = () => {
        
        SignupService.getSignup().then(res =>{
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

    changeDobHandler = (event) => {
        this.setState({dob: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    componentDidMount(){
        this.getSignup();

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
                  <h2>Sign up</h2>
      
                    <input type="text" className="field" placeholder="Your Name"
                      value={this.state.name} 
                      onChange={this.changeNameHandler} 
                    />
      
                    <input type="text" className="field" placeholder="Your Email"
                      value={this.state.email} 
                      onChange={this.changeEmailHandler} 
                    />
      
                    <input type="text" className="field" placeholder="Contact Number" 
                      value={this.state.phone} 
                      onChange={this.changePhoneHandler} 
                    />

                    <input type="text" className="field" placeholder="DD/MM/YYYY" 
                      value={this.state.dob} 
                      onChange={this.changeDobHandler} 
                    />

                    <input type="password" className="field" placeholder="Enter password" 
                      value={this.state.password} 
                      onChange={this.changePasswordHandler} 
                    />
                    
                    <input type="password" className="field" placeholder="Confirm password" 
                      value={this.state.confpassword} 
                      onChange={this.changeConfpasswordHandler} 
                    />
                  
                  
                  <button className="btn" 
                        onClick={this.saveSignup} 
                        >Send</button>
                </div>
              </div>
            </div>
      
            <Footer />
          </div>
        );
    }
}

export default Signupjsx;