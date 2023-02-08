import React, { Component } from 'react';

class LandingPageComponent extends Component {
    login(){
        this.props.history.push(`/accounts`);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.login()} className="btn btn-info">Login</button>
            </div>
        );
    }
}

export default LandingPageComponent;