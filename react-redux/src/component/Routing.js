import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Artist from './Artist';
import Home from './Home';
import Movies from './Movies';
import Header from './Header';
import Footer from './Footer';
import Moviedetails from './Moviedetails';
import Courses from './Courses';
import EnquireForm from './EnquireForm';

const Routing=()=>{
    return(
        <BrowserRouter>
        <Header headerdata="React is used for Front end web app devlopment" />
        <Route exact path="/" component={Home}/>
        <Route exact path="/Movies" component={Movies}/>
        <Route path="/Movies/:id" component={Moviedetails}/>
        <Route path="/Artist" component={Artist}/>
        <Route path="/Courses" component={Courses}/>
        <Route path="/EnquireForm" component={EnquireForm}/>
        <Footer yeardata="2020" />
        </BrowserRouter>
    )
}

export default Routing;