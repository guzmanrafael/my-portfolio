
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
    paperContact: {
        display: "flex",
        justifyContent: "space-around",
    },
    contacts: {
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

export const Contact = () => {
    const classes = useStyle();

    return (
        <motion.div initial='out' animate='in' exit='out' variants={animationOne}
            transition={transition}>
            <div className={classes.root}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Paper className={classes.paper}>
                            <Typography align="center" className={classes.title}>
                                Contacto
                            </Typography>
                            <Grid container spacing={2} className={classes.paperContact}>
                                <Grid item xs={12} sm={4} md={4}>
                                    <a href="https://github.com/guzmanrafael" target="_blank" rel="noopener noreferrer">
                                        <Paper className={classes.contacts}>
                                            <Icon>
                                                <img src="https://cdn.svgporn.com/logos/github-icon.svg" className={classes.iconSvg} alt="Node" />
                                            </Icon>
                                            <Typography align="center">
                                                GitHub
                                        </Typography>
                                        </Paper>
                                    </a>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <a href="https://www.linkedin.com/in/rafael-ivan-guzm%C3%A1n-ram%C3%ADrez-891318203/" target="_blank" rel="noopener noreferrer">
                                        <Paper className={classes.contacts}>
                                            <Icon>
                                                <img src="https://cdn.svgporn.com/logos/linkedin-icon.svg" className={classes.iconSvg} alt="Node" />
                                            </Icon>
                                            <Typography align="center">
                                                Linkedin
                                        </Typography>
                                        </Paper>
                                    </a>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <a href="mailto:rafael.guzman1609@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <Paper className={classes.contacts}>
                                            <Icon>
                                                <img src="https://cdn.svgporn.com/logos/google-gmail.svg" className={classes.iconSvg} alt="Node" />
                                            </Icon>
                                            <Typography align="center">
                                                Email
                                        </Typography>
                                        </Paper>
                                    </a>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </motion.div>
    );
}