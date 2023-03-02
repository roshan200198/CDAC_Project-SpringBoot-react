import React, { Component } from 'react'
import "./Booking.css";
import profile from "./image/Nova.png";
import user from "./image/user.png";
import email from "./image/email.png";
import location from "./image/location.png";
import contact from "./image/contact.png";
import male from "./image/male.jpg";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import BookingService from '../../Services/BookingService';

export default class Bookingjsx extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            name: '',
            email: '',
            phone: '',
            dob: '',
            gender: '',
            address: '',
            pickup: '',
            payment: ''
        }
        
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePickupHandler = this.changePickupHandler.bind(this);
        this.changePaymentHandler = this.changePaymentHandler.bind(this);

        this.saveBooking = this.saveBooking.bind(this);
    }

    

    saveBooking = (e) => {
        e.preventDefault();
        let booking = {name: this.state.name, email: this.state.email, 
            phone: this.state.phone, dob: this.state.dob, 
            gender: this.state.gender, address: this.state.address, 
            pickup: this.state.pickup, payment: this.state.payment};
            console.log('booking =>' + JSON.stringify(booking));

            BookingService.createBooking(booking).then(res =>{
                //this.props.history.push("/campdetail");
                alert("Data save successfully!");
            })
    }
    
    getBooking = () => {
        
        BookingService.getBooking().then(res =>{
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

    changeGenderHandler = (event) => {
        this.setState({gender: event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }

    changePickupHandler = (event) => {
        this.setState({pickup: event.target.value});
    }

    changePaymentHandler = (event) => {
        this.setState({payment: event.target.value});
    }

    

    componentDidMount(){
        this.getBooking();

    }


  render() {
    console.log("Booking data get ", this.props);
    return (
        <div>
        <NavBar/>
    <div className="main">
        
      <div className="sub-main">
          <div>
              <div className="imgs">
               <div className="container-image"> 
               <img src={profile} alt="profile" className="profile"/>
               </div>
              </div>
                    <div class="inq">
                       <h1>Booking form</h1>
                       <div>
                        <img src={user} alt="email" className="email"/>
                         <input type="text" placeholder="User Name" className="name"
                            value={this.state.name} 
                            onChange={this.changeNameHandler} />
                       </div>

                       <div className="second-input">
                          <img src={email} alt="email" className="email"/>
                          <input type="text" placeholder="email" className="name" 
                           value={this.state.email} 
                           onChange={this.changeEmailHandler} />
                         </div>

                       <div className="second-input">
                         <img src={contact} alt="email" className="email"/>
                         <input type="text" placeholder="Contact no." className="name" 
                          value={this.state.phone} 
                          onChange={this.changePhoneHandler} />
                        </div>

                        <div className="second-input">
                         <img 
                        //  alt="email"
                          className="email"/>
                         <input type="text" placeholder="Date of Birth" className="name" 
                           value={this.state.dob} 
                           onChange={this.changeDobHandler}/>
                        </div>

                        <div className="second-input">
                         <img src={male} alt="email" className="email"/>
                         <input type="text" placeholder="Gender" className="name"
                           value={this.state.gender} 
                           onChange={this.changeGenderHandler} />
                        </div>
                         
                        <div className="second-input">
                         <img src={location} alt="email" className="email"/>
                         <input type="text" placeholder="Address" className="name" 
                         value={this.state.address} 
                         onChange={this.changeAddressHandler}/>
                        </div>

                        <div className="second-input">
                         <img 
                        //  alt="email" 
                         className="email"/>
                         <input type="text" placeholder="Pickup Point" className="name"
                           value={this.state.pickup} 
                           onChange={this.changePickupHandler}/>
                        </div>

                        <div className="second-input">
                         <img src={male} alt="email" className="email"/>
                         <input type="text" placeholder="Payment Status" className="name"
                         value={this.state.payment} 
                         onChange={this.changePaymentHandler} />
                        </div>

                        
                        
                        <div className="login-button">
                          <button type='submit'
                            onClick={this.saveBooking} >Submit</button>
                        </div>
                       
                    </div>
                    {/* <Footer/> */}
           </div>
           
       </div>
       
    </div>
    <Footer/>
    </div>
    )
  }
}
