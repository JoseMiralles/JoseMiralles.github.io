import React from "react";

class AFrameScene extends React.Component {
  render() {

    const sceneMain3DAsset = require("./Cyberpunk Scene/AFrame_CyberP_Scene/Cyberpunk_Scene.glb");
    const giantScreenImage = require("./Cyberpunk Scene/if-kipling.png");
    const bigScreenVideo = require("./Cyberpunk Scene/AFrame_CyberP_Scene/LargemonitorVideo.mp4");

    return (


      <div id="A_Frame_Scene">
        <a-scene loading-screen="backgroundColor: none" embedded background="color: #715874" renderer="foveationLevel: 2; highRefreshRate: true; colorManagement: true">
          {/* Asset Declarations */}
          <a-assets>
            <a-asset-item id="main_scene" src={sceneMain3DAsset} />
            {/* Video Assets */}
            <video className="Remove_from_mobile_VR" id="LargemonitorVideo" autoPlay="true" loop="true" type="video/mp4" src={bigScreenVideo} webkit-playsinline playsInline preload="auto" autoload="true" />
            {/* <video class="Remove_from_mobile_VR" id="SmallMonitorVideo" autoplay="true" loop="true" type="video/mp4"
          src="Cyberpunk Scene\AFrame_CyberP_Scene\LargemonitorVideo.mp4" webkit-playsinline playsinline preload="auto" autoload="true"></video> */}
            <img id="kipling-if-poem-image" src={giantScreenImage} />
          </a-assets>
          {/* Standard ligthing */}
          <a-entity id="main_light" light="type: ambient; color: #a78fff; intensity: 1" position="-1 3.115 0.139" />
          {/* Disabled on mobile */}
          <a-entity className="Remove_from_mobile_VR" light="type: point; color: #ffffff; intensity: 1" position="1.210 3.115 0.139" />
          {/* 3D object Instances */}
          <a-entity id="main_entity" gltf-model="#main_scene" material="shader:flat;" position="0 0 0" scale="0.9 0.9 0.9" />
          {/* Monitor Videos */}
          {/* Large Monitor */}
          <a-video className="LargeMonitorVideo Remove_from_mobile_VR" src="#LargemonitorVideo" position="-1.552 1.157 -1.430" rotation="0 45.950 0" scale="0.910 0.910 0.00001" width="1.45" height="0.7" play="true" />
          {/* Small Monitors, right side (Ordered from right to left.)
      <a-video class="SmallMonitorVideo Remove_from_mobile_VR" src="#SmallMonitorVideo" position="-0.109 1.005 -1.774"
        rotation="0 1.130 0" scale="0.900 0.900 0.00001" width="0.45" height="0.45" play="true"></a-video>
      <a-video class="SmallMonitorVideo Remove_from_mobile_VR" src="#SmallMonitorVideo" position="-0.398 1.479 -1.814"
        rotation="0 -12.210 0" scale="0.900 0.900 0.00001" width="0.45" height="0.45" play="true"></a-video>
      <a-video class="SmallMonitorVideo Remove_from_mobile_VR" src="#SmallMonitorVideo" position="-0.587 1.005 -1.774"
        rotation="0 1.130 0" scale="0.900 0.900 0.00001" width="0.45" height="0.45" play="true"></a-video>
      <!-- Small Monitors, Left side (Ordered from top to Bottom.)
      <a-video class="SmallMonitorVideo Remove_from_mobile_VR" src="#SmallMonitorVideo" position="-1.929 1.005 -0.526"
        rotation="0 91.160 0" scale="0.900 0.900 0.00001" width="0.45" height="0.45" play="true"></a-video>
      <a-video class="SmallMonitorVideo Remove_from_mobile_VR" src="#SmallMonitorVideo" position="-1.999 1.466 -0.545"
        rotation="0 104.480 0" scale="0.900 0.900 0.00001" width="0.45" height="0.45" play="true"></a-video>
         */}
          {/* Giant screen poem */}
          <a-image src="#kipling-if-poem-image" position="2.456 1.630 0.130" rotation="0 -90 0" scale="4.050 2.270 1">
          </a-image>
          {/* Rig that controls the initial X/Y position of the camera and the hands. */}
          <a-entity id="rig" position="1 0 0">
            {/* CAMERA */}
            <a-entity id="camera" position="0 1.6 0" camera look-controls />
            {/* VR HANDS */}
            <a-entity id="leftHand" hand-controls="hand: left; handModelStyle: lowPoly; color: dimgrey" />
            <a-entity id="rightHand" hand-controls="hand: right; handModelStyle: lowPoly; color: dimgrey" />
          </a-entity>
          {/* Custom AR and VR buttons
      <div id="Enter_VR_Button_Wrapper">
        <a id="myEnterVRButton" href="#">VR</a>
      </div>
*/}
        </a-scene>
      </div>


    );
  }
}

export default AFrameScene;
