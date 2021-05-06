import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const TechNewsFooter = () => {
  const classes = useStyles();

  return (
    <footer>
      <p>Tech News Footer</p>
    </footer>
  );
};

export default TechNewsFooter;
