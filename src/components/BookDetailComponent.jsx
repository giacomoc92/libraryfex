import React, { Component } from 'react'
import BookService from '../service/BookService';

export default class BookDetailComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            book: {}
        }
    }

    componentDidMount(){
        BookService.getBookById(this.state.id).then((res) => {
            this.setState({ book: res.data});
        });
    }

  render() {
    return (
      <div>
        <h2 className='text-center'>Dettagli: {this.state.book.title}</h2>
        <table className='table table-striped table-bordered'>
            <thead></thead>
            <tbody>
                <tr>
                    <td>Titolo: </td><td>{this.state.book.title}</td>
                </tr>
                <tr>
                    <td>Autore: </td><td>{this.state.book.author}</td>
                </tr>
                <tr>
                    <td>ISBN: </td><td>{this.state.book.isbn}</td>
                </tr>
                <tr>
                    <td>Trama: </td><td>{this.state.book.plot}</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}
