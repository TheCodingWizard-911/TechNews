import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import AppBar from "./AppBar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          {children}
        </Grid>
        <Grid item xs={12} sm={3}>
          SideBar
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Layout;
