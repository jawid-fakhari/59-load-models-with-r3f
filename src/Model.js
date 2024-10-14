import { Clone, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js";

console.log(useGLTF);
console.log(useGLTF.preload); //quando abbiamo delle condizioni, con il quale facciamo loading in una certa condizione, ondevitare il ritardo del caricamento usiamo preload cosi il modello viene caricato immediatamente anche se non non lo aggiungiamo al nostro JSX

export default function Model() {
  // const model = useLoader(GLTFLoader, "./hamburger.glb", (loader) => {
  //   //init DRACOLoader
  //   const dracoLoader = new DRACOLoader();
  //   dracoLoader.setDecoderPath("./draco/");
  //   loader.setDRACOLoader(dracoLoader);
  // });

  //GLTF Loading with Drei**************************
  const model = useGLTF("./hamburger-draco.glb"); //è supportato tutti file!

  //con primitive posso inserire il mio modello alla scena
  // return <primitive object={model.scene} scale={0.35} />;

  //Multiple Instances, come clonare un oggetto in drei
  return (
    <>
      <Clone object={model.scene} scale={0.15} position-x={-4} />
      <Clone object={model.scene} scale={0.25} position-x={0} />
      <Clone object={model.scene} scale={0.15} position-x={4} />
    </>
  );
}
