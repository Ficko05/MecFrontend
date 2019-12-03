
import endpoint from "./url.js"

const URL = endpoint;

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

class ApiFacade {

    fetchData = () => {
        const options = this.makeOptions("GET", true); //True add's the token
        return fetch(URL + "m7/all", options).then(handleHttpErrors);
    }

    makeOptions(method, addToken, body) {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
}
const facade = new ApiFacade();
export default facade;