import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];

  NavList.push({
    primaryText: "Activities",
    leftIcon: <FontIcon>tag_faces</FontIcon>, 
    component: Link,
    to: "categories/activities/"
  });
  
  NavList.push({
    primaryText: "Blog",
    leftIcon: <FontIcon>edit</FontIcon>,
    component: Link,
    to: "categories/blog/"
  });

  NavList.push({
    primaryText: "Materials",
    leftIcon: <FontIcon>toys</FontIcon>,
    component: Link,
    to: "categories/materials/"
  });
  
  NavList.push({
    primaryText: "Setup",
    leftIcon: <FontIcon>build</FontIcon>,
    component: Link,
    to: "categories/setup/"
  });


  NavList.push({
    primaryText: "Books",
    leftIcon: <FontIcon>chrome_reader_mode</FontIcon>,
    component: Link,
    to: "categories/books/"
  });




  NavList.push({ divider: true });

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  
  NavList.push({
    primaryText: "Calendar",
    leftIcon: <FontIcon>event</FontIcon>,
    component: Link,
    to: "calendar"
  });


  NavList.push({
    primaryText: "About",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });
  return NavList;
}
export default GetNavList;
