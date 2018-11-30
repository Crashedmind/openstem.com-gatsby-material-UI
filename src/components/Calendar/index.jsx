import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Calendar.scss";

class Calendar extends Component {
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
            [Calendar](https://calendar.google.com/calendar/embed?src=3t2rr6k7t202dbk6nnpoht49eo%40group.calendar.google.com&ctz=Europe%2FDublin)
            
            <CardText>
              <p className="calendar-text md-body-1">  </p>
              
            </CardText>

          </div>
        </Card>
      </div>
    );
  }
}

export default Calendar;
