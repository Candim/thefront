import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles';

const ButtonSecondary = ({title}) => {
    const classes = styles();
    return <Button variant="container" className={classes.button}>{title}</Button>;
};

export default ButtonSecondary;