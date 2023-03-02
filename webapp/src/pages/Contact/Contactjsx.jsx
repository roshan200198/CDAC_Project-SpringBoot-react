import React, { Component } from 'react';
//import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
//import "./Contact.css";
import "./Contact.css";
//import Recommended from "../../components/Recommended/Recommended";
import ContactjsxService from '../../Services/ContactjsxService';
//import axios from 'axios';

class Contactjsx extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
        
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeMessageHandler = this.changeMessageHandler.bind(this);

        this.saveContact = this.saveContact.bind(this);
    }

    

    saveContact = (e) => {
        e.preventDefault();
        let contact = {name: this.state.name, email: this.state.email, 
            phone: this.state.phone, message: this.state.message};
            console.log('Contact =>' + JSON.stringify(contact));

            ContactjsxService.createContact(contact).then(res =>{
                //this.props.history.push("/campdetail");
                alert("Data save successfully!");
            })
    }
    
    getContact = () => {
        
        ContactjsxService.getContact().then(res =>{
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

    changeMessageHandler = (event) => {
        this.setState({message: event.target.value});
    }

    componentDidMount(){
        this.getContact();

    }

    render() {
        console.log("Contact data get", this.props);
        return (
            <div>
            <NavBar />
            
            <div class="container" style={{marginTop: "60px"}}>
              <div className="contact-box">
                <div className="left" />
                <div className="right">
                  <h2>Contact Us</h2>
      
                  <input type="text" className="field" placeholder="Your Name"
                      value={this.state.name} 
                      onChange={this.changeNameHandler} />
      
                  <input type="text" className="field" placeholder="Your Email"
                      value={this.state.email} 
                      onChange={this.changeEmailHandler} />
      
                  <input type="text" className="field" placeholder="Contact Number" 
                      value={this.state.phone} 
                      onChange={this.changePhoneHandler} />
                  <textarea
                    placeholder="Please leave message"
                    className="field"
                    //defaultValue={""}
                    value={this.state.message} 
                    onChange={this.changeMessageHandler}
                  />
                  <button className="btn" onClick={this.saveContact} >Send</button>
                </div>
              </div>
            </div>
      
            <Footer />
          </div>
        );
    }
}

export default Contactjsx;