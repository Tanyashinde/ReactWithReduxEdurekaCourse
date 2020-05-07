import React from 'react';


const Footer=(props) =>{
    return (
        <React.Fragment>
          <hr/>
          <center>&copy;Edureka {props.yeardata}</center>
        </React.Fragment>
      );
}

export default Footer;