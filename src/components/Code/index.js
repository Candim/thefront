import React from 'react';
import styles from './styles';

const Code = () =>{

    const classes = styles();
    return(
        <div className={classes.board}>
            <code className={classes.whiteText}> {'> $ npm install<code'}</code>
            <br/>
            <code className={classes.greenText}> {'// Everything installed!'} </code>
            <br/> 
            <code className={classes.whiteText}> {'> $ npm start'}</code>
            <br/>    
            <code className={classes.greenText}> {'// LiveReload started. Opening localhost:3000'} </code>
            <br/>
        </div>
    );

}

export default Code;