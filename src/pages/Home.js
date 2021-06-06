import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { theme } from "../themeConfig";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import { NavLink } from "react-router-dom";
import myPhoto from "../img/myphoto.png";

const useStyle = makeStyles({
  middleText: {
    color: "#F0F0F0",
    margin: "1.5rem 0rem",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      top: "4rem",
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      top: "7rem",
      fontSize: "3.2rem",
    },
  },
  topText: {
    color: "#F0F0F0",
    [theme.breakpoints.down("xs")]: {
      top: "4rem",
      fontSize: "1.2rem",
    },
    [theme.breakpoints.up("lg")]: {
      top: "7rem",
      fontSize: "1.8rem",
    },
  },
  bottomText: {
    color: "#9F9F9A",
    marginBottom: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      top: "4rem",
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      top: "7rem",
      fontSize: "1.2rem",
    },
  },
  buttonAbout: {
    marginRight: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginRight: "0.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
  },
  buttonProyect: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
  },
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
    textAlign: "left",
    background: "transparent",
    boxShadow: "none",
  },
  box: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "3.5rem",
    },
  },
  myphoto: {
    [theme.breakpoints.only("xs")]: {
      height: "15rem",
    },
    [theme.breakpoints.only("sm")]: {
      height: "20rem",
    },
    [theme.breakpoints.only("md")]: {
      height: "25rem",
    },
    [theme.breakpoints.only("lg")]: {
      height: "31rem",
    },
    [theme.breakpoints.only("xl")]: {
      height: "31rem",
    },
  },
});

export const Home = () => {
  const classes = useStyle();

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={7}>
            <Paper className={classes.paper}>
              <Box className={classes.box}>
                <Typography className={classes.topText} align="left">
                  Hola, mi nombre es Rafael
                </Typography>
                <Typography
                  className={classes.middleText}
                  variant="h2"
                  align="left"
                >
                  Soy Desarrollador de Software
                </Typography>
                <NavLink to="/about">
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.buttonAbout}
                  >
                    Sobre Mí
                  </Button>
                </NavLink>
                <NavLink to="/proyect">
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.buttonProyect}
                  >
                    Proyectos
                  </Button>
                </NavLink>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Paper className={classes.paper}>
              <img alt="logo" src={myPhoto} className={classes.myphoto} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </motion.div>
  );
};
