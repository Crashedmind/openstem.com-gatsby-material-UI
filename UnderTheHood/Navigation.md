content/ pages should have the appropriate category
e.g. "activities" then browsing to /categories/activities/ will produce this subset

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


##update icons

react-md/lib/FontIcons

see icon preview and names on https://material.io/tools/icons/?style=baseline