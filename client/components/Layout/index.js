import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import TechNewsAppBar from "../TechNewsAppBar";
import TechNewsFooter from "../TechNewsFooter";
import TechNewsSideBar from "../TechNewsSideBar";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 1),
  },
  mainContent: {
    height: "100%",
    padding: theme.spacing(2, 1),
  },
  card: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1.5),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <TechNewsAppBar />
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={9}>
          <div className={classes.mainContent}>
            <Card elevation={8} className={classes.card}>
              {children}
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TechNewsSideBar />
        </Grid>
      </Grid>
      <TechNewsFooter />
    </div>
  );
};

export default Layout;
