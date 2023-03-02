import axios from "axios";

const CONTACT_API_BASE_URL = "http://localhost:8082/contactus"
const CONTACT_GETAPI_BASE_URL = "http://localhost:8082/viewcontact"

class ContactService {

    getContact(){
        return axios.get(CONTACT_GETAPI_BASE_URL, {
            headers: {
              "access-control-allow-origin": "*",
            },
          }); 
        



    }


    // createContact(contact) {
    //     return axios.post(CONTACT_API_BASE_URL, contact);

    // }

    createContact(contact) {
        return axios.post(CONTACT_API_BASE_URL, contact, {
          headers: {
            "access-control-allow-origin": "*",
          },
        });
      }
}

export default new ContactService;