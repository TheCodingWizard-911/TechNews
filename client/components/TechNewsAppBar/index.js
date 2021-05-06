import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const TechNewsAppBar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <h3>Tech News Online</h3>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </nav>
  );
};

export default TechNewsAppBar;
