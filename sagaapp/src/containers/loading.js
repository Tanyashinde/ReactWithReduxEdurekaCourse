import React from 'react';
import {connect} from 'react-redux';
//import img from '../loading.gif';

let Loading = ({loading}) => (
    loading ?
    <div style={{textAlign:'center'}}>
        <h3>Loading</h3>
    </div>:null
)

const mapStateToProps = (state) => ({loading: state.movies.loading})

export default connect(mapStateToProps,null)(Loading)
