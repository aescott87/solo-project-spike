import React, { Component } from 'react';
import '../../App/App.css';
//import router
import { withRouter } from 'react-router-dom';
//import component
import Header from '../../Header/Header';
//import MUI elements
import Panel from 'muicss/lib/react/panel';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


class SearchList extends Component {
    render() {
        return (
            <>
                <Header />
                <h2>Here's what we found...</h2>
                <Container className="store-info">
                    <Row>
                        <Col md="3"></Col>
                        <Col md="6">
                            <Panel className="retailer">
                                <Tabs defaultSelectedIndex={1}>
                                    <Tab value="pane-1" label="Name/Website">
                                        <p><b>Name:</b> Torrid</p>
                                        <a href="https://www.torrid.com/">Shop Torrid</a>
                                    </Tab>
                                    <Tab value="pane-2" label="Details" className="details">
                                        <p><b>Sizes Offered:</b></p>
                                        <ul className="size-list">
                                            <li><span>Plus Sizes</span></li>
                                            <li><span>X-Short Inseam</span></li>
                                            <li><span>Short Inseam</span></li>
                                            <li><span>Long Inseam</span></li>
                                            <li><span>X-Long Inseam</span></li>
                                        </ul>
                                        <p><b>Where You Can Shop:</b></p>
                                        <ul className="shop-list">
                                            <li><span>In Stores</span></li>
                                            <li><span>Online</span></li>
                                        </ul>
                                    </Tab>
                                </Tabs>
                            </Panel>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default withRouter(SearchList);