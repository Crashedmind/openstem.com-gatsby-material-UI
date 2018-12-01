// Do not delete. index.js is required to generate the url /intro
// This is deliberately blank. The content/Calendar.md has the content

import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Calendar.scss";

class Intro extends Component {
  render() {
    return (
      <div className="calendar-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="calendar-wrapper">

          </div>
          <div className="calendar-wrapper">
            <img
              src={config.userAvatar}
              className="calendar-img"
              alt={config.userName}
            />
                        
            <CardText>
              <p className="calendar-text md-body-1">  </p>
              
            </CardText>

          </div>
        </Card>
      </div>
    );
  }
}

export default Intro;
