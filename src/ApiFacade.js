
import endpoint from "./url.js"

const URL = endpoint;

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

class ApiFacade {

    fetchDataM7Cycling = () => {
        const options = this.makeOptions("GET", true); //True add's the token
        return fetch(URL + "m7/cycling", options).then(handleHttpErrors);
    }

    login = (user, pass) => {
        const options = this.makeOptions("POST", true, { userName: user, userPassword: pass });
        return fetch(URL + "login/", options, true)
          .then(handleHttpErrors)
          .then(res => { this.setToken(res.token); console.log(res.token); })
          
      }

    makeOptions(method, addToken, body) {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && this.loggedIn()) {
            opts.headers["x-access-token"] = this.getToken();
          }

        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    setToken = (token) => {
        localStorage.setItem('jwtToken', token)
      }
      getToken = () => {
        return localStorage.getItem('jwtToken')
      }

      loggedIn = () => {
        const loggedIn = this.getToken() != null;
        return loggedIn;
      }
      logout = () => {
        localStorage.removeItem("jwtToken");
      }


}
const facade = new ApiFacade();
export default facade;