import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Calendar from "../components/Calendar";
import config from "../../data/SiteConfig";

class CalendarPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Calendar">
        <div className="calendar-container">
          <Helmet>
            <title>{`Calendar | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/calendar/`} />
          </Helmet>
          <Calendar />
        </div>
      </Layout>
    );
  }
}

export default CalendarPage;
