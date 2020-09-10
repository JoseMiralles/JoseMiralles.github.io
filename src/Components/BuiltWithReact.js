import React from "react";

class BuiltWithReact extends React.Component {
    render() {
        return (

            <div class="row m-4">
                <div class="col-lg-6 offset-lg-3 built_with_react_component border rounded">
                    <div class=" p-3 d-flex justify-content-center">
                        This site was built with React.
                    <a class="pl-2" href="https://github.com/JoseMiralles/JoseMiralles.github.io">
                            View source &gt;&gt;&gt;
                    </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default BuiltWithReact;