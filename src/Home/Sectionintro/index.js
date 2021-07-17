import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Icon from '../../components/Icon';
import LayersIcon from '@material-ui/icons/Layers';
import SignalWifi4BarIcon from '@material-ui/icons/SignalWifi4Bar';
import CodeIcon from '@material-ui/icons/Code';
import {Title, Body, Subtitle} from '../../components/Text';
import styles from './styles';

const SectionIntro = () => {
    const classes = styles();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        buscarDadosBanco();

    }, []);

    const buscarDadosBanco = () => {};

    return(
        <Container maxWidth='lg'>
            <Grid container justify="center" alignItems="center">
                <Grid item md={6}>   
                <Title 
                    text="Build accessible React apps with speed" 
                    style={{ textAling:"center" }}
                />
                <Body text="Build a beautiful, modern website with flexible, fully customizable,
                atomic Material UI components." 
                style={{textAling:"center", color:'#718096'}}
                 />
                </Grid>
            </Grid>   

            <Grid container justify="center" spacing={8}>
                <Grid item md={3}>
                    <Icon component={<LayersIcon className={classes.icon}/>} />
                    <Subtitle text="Built for developers"/>
                    <Body text="TheFront is built to make your life easier. Variables, build tooling,
                    documentation, and reusable components." 
                    style={{color:'#718096'}} />
                </Grid>
                <Grid item md={3}>
                <Icon component={<SignalWifi4BarIcon className={classes.icon}/>} />
                <Subtitle text="Designed to be modern"/>
                <Body text="Designed with the latest design trends in mind. TheFront feels modern,
                 minimal, and beautiful."
                style={{color:'#718096'}} />
                </Grid>
                <Grid item md={3}>
                <Icon component={<CodeIcon className={classes.icon}/>} />
                <Subtitle text="Documentation for everything"/>
                <Body text="We've written extensive documentation for components and tools,
                 so you never have to reverse engineer anything." 
                 style={{color:'#718096'}} />
                </Grid>
            </Grid>
        </Container>

      
    );
};

export default SectionIntro;