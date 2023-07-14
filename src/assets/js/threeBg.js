// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   70,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// // webgl renderer
// const renderer = new THREE.WebGL1Renderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// const geometry = new THREE.PlaneGeometry();
// const material = new THREE.MeshBasicMaterial({ Color: 0xff0000 });



// // we call an object as mesh in THREE.js , which is basically a geometry and material

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);
// camera.position.z = 5;

// //we have to call function request in browser called request animation frame,which works smoother and updates things faster than a regular renderer.
// function animate() {
//   requestAnimationFrame(animate);
//   mesh.rotation.x += 0.01;
//   mesh.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();
