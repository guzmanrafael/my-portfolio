
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Icon, Paper, Typography } from "@material-ui/core";
import { theme } from "../themeConfig";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        position: "relative",
        top: "6rem",
        margin: "0rem 3rem",
        [theme.breakpoints.down("xs")]: {
            top: "4rem",
            margin: "0rem 2rem",
        },

    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'left',
        background: "transparent",
        boxShadow: 'none',
        marginTop: "2rem",
    },
    title: {
        color: "#F0F0F0",
        fontSize: "1.4rem"
    },
    aboutMe: {
        color: "#F0F0F0",
        fontSize: "1.1rem",
        marginTop: "1rem",
        lineHeight: "200%"
    },
    paperSkills: {
        display: "flex",
        justifyContent: "space-around",
    },
    skills: {
        padding: theme.spacing(5),
        background: "#303030",
        marginTop: "1rem",
        textAlign: "center",
        color: "white",
        "&:hover": {
            color: "black",
            background: "#282828"
        },
    },
    iconSvg: {
        [theme.breakpoints.only("xs")]: {
            height: "100px",
            width: "100px",
        },
        [theme.breakpoints.only("sm")]: {
            height: "80px",
            width: "80px",
        },
        [theme.breakpoints.only("md")]: {
            height: "90px",
            width: "90px",
        },
        [theme.breakpoints.only("lg")]: {
            height: "100px",
            width: "100px",
        },
        [theme.breakpoints.only("xl")]: {
            height: "100px",
            width: "100px",
        },
    }
});

export const About = () => {
    const classes = useStyle();

    return (
        <motion.div initial='out' animate='in' exit='out' variants={animationOne}
            transition={transition}>
            <div className={classes.root}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={5}>
                        <Paper className={classes.paper}>
                            <Typography align="left" className={classes.title}>
                                ¿Quien Soy?
                            </Typography>
                            <Typography align="justify" className={classes.aboutMe}>
                                Mi nombre es Rafael Ivan Guzmán Ramírez, soy de México, y actualmente estoy estudiando Ingeniería en Software en el Instituto Tecnológico de Sonora. Me gusta y me apasiona el Desarrollo Web Backend &     Frontend.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <Paper className={classes.paper}>
                            <Typography align="center" className={classes.title}>
                                Mis Habilidades
                            </Typography>
                            <Grid container spacing={2} className={classes.paperSkills}>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Paper className={classes.skills}>
                                        <Icon>
                                            <img src="https://cdn.svgporn.com/logos/nodejs.svg" className={classes.iconSvg} alt="Node" />
                                        </Icon>
                                        <Typography align="center">
                                            NODE
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Paper className={classes.skills}>
                                        <Icon>
                                            <img src="https://cdn.svgporn.com/logos/express.svg" className={classes.iconSvg} alt="Node" />
                                        </Icon>
                                        <Typography align="center">
                                            EXPRESS
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Paper className={classes.skills}>
                                        <Icon>
                                            <img src="https://cdn.svgporn.com/logos/react.svg" className={classes.iconSvg} alt="Node" />
                                        </Icon>
                                        <Typography align="center">
                                            REACT
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Paper className={classes.skills}>
                                        <Icon>
                                            <img src="https://cdn.svgporn.com/logos/mongodb.svg" className={classes.iconSvg} alt="Node" />
                                        </Icon>
                                        <Typography align="center">
                                            MONGODB
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Paper className={classes.skills}>
                                        <Icon>
                                            <img src="https://cdn.svgporn.com/logos/firebase.svg" className={classes.iconSvg} alt="Node" />
                                        </Icon>
                                        <Typography align="center">
                                            FIREBASE
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <Paper className={classes.skills}>
                                        <Icon>
                                            <img src="https://cdn.svgporn.com/logos/git-icon.svg" className={classes.iconSvg} alt="Node" />
                                        </Icon>
                                        <Typography align="center">
                                            GIT
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Paper className={classes.skills}>
                                        <Icon>
                                            <img src="https://cdn.svgporn.com/logos/material-ui.svg" className={classes.iconSvg} alt="Node" />
                                        </Icon>
                                        <Typography align="center">
                                            MATERIAL UI
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4}>
                                    <Paper className={classes.skills}>
                                        <Icon>
                                            <img src="https://cdn.svgporn.com/logos/html-5.svg" className={classes.iconSvg} alt="Node" />
                                        </Icon>
                                        <Typography align="center">
                                            HTML
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <Paper className={classes.skills}>
                                        <Icon>
                                            <img src="https://cdn.svgporn.com/logos/css-3.svg" className={classes.iconSvg} alt="Node" />
                                        </Icon>
                                        <Typography align="center">
                                            CSS
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </motion.div>
    );
}