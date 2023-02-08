import React, { Component } from 'react';
import AccountService from '../service/AccountService';

class ListAccountsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accounts: []
        }
        this.listBooks = this.listBooks.bind(this);
    }

    listBooks(email){
        this.props.history.push(`/books/${email}`)
    }

    componentDidMount(){
      AccountService.getAccounts().then((res) => {
        this.setState({ accounts: res.data});
      });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Scegli il tuo indirizzo email</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Indirizzo email</th>
                                <th>Login</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                              this.state.accounts.map(
                                account => 
                                <tr key={account.id}>
                                  <td>{account.email}</td>
                                  <td>
                                    <button onClick={() => this.listBooks(account.email)}
                                    className="btn btn-info">Select</button></td>
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

export default ListAccountsComponent;