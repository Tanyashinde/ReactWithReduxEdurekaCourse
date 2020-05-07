import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Courses from './Courses';
import Users from './Users';
import EnquiryForm from './EnquiryForm';

const Routing=()=>{
    return(
        <BrowserRouter>
        <Header headerdata="React is used for Front end web app devlopment" />
        <Route exact path="/" component={Home}/>
        <Route path="/Courses" component={Courses}/>
        <Route path="/Users" component={Users}/>
        <Route path="/EnquiryForm" component={EnquiryForm}/>
        <Footer yeardata="2020" />
        </BrowserRouter>
    )
}

export default Routing;