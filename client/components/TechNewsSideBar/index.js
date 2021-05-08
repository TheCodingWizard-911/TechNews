import { makeStyles } from "@material-ui/core/styles";
import { Card, GridList, GridListTile } from "@material-ui/core";
import LinksCard from "./LinksCard";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    padding: theme.spacing(2, 1),
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
    },
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    [theme.breakpoints.up("sm")]: { display: "none" },
  },
  card: {
    display: "none",
    overflow: "auto",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      width: "100%",
      height: "100%",
      padding: theme.spacing(1),
      borderRadius: theme.spacing(1.5),
    },
  },
}));

const TechNewsSideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <Card elevation={8} className={classes.card}>
        <LinksCard />
        <LinksCard />
        <LinksCard />
        <LinksCard />
        <LinksCard />
        <LinksCard />
        <LinksCard />
        <LinksCard />
      </Card>
      <GridList
        className={classes.gridList}
        align={"center"}
        spacing={2}
        cols={2.15}
      >
        <GridListTile>
          <LinksCard />
        </GridListTile>
        <GridListTile>
          <LinksCard />
        </GridListTile>
        <GridListTile>
          <LinksCard />
        </GridListTile>
        <GridListTile>
          <LinksCard />
        </GridListTile>
        <GridListTile>
          <LinksCard />
        </GridListTile>
        <GridListTile>
          <LinksCard />
        </GridListTile>
      </GridList>
    </div>
  );
};

export default TechNewsSideBar;
