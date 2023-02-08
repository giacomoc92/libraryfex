import React, { Component } from 'react';
import BookService from '../service/BookService';

class ListBooksComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: this.props.match.params.email,
            books: []
        }
    }

    getBook(id){
        this.props.history.push(`/booksDetail/${id}`)
    }

    componentDidMount(){
        BookService.getBooksByEmail(this.state.email).then((res) => {
          this.setState({ books: res.data});
        });
      }

    render() {
        return (
            <div>
                <h2 className='text-center'>List books</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Autore</th>
                                <th>Titolo</th>
                                <th>Dettagli</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                              this.state.books.map(
                                book => 
                                <tr key={book.id}>
                                  <td>{book.title}</td>
                                  <td>{book.author}</td>
                                  <td>
                                    <button
                                    onClick={() => this.getBook(book.id)}
                                    className="btn btn-info">More details</button></td>
                                </tr>
                              )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBooksComponent;