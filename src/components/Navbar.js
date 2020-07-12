import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    forAppBar: {
      backgroundColor: "#24252A",
    },

    title: {
      flexGrow: 1,
      fontWeight: "bolder",
    },
    noBtn: {
      textTransform: "capitalize",
      marginRight: "15px",
    },
    ncBtn: {
      backgroundColor: "#0088A8",
      borderRadius: "50px",
      padding: "2px 18px",
      textTransform: "capitalize",
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.forAppBar} position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Shoe Store
          </Typography>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Button className={classes.noBtn} color="inherit">
              Home
            </Button>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="products"
          >
            <Button className={classes.noBtn} color="inherit">
              Products
            </Button>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="about">
            <Button className={classes.noBtn} color="inherit">
              About
            </Button>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="contact">
            <Button className={classes.ncBtn} color="inherit">
              Contact
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
