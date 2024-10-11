import { useLoader } from "@react-three/fiber";
import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Model() {
  const model = useLoader(
    GLTFLoader,
    "./FlightHelmet/glTF/FlightHelmet.gltf",
    (loader) => {
      //init DRACOLoader
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("./draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );
  //con primitive posso inserire il mio modello alla scena
  return <primitive object={model.scene} scale={5} position-y={-1} />;
}
