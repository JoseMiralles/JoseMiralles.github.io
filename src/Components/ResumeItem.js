import React from "react";

class ResumeItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const item = this.props.content;

    //Check if this is a link section item, and return one if it is.
    if (this.props.linkSectionItem) {
      return (
        <div className="col-lg-4 linkItem">
          <a href={item.url}>
            <h3>- {item.title} -></h3>
          </a>
        </div>
      );
    }

    // Map the highlights for this resume item.
    let highlights = null;
    if (item.highlights) {
      highlights = item.highlights.map((hl) => {
        return <li>{hl}</li>;
      });
    }

    // Map the links.
    let links = null;
    if (item.links) {
      links = item.links.map((link) => {
        return (
          <p className="strong text-muted remove-bottom-margin">
            <a href={link.url}>- {link.title} -&gt;</a>
          </p>
        );
      });
    }

    // Round image if it should be rounded.
    const imgClassNames = item.roundImg
      ? "left_image img-fluid rounded_image mx-auto my-3"
      : "left_image img-fluid mx-auto my-3";

    // Surround the img tag if there is a link/url for this item.
    let imgTag = null;
    if (item.links) {
      imgTag = (
        <a href={item.links[0].url}>
          <img className={imgClassNames} src={item.imgSrc} alt="Resume item" />
        </a>
      );
    } else {
      imgTag = (
        <img className={imgClassNames} src={item.imgSrc} alt="Resume item" />
      );
    }

    // Return small version of item if there is no description and no highlights.
    if (!item.description && !highlights) {
      return (
        <div className="col-md-4">
          {imgTag}
          <h3 className="section_subtitle remove-bottom-margin">
            {item.employer}
          </h3>
          <p className="text-muted remove-bottom-margin">{item.jobTitle}</p>
        </div>
      );
    }

    // Return original item type.
    return (
      <div className="row my-5">
        <div className="col-md-1" />
        <div className="col-md-3 justify-content-center">{imgTag}</div>
        <div className="col-md-7">
          <h3 className="section_subtitle remove-bottom-margin">
            {item.employer}
          </h3>
          <p className="text-muted remove-bottom-margin">{item.jobTitle}</p>
          <p className="strong text-muted remove-bottom-margin">
            {item.dateRange}
          </p>
          {links ? links : ""}
          {item.description ? (
            <p className="itemDescription">{item.description}</p>
          ) : (
            <br />
          )}
          <ul>{highlights}</ul>
        </div>
        <div className="col-md-1" />
      </div>
    );
  }
}

export default ResumeItem;
