import React from "react";

class BuiltWithReact extends React.Component {
    render() {
        return (

            <div className="col-12 py-5 built-with-react-wrapper">
                <div className="col-lg-6 offset-lg-3 p-3 built_with_react_component border rounded">

                    <div className="row justify-content-center">
                        Built with React.
                    </div>

                    <div className="row justify-content-center">
                        <a className="btn" href="https://github.com/JoseMiralles/JoseMiralles.github.io">
                            View source &gt;&gt;&gt;
                        </a>
                    </div>

                </div>
            </div>

        );
    }
}

export default BuiltWithReact;