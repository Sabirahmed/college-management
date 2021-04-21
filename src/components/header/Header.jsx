import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Sign-out",
    href: "/login",
  },
];
                     
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
  },
  
}));
                     
const Header = ()=> {
  const { header } = useStyles();
                     
  const displayDesktop = () => {
    return (
      <>
      
      <Toolbar>
        {getMenuButtons()}
      </Toolbar>
      </>
    );
  };


                     
  
                     
  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };
                     
  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}

export default Header;