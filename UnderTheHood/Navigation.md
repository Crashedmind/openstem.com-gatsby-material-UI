## Add to Navigation Bar
Add these
- /categories/activities/
- /categories/materials/
- /categories/setup/
- spacer
- /calendar/
- spacer


## Components/Navigation/NavList.jsx

e.g.

```
NavList.push({
    primaryText: "Activities",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "categories/activities/"
  });
  
  NavList.push({
    primaryText: "Materials",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "categories/materials/"
  });
  


  NavList.push({
    primaryText: "Setup",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "categories/setup/"
  });
  


  NavList.push({ divider: true });

```

TODO: Add books
TODO: Add calendar


##update icons

react-md/lib/FontIcons