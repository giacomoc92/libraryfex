import axios from "axios";

const BOOK_BASE_URL = "http://localhost:8080/book"


class BookService {
    getBooksByEmail(email){
        return axios.get(BOOK_BASE_URL + '?email=' + email);
    }

    getBookById(id){
        return axios.get(BOOK_BASE_URL + '-detail?id=' + id)
    }
}

export default new BookService();