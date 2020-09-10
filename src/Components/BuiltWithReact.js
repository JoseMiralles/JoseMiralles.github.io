import React from "react";

class BuiltWithReact extends React.Component {
    render() {
        return (

            <div class="row m-4">
                <div class="col-lg-6 offset-lg-3 p-3 built_with_react_component border rounded">

                    <div class="row justify-content-center">
                        Built with React.
                    </div>

                    <div class="row justify-content-center">
                        <a href="https://github.com/JoseMiralles/JoseMiralles.github.io">
                            View source &gt;&gt;&gt;
                        </a>
                    </div>

                </div>
            </div>

        );
    }
}

export default BuiltWithReact;