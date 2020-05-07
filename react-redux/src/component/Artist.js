import React,{Component} from 'react';
import ArtistList from './ArtistList';


const url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

class Artist extends Component{

    constructor(props){
        super(props)

        this.state={
            artist: ''
        }
    }
    render(){
        return(
            <React.Fragment>
                 <h1>Artists</h1>
                 <ArtistList datalist={this.state.artist}/>
            </React.Fragment>

           
        )
    }
    componentDidMount(){
        fetch(url,
            {Method:'GET'})
        .then((res)=> res.json())
        .then((data) =>{
            console.log(data)
        })
    }
}

export default Artist;