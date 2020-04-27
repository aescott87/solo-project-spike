import React, { Component } from 'react';
import '../../App/App.css';
import { withRouter } from 'react-router-dom';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import Divider from 'muicss/lib/react/divider';
import Button from 'muicss/lib/react/button';

class Home extends Component {

    handlePageChange = () => {
        this.props.history.push('/list');
    }

    render() {
        return (
            <>
            <Header />
            <h2>Search our list of retailers to find brands that will fit you perfectly.</h2>
            <h3>Want to see the full list of retailers? You can find that here.</h3>
            <Divider />
            <SearchForm />
            <Button onClick={this.handlePageChange} variant="raised">Search</Button>
            </>
        )
    }
}

export default withRouter(Home);
