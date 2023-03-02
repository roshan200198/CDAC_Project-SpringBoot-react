import React, { Component } from 'react';

import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
//import Login from "./Login";
import SignupService from '../../Services/SignupService';
import profile from "./assets/Nova.png";
import user from "./assets/user.png";
import lock from "./assets/lock.png"
import { Link } from "react-router-dom";


class Loginjsx extends Component {

    constructor(props) {
        super(props) 

        this.state = {
           
            email: '',
            password: ''
        }
        
        
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
       this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveContact = this.saveContact.bind(this);
    }

    

    saveLogin = (e) => {
        e.preventDefault();
        let login = {email: this.state.email, 
            password: this.state.password};
            console.log('Login =>' + JSON.stringify(login));
    }

            // SignupService.createLogin(signup).then(res =>{
            //     //this.props.history.push("/campdetail");
            //     alert("Data save successfully!");
            // })
    
    
    getSignup = () => {
        
        SignupService.getSignup().then(res =>{
                //this.props.history.push("/campdetail");
                console.log("Data get", res);

            })
    }

    

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    // this.componentDidMount() {
    //     this.getSignup();
    // }


    render() {
        return (
            <div>
                <NavBar />
                <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>

              <h1 className="cool">Login Page</h1>

              <div>
                <img src={user} alt="email" className="email" />
                <input type="text" placeholder="Enter Email-ID" className="name" 
                    value={this.state.email}
                    onChange={this.changeEmailHandler}
                    />
              </div>

              <div className="second-input">
                <img src={lock} alt="email" className="email" />
                <input type="text" placeholder="Password" className="name" 
                    value={this.state.password}
                    onChange={this.changePasswordHandler}
                    />
              </div>

              <div className="login-button">
                <button type="submit" 
                onClick={this.saveLogin} 
                >login</button>
              </div>
              <p className="link">
              {/* <a href="#"> Forgot password ?</a> or <a href="#"> Sign up</a> */}
                <Link to="/forgetpassword">forget Password?</Link><br/> Don't have account?<Link to="/signup"> Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
                <Footer />
            </div>
        );
    }
}


export default Loginjsx;