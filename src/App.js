import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Particle } from "./components/Particle";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { theme } from "./themeConfig";
import styled from 'styled-components';
import { NotFound } from "./pages/NotFound";
import { Proyect } from "./pages/Proyect";
import { Contact } from "./pages/Contact";
import { CardProyect } from "./components/CardProyect";

const useStyle = makeStyles({
  pages: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100vh",
  }
});

const Section = styled.section`
  overflow-x: hidden;
`;

function App() {
  const classes = useStyle();
  let location = useLocation();

  return (
    <Section>
      <ThemeProvider theme={theme}>
        <div className={classes.pages}>
          <Particle />
            <Header />
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/proyect" component={Proyect} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/proyecttype" component={CardProyect} />
                <Route component={NotFound} />
              </Switch>
            </AnimatePresence>
        </div>
      </ThemeProvider>
    </Section>
  );
}

export default App;
