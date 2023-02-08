import axios from "axios";

const BOOK_BASE_URL = "http://localhost:8080/book"

class BookService {
    getBooksByEmail(email){
        return axios.get(BOOK_BASE_URL + '?email=' + email);
    }
}

export default new BookService();