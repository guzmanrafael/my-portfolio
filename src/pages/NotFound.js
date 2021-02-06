import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { animationOne, transition } from '../animations';
import { theme } from '../themeConfig';

const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        position: "relative",
        top: "10rem",
        margin: "0rem 3rem",
        textAlign: 'center',
        [theme.breakpoints.down("xs")]: {
            top: "8rem",
            margin: "0rem 2rem",
        },
    },
    NotFound: {
        fontSize: "3rem",
        color: "#F0F0F0",
    },
    button: {
        [theme.breakpoints.down("xs")]: {
            top: "1rem",
            fontSize: "1rem",
        },
        [theme.breakpoints.up("lg")]: {
            top: "1.5rem",
            fontSize: "1rem",
        },
    },
});

export const NotFound = () => {
    const classes = useStyle();

    return (
        <motion.div initial='out' animate='in' exit='out' variants={animationOne}
            transition={transition}>
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography className={classes.NotFound} align="center">
                            404 - Not Found!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <NavLink to="/">
                            <Button variant="outlined" color="primary" className={classes.button}>
                                Go Home
                            </Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </div>
        </motion.div>
    )
};

