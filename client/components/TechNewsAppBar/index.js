import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 90,
  },
  title: {
    flexGrow: 1,
    fontSize: 36,
    fontWeight: 600,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      fontSize: 26,
    },
  },
  menuButton: {
    margin: theme.spacing(1),
  },
}));

const TechNewsAppBar = () => {
  const classes = useStyles();

  return (
    <nav>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Image
            src="/assets/icons/Logo.svg"
            width={48}
            height={48}
            alt="Logo"
          />
          <div className={classes.title}>Tech News Online</div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
    </nav>
  );
};

export default TechNewsAppBar;
