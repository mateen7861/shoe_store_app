import React from "react";
import { Grid, Typography } from "@material-ui/core";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Grid
      style={{
        backgroundColor: "#24252A",
        color: "white",
        padding: "30px",
      }}
      container
    >
      <Grid xs={6} item>
        <Typography variant="h5" style={{ fontWeight: "bolder" }}>
          Shoe Store
        </Typography>
        <Typography>
          Pakistan's top online shoe store.Known for quality.
        </Typography>
        <img style={{ width: 22 + "px", marginTop: ".8rem" }} src={phone}></img>
        <span style={{ fontSize: "1.5rem", paddingLeft: ".5rem" }}>
          +923081607123
        </span>
        <br></br>

        <img style={{ width: 22 + "px", marginTop: ".8rem" }} src={mail}></img>
        <span style={{ fontSize: "1.5rem", paddingLeft: ".5rem" }}>
          mateeneorld7861@gmail.com
        </span>
        <br></br>
        <br></br>

        <a href="https://www.facebook.com/mateen.blaster.5">
          <img
            style={{ width: "30px", marginRight: ".7rem" }}
            src={facebook}
          ></img>
        </a>

        <img
          style={{ width: "30px", marginRight: ".7rem" }}
          src={twitter}
        ></img>
        <img style={{ width: "30px" }} src={linkedin}></img>
      </Grid>
      <Grid xs={6} item>
        <Typography variant="h5">Quick Links</Typography>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <Typography>Home</Typography>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="products">
          <Typography>Products</Typography>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="about">
          <Typography>About</Typography>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="contact">
          <Typography>Contact</Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
