import React from "react";

class NextSectionArrow extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="next_section_arrow">
                <h5>&#11024; {this.props.text}</h5>
            </div>
        )
    }

}

export default NextSectionArrow;