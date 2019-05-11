const TOKEN_KEY = 'accessToken'; 

export default {
    //checks local storage for authenticated token
    isAuthenticated: function() {
        const token = localStorage.getItem(TOKEN_KEY);
        return token && token !== null;
    },
    // sets the token in local storage
    setToken: function(token){
        localStorage.setItem(TOKEN_KEY, token);
    },
    // duh it deletes a token from local storage
    destroyToken: function(){
        localStorage.removeItem(TOKEN_KEY);
    },
    //gets token from localstorage 
    getToken: function(){
        return localStorage.getItem(TOKEN_KEY)
    }
}

