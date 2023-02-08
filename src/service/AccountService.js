import axios from "axios";

const LOGIN_BASE_URL = "http://localhost:8080/login"

class AccountService {
    getAccounts(){
        return axios.get(LOGIN_BASE_URL);
    }
}

export default new AccountService();