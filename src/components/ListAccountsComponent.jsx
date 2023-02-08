import React, { Component } from 'react';
import AccountService from '../service/AccountService';

class ListAccountsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accounts: []
        }

    }

    componentDidMount(){
      AccountService.getAccounts().then((res) => {
        this.setState({ accounts: res.data});
      });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Login</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Indirizzo email</th>
                                <th>login</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                              this.state.accounts.map(
                                account => 
                                <tr key={account.id}>
                                  <td>{account.email}</td>
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