import React from "react";
import { linksSection } from "../Data/ResumeSections.js";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Links extends React.Component {
  render() {
    return (
      <div className="col links-section py-3">
        <div className="row link-section-row">


        <div id="PCModelWrapper" className="w-100 h-100"></div>

          <div className="col-md-6 offset-md-3 p-5 align-self-center">
            <ul className="list-group p-md-5">
              {this.renderLinks(linksSection)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setup3DComputer();
  }

  setup3DComputer() {
    let scene, camera, renderer, controls;
    const parent = document.getElementById("PCModelWrapper");

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      1,
      parent.clientWidth / parent.clientHeight,
      1,
      1000
    );
    camera.position.z = 3.5;
    camera.position.x = 110;
    console.log(camera.aspect);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(parent.clientWidth, parent.clientHeight);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.noPan = true;

    parent.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(require("../assets/z89pc.glb"), function (gltf) {
      const mesh = gltf.scene.children[2];
      console.log(gltf);
      const wireframe = new THREE.WireframeGeometry(mesh.geometry);
      const line = new THREE.LineSegments(wireframe);
      line.position.y = -1;
      line.position.x = 0;
      line.material.depthTest = false;
      line.material.opacity = 1;
      line.material.transparent = true;
      line.material.color = new THREE.Color("darkslategrey");

      scene.add(line);
      animate();
      window.addEventListener("resize", onWindowResize, false);
    });
    function animate() {
      requestAnimationFrame(animate);

      // required if controls.enableDamping or controls.autoRotate are set to true
      controls.update();

      renderer.render(scene, camera);
    }
    function onWindowResize() {
      camera.aspect = parent.clientWidth / parent.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(parent.clientWidth, parent.clientHeight);
      console.log(camera.aspect);
    }
  }

  renderLinks(section) {
    return section.items.map((item, index) => {
      return (
        <a
          key={index}
          className="link-tem list-group-item text-center m-md-3 my-3 rounded list-group-item-action"
          href={item.url}
        >
          {item.title}
        </a>
      );
    });
  }
}

export default Links;
