import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import { Link } from "gatsby";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const urlCalendar = "/events-calendar";
    const urlInfo = "/introducing-open-stem-kids-website";
    
    const { userLinks } = this.props;
    const { copyright, fixedFooter } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        {userLinks ? <UserLinks config={config} labeled /> : null}
        <div className="notice-container">
          <div className="Intro">
            <Link to={urlInfo}>
                <Button flat secondary iconClassName="fa fa-info"> 
                  Intro
                </Button>            
            </Link>
          </div>


          <div className="rss">
            <Link to={url}>
              <Button flat secondary iconClassName="fa fa-rss">
                Subscribe
              </Button>
            </Link>
          </div>
          <div className="based-on">
            <Link to={urlCalendar}>
                <Button flat secondary iconClassName="fa fa-calendar"> 
                  Calendar
                </Button>
              </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
