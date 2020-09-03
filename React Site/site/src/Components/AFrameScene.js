import React from "react";

class AFrameScene extends React.Component {
  render() {
    return (
      <div id="A_Frame_Scene">
        <a-scene
          loading-screen="backgroundColor: none"
          embedded
          background="color: #715874"
          Renderer="foveationLevel: 2; highRefreshRate: true; colorManagement: true">

        </a-scene>
      </div>
    );
  }
}

export default AFrameScene;
