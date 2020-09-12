import React from "react";

class HeroSection extends React.Component{
    render(){
        return(
            <div className="container-fluid dark_bg hero-section">
                <div class="row d-flex align-items-center">

                    <div className="col-md-4 offset-md-2">
                        <div className="display-1 hero-title">José Miralles</div>
                    </div>
                    <div className="col-md-4">
                        <div className="display-1 hero-title text-center">777</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default HeroSection;