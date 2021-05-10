import Image from "next/image";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import Instagram from "@material-ui/icons/Instagram";
import YouTube from "@material-ui/icons/YouTube";
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  footer: {
    flexGrow: 1,
    width: "100%",
    position: "static",
    bottom: 0,
    padding: theme.spacing(2, 1),
    backgroundColor: "lightgreen",
  },
  title: {
    fontSize: 26,
    fontWeight: 600,
    marginLeft: theme.spacing(2),
  },
  brand: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: theme.spacing(2, 0),
  },
  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: theme.spacing(2, 0),
  },
  link: {
    padding: theme.spacing(1),
    width: "100%",
    color: "black",
    fontSize: 20,
    fontWeight: 500,
  },
  follow: {
    fontSize: 20,
    fontWeight: 600,
  },
  socialButton: {
    margin: theme.spacing(1),
  },
}));

const TechNewsFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container spacing={1} align={"center"}>
        <Grid item xs={12} sm={4}>
          <div className={classes.brand}>
            <Image
              src="/assets/icons/Logo.svg"
              width={36}
              height={36}
              alt="Logo"
            />
            <div className={classes.title}>Tech News Online</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.links}>
            <Link href="/TechNews/About">
              <a className={classes.link}>About</a>
            </Link>
            <Link href="/TechNews/Contact">
              <a className={classes.link}>Contact</a>
            </Link>
            <Link href="/TechNews/PrivacyPolicy">
              <a className={classes.link}>Privacy Policy</a>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.links}>
            <div className={classes.follow}>Follow us on</div>
            <div>
              <Link href="https://www.instagram.com/learnwithengineers">
                <a className={classes.link} target="_blank">
                  <IconButton
                    edge="start"
                    className={classes.socialButton}
                    color="inherit"
                    aria-label="Instagram"
                  >
                    <Instagram />
                  </IconButton>
                </a>
              </Link>
              <Link href="https://www.youtube.com/channel/UCMMl9s8KU6pyc5zdhL6r-Kw">
                <a className={classes.link} target="_blank">
                  <IconButton
                    edge="start"
                    className={classes.socialButton}
                    color="inherit"
                    aria-label="You Tube"
                  >
                    <YouTube />
                  </IconButton>
                </a>
              </Link>
              <Link href="https://www.instagram.com/learnwithengineers">
                <a className={classes.link} target="_blank">
                  <IconButton
                    edge="start"
                    className={classes.socialButton}
                    color="inherit"
                    aria-label="Twitter"
                  >
                    <Twitter />
                  </IconButton>
                </a>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          Copyright
        </Grid>
      </Grid>
    </footer>
  );
};

export default TechNewsFooter;
