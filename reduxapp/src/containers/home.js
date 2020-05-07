import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {articleNews} from '../actions';
import {bindActionCreators} from 'redux';
import ArticalDisplay from '../component/ArticalDisplay';

class Home extends Component{
    componentDidMount(){
        this.props.articleNews()
    }

    render(){
        return(
            <Fragment>
                <ArticalDisplay adata={this.props.myarticles.articledata}/>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        myarticles: state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({articleNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);