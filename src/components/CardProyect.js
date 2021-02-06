import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { theme } from '../themeConfig';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';
import { useLocation } from 'react-router-dom'
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

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
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        background: "transparent",
        boxShadow: 'none',
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    },
    title: {
        fontSize: "2.2rem",
        color: "white",
    },
    description: {
        fontSize: "1.1rem",
        color: "white",
    },
    paperDescription:{
        padding: theme.spacing(3),
        background: "#303030",
        marginTop: "0.5rem",
        textAlign: "center",
        color: "white",
        "&:hover": {
            background: "#282828"
        },
    },
    technologies:{
        fontSize: "1rem",
        color:"white",
        marginTop: "1rem",
    },
    button:{
        marginTop: "1rem",
    }
});

export const CardProyect = () => {
    const classes = useStyle();
    let location = useLocation();

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

                    <Grid item xs={12} sm={12} md={6}>
                        <Paper className={classes.paper}>
                            <ReactImageGallery items={location.state.photos} showPlayButton={false} showThumbnails={false} />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <Paper className={classes.paper}>
                            <Typography align="center" className={classes.title}>
                                {location.state.name}
                            </Typography>
                            <Paper className={classes.paperDescription}>
                                <Typography align="justify" className={classes.description}>
                                    {location.state.description}
                                </Typography>
                            </Paper>
                            <Grid container spacing={0}>
                                {location.state.technologies.map((tecnology) => (
                                    <Grid item xs={6} sm={4} md={3} key={tecnology}>
                                        <Typography className={classes.technologies}>
                                            • {tecnology}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid container spacing={1}>
                                {location.state.github_link !== false &&
                                    <Grid item className={classes.button}>
                                        <Button variant="outlined" color="primary" href={location.state.github_link} target="_blank">
                                            Github
                                        </Button>
                                    </Grid>
                                }
                                {location.state.link !== false &&
                                    <Grid item className={classes.button}>
                                        <Button variant="outlined" color="primary" href={location.state.link} target="_blank">
                                            Ver sitio
                                        </Button>
                                    </Grid>
                                }
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        </motion.div>
    )
};

