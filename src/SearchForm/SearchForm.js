import React, { Component } from 'react';
import '../App/App.css';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Checkbox from 'muicss/lib/react/checkbox';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

class SearchForm extends Component {

    handlePageChange = () => {
        this.props.history.push('/list');
    }

    render() {
        return (
            <>
                <Container fluid={true}>
                    <Row>
                        <Form>
                            <Col md="4"></Col>
                            <Col md="2">
                                <h3>Search by Retailer:</h3>
                            </Col>
                            <Col md="1">
                                <Input />
                            </Col>
                            <Col md="5"></Col>
                        </Form>
                    </Row>
                    <Form>
                        <legend>Search by Size:</legend>
                        <Checkbox name="inputPlus" label="Plus Sizes (12-32)" />
                        <Checkbox name="inputPetite" label="Petite Sizes (00-0)" />
                        <Checkbox name="inputXShort" label="X-Short Inseam (28 in. or less)" />
                        <Checkbox name="inputShort" label="Short Inseam (28-30)" />
                        <Checkbox name="inputLong" label="Long Inseam (34-36)" />
                        <Checkbox name="inputXLong" label="X-Long Inseam (36+)" />
                    </Form>
                    <Button onClick={this.handlePageChange} variant="raised">Search</Button>
                </Container>
            </>
        )
    }
}

export default SearchForm;