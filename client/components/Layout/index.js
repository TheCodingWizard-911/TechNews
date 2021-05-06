import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import TechNewsAppBar from "../TechNewsAppBar";
import TechNewsFooter from "../TechNewsFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  side: {
    position: "absolute",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TechNewsAppBar />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={9}>
          {children}
        </Grid>
        <Grid item xs={12} sm={3} className={classes.side}>
          <p>Tech News Side Bar</p>
        </Grid>
      </Grid>
      <TechNewsFooter />
    </div>
  );
};

export default Layout;
