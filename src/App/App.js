import "./App.css";
import SideMenu from "../components/SideMenu";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "../components/Header";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        here we go!
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
