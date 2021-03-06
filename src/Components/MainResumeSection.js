import React from "react";

class MainResumeSection extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    render(props) {
        const mappedMainSections = this.props.section.map((item, index) => {
            const mappedWorkItems = item.items.map((wItem, index2) => {
                return <ResumeItem data={wItem} key={index2} index={index2} />;
            });

            return (
                <div className="row m-sm-5" key={index}>
                    <br /> <br /> <br />
                    {/* Section Title */}
                    <div className="section-title col-md-12 p-2 mt-4 darkFont text-center">
                        <div>{item.title}</div>
                    </div>
                    <div className="col-12">{mappedWorkItems}</div>
                </div>
            );
        });

        return <div className="container-fluid">{mappedMainSections}</div>;
    }
}

class ResumeItem extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const data = this.props.data;

        const highlights = data.highlights.map((hl, index) => {
            return <li key={index}>{hl}</li>;
        });

        let links = "";
        if (data.links) {
            links = data.links.map((link, index) => {
                return <div><a key={index} target="_blank" href={link.url}>- {link.title} &gt;</a></div>;
            });
        }

        const reverseFlex = (this.props.index % 2 === 0) ? "" : " flex-row-reverse";

        return (
            <div className={"row border m-sm-5" + reverseFlex} key={this.props.index}>
                {/*Image and title*/}
                <div className="col-md-5 py-5 align-self-center">
                    <div className="row">
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
                </div>

                {/* Bullet points and description. */}
                <div className="col-md-7 d-flex py-3 dark_bg">
                    <div className="row">
                        <div className="col-md-10 p-4 align-self-center offset-md-1">
                            {data.description ? (
                                <span>
                                    <p className="lead">{data.description}</p>
                                    <hr />
                                </span>) 
                                : ("")}

                            {/* Bullet points */}
                            <ul>{highlights}</ul>
                        </div></div>
                </div>
            </div>
        );
    }
}

export default MainResumeSection;
