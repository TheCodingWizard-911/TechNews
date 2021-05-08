import Image from "next/image";

import { Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: theme.spacing(0, 1),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(2, 1),
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2, "auto"),
      maxWidth: "60%",
    },
  },
}));

const LinksCard = () => {
  const classes = useStyles();
  return (
    <Card elevation={5} className={classes.card}>
      <Image
        src="/assets/images/image.jpg"
        width={"100%"}
        height={"100%"}
        alt="Logo"
      />
      <CardContent>
        <h5>Link</h5>
      </CardContent>
    </Card>
  );
};

export default LinksCard;
