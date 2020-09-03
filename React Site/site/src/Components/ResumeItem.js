import React from "react";

class ResumeItem extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

        const item = this.props.content;

        // Map the highlights for this resume item.
        const highlights = item.highlights.map((hl) => {
            return (
                <li>{hl}</li>
            );
        });

        // Map the links.
        const links = item.links.map((link) => {
            return (
                <p className="strong text-muted remove-bottom-margin">
                    <a href={link.url}>
                        - {link.title} -&gt;
                    </a>
                </p>
            );
        });

        return (

            <div className="row my-5">
                <div className="col-md-1" />
                <div className="col-md-3 justify-content-center">
                    <img className="left_image img-fluid mx-auto my-3" src={item.imgSrc} />
                </div>
                <div className="col-md-7">
                    <h3 className="section_subtitle remove-bottom-margin">{item.employer}</h3>
                    <p className="text-muted remove-bottom-margin">{item.jobTitle}</p>
                    <p className="strong text-muted remove-bottom-margin">{item.dateRange}</p>
                    {links ? links : ""}
                    {item.description ? <p className="itemDescription">{item.description}</p> : ""}
                    <ul>
                        {highlights}
                    </ul>
                </div>
                <div className="col-md-1" />
            </div>

        );
    }

}

export default ResumeItem;