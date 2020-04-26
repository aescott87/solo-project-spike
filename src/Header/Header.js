import React, { Component } from 'react';
import '../App/App.css';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';

class Header extends Component {
    render() {
        return (
            <>
                <Appbar className="nav">
                    <div className="nav-buttons">
                    <Button color="accent">Add a Retailer</Button>
                    <Button color="accent">Log Out</Button>
                    </div>
                </Appbar>
                <header className="App-header">
                    <h1>ThreadBare</h1>
                </header>
            </>
        )
    }
}

export default Header;