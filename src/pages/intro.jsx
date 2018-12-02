import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Intro from "../components/Intro";
import config from "../../data/SiteConfig";

class IntroPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Intro">
        <div className="intro-container">
          <Helmet>
            <title>{`Intro to OpenSTEMKids | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/introducing-open-stem-kids-website/`} />
          </Helmet>
          <Intro />
        </div>
      </Layout>
    );
  }
}

export default IntroPage;
