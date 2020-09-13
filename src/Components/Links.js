import React from "react";
import { linksSection } from "../Data/ResumeSections.js"
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

class Links extends React.Component {
    render() {
        return (
            <div className="col links-section py-3">
                <div className="row link-section-row">

                    <div className="col-md p-5 align-self-center">
                        <ul className="list-group p-md-5">
                            {this.renderLinks(linksSection)}
                        </ul>
                    </div>

                    <div className="col-md align-self-center">
                        <div id="PCModelWrapper" className="w-100"></div>
                    </div>

                </div>
            </div>
        );
    }

    componentDidMount(){
        this.setup3DComputer();
    }

    setup3DComputer(){
        let scene, camera, renderer, hlight;
        const parent = document.getElementById("PCModelWrapper");

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(30, parent.clientWidth/parent.clientHeight, 1, 1000);
        camera.position.z = 7.5;
        camera.position.x = -0.2;
        camera.position.y = 1;

        renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
        renderer.setSize(parent.clientWidth, parent.clientHeight);
        parent.appendChild(renderer.domElement);

        const loader = new GLTFLoader();
        loader.load(require("../assets/z89pc.glb"), function(gltf){

            const mesh = gltf.scene.children[2];
            console.log(gltf);
            const wireframe = new THREE.WireframeGeometry(mesh.geometry);
            const line = new THREE.LineSegments(wireframe);
            line.material.depthTest = false;
            line.material.opacity = 1;
            line.material.transparent = true;
            line.material.color = new THREE.Color("darkslategrey");


            scene.add(line);
            renderer.render(scene, camera);
        });
    }

    renderLinks(section) {
        return (section.items.map((item, index) => {
            return (
                <a key={index} className="link-tem list-group-item text-center m-md-3 my-3 rounded list-group-item-action"
                    href={item.url}>
                    {item.title}
                </a>
            );
        }));
    }
}

export default Links;