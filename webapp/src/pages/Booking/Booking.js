import "./Booking.css";
import profile from "./image/Nova.png";
import user from "./image/user.png";
import email from "./image/email.png";
import location from "./image/location.png";
import contact from "./image/contact.png";
import male from "./image/male.jpg";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function Booking() {
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
                         <input type="text" placeholder="User Name" className="name"/>
                       </div>
                       <div className="second-input">
                         <img src={contact} alt="email" className="email"/>
                         <input type="text" placeholder="Contact no." className="name"/>
                        </div>
                         <div className="second-input">
                          <img src={email} alt="email" className="email"/>
                          <input type="text" placeholder="email" className="name"/>
                         </div>
                        
                        <div className="second-input">
                         <img src={location} alt="email" className="email"/>
                         <input type="text" placeholder="Address" className="name"/>
                        </div>

                        <div className="second-input">
                         <img src={male} alt="email" className="email"/>
                         <input type="text" placeholder="Gender" className="name"/>
                        </div>
                        
                        <div className="login-button">
                          <button>Submit</button>
                        </div>
         
                    </div>
                    <Footer/>
           </div>
          
       </div>
       
    </div>
    <Footer/>
    </div>
    
  );
}

export default Booking;