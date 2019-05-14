import axios from "axios";
import Auth from "./Auth";

const headers = () => {
    const options = {};
    //once autheticated will create the JSON Header for API calls
    if (Auth.isAuthenticated()) {
        options["headers"] = {
            "Authorization" : `Bearer ${Auth.getToken()}`
        }
    }
    return options;
}

export default {
    login: function(loginInfo) {
        // send user login info to API
        return axios.post("/api/auth/login", loginInfo, headers());
    },
    signup: function(signupInfo) {
        // send user signup info to API
        return axios.post("/api/auth/signup", signupInfo, headers());
    }
    //Add Delete function for friends and or account
    //Add retrive friends list API from DB, include ID and the axios header
    //Add retrive likes list API, include ID and the axios header

};