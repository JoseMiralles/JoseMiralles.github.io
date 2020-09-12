import React from "react";

import { mainSections } from "../Data/ResumeSections.js";

class MainResumeSection extends React.Component {
  render() {
    {
      /* This maps each work section. Work, projects, etc... */
    }
    const mappedMainSections = mainSections.map((item, index) => {
      {
        /* This maps all work and projects items. */
      }
      const mappedWorkItems = item.items.map((wItem, index2) => {
        return <ResumeItem data={wItem} key={index2} index={index2} />;
      });

      return (
        <div className="row m-sm-5 border light_bg" key={index}>
          <br /> <br /> <br />
          {/* Section Title */}
          <div className="section-title col-md-7 offset-md-5 p-5 dark_bg text-center">
            <div className="">
              <div className="">{item.title}</div>
            </div>
            <hr />
          </div>
          <div className="col-12">{mappedWorkItems}</div>
        </div>
      );
    });

    return <div className="section">{mappedMainSections}</div>;
  }
}

class ResumeItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const data = this.props.data;

    const highlights = data.highlights.map((hl) => {
      return <li>{hl}</li>;
    });

    let links = "";
    if (data.links) {
      links = data.links.map((link) => {
        return <a href={link.url}>- {link.title} &gt;</a>;
      });
    }

    //const reverseFlex = (this.props.index % 2 === 0) ? "" : " flex-row-reverse";
    const reverseFlex = "";
    console.log(this.props.index);

    return (
      <div className={"row" + reverseFlex} key={this.props.index}>
        {/*Image and title*/}
        <div className="col-md-5 py-5 align-self-center">
          <div className="col-md-8 offset-md-2 p-3 align-self-center text-center">
            <img
              className={
                "w-75 mb-4 resume-item-image" +
                (data.roundImg ? " rounded-img" : "")
              }
              src={data.imgSrc}
              alt="Resume item"
            />
            <div>
              <strong>{data.employer}</strong>
            </div>
            <div className="text-muted">{data.jobTitle}</div>
            <div className="text-muted">{data.dateRange}</div>
            {links}
          </div>
        </div>

        {/* Bullet points and description. */}
        <div className="col-md-7 d-flex py-3 dark_bg">
          <div className="col-md-10 p-4 align-self-center offset-md-1">
            {data.description ? (
              <span>
                <p>{data.description}</p>
                <hr />
              </span>
            ) : (
              ""
            )}

            {/* Bullet points */}
            <ul>{highlights}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainResumeSection;
