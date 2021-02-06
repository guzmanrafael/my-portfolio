import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { theme } from '../themeConfig';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';
import { proyectsData } from '../data/data';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        position: "relative",
        top: "8rem",
        margin: "0rem 3rem",
        [theme.breakpoints.down("xs")]: {
            top: "6rem",
            margin: "0rem 2rem",
        },
    },
    proyectItem: {
        cursor: "pointer",
        height: "250px",
        backgroundColor: "#303030",
        borderRadius: "10px",
        fontSize: "5px",
        color: "white",
        "&:hover": {
            fontSize: "10px",
            background: "#282828",
            WebkitTransition: "background-color 0.2s ease-out",
            MozTransition: "background-color 0.2s ease-out",
            OTransition: "background-color 0.2s ease-out",
            transition: "background-color 0.2s ease-out"
        },
    },
    barraItem: {
        width: "100%",
        height: "15%",
        backgroundColor: "#424242",
        display: "flex",
        alignItems: "center",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        paddingLeft: "15px"
    },
    redCircle: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        margin: "0rem 1rem",
        transition: "0.2s",
        background: "linear-gradient(90deg, #e43a15 0%, #e65245 100%)"
    },
    yellowCircle: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        margin: "0rem 1rem",
        transition: "0.2s",
        background: "linear-gradient(270deg, #f9d423 0%, #ff4e50 100%)"
    },
    greenCircle: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        margin: "0rem 1rem",
        transition: "0.2s",
        background: "linear-gradient(270deg, #11998e 0%, #38ef7d 100%)"
    },
    logo: {
        position: "absolute",
        objectFit: "contain",
        [theme.breakpoints.only("xs")]: {
            width: "90%",
            left: "20%",
        },
        [theme.breakpoints.only("sm")]: {
            width: "80%",
            left: "30%",
        },
        [theme.breakpoints.only("md")]: {
            width: "80%",
            left: "20%",
        },
        [theme.breakpoints.only("lg")]: {
            width: "90%",
            left: "20%",
        },
        [theme.breakpoints.only("xl")]: {
            width: "90%",
            left: "20%",
        },
    },
    logoMobile: {
        width: "60%",
        position: "absolute",
        left: "35%",
        objectFit: "contain"
    },
    container: {
        display: "flex",
        width: "100%",
        height: "95%",
        position: "relative"
    },
    infoItem: {
        width: "50%",
        height: "95%",
        padding: "35px",
        paddingBottom: 0
    },
    tittle: {
        [theme.breakpoints.only("xs")]: {
            fontSize: "1rem"
        },
        [theme.breakpoints.only("sm")]: {
            fontSize: "1rem"
        },
        [theme.breakpoints.only("md")]: {
            fontSize: "1rem"
        },
        [theme.breakpoints.only("lg")]: {
            fontSize: "1rem"
        },
        [theme.breakpoints.only("xl")]: {
            fontSize: "1rem"
        },
    }
});

export const Proyect = () => {
    const classes = useStyle();

    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={animationOne}
            transition={transition}
        >
            <div className={classes.root}>
                <Grid container spacing={4}>

                    {proyectsData.map((proyect) => (
                        <Grid item xs={12} sm={6} md={4} key={proyect.id}>
                            <NavLink to={{
                                pathname: '/proyecttype',
                                state: proyect
                            }}>
                                <div className={classes.proyectItem}>
                                    <div className={classes.barraItem}>
                                        <div className={classes.redCircle}></div>
                                        <div className={classes.yellowCircle}></div>
                                        <div className={classes.greenCircle}></div>
                                    </div>
                                    <Grid container spacing={0} className={classes.container}>

                                        <Grid item xs={5} sm={5} md={5} className={classes.infoItem}>
                                            <Typography className={classes.tittle} align="center">
                                                {proyect.name}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={7} sm={7} md={7}>
                                            {proyect.type === "mobile" ? (
                                                <img alt="logo" src={proyect.main_photo} className={classes.logoMobile} />
                                            ) : (
                                                    <img alt="logo" src={proyect.main_photo} className={classes.logo} />
                                                )}
                                        </Grid>

                                    </Grid>

                                </div>
                            </NavLink>
                        </Grid>
                    ))}

                </Grid>
            </div>
        </motion.div>
    )
};

