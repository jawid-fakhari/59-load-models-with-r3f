import { Suspense } from 'react'
import { Perf } from 'r3f-perf'
import { OrbitControls } from '@react-three/drei'

import Model from './Model'
import Placeholder from './Placeholder'
import Hamburger from './Hamburger' //importare componente creato dal modello Hamburger con https://gltf.pmnd.rs/ ⬇️
import Fox from './Fox'


export default function Experience() {


    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight
            castShadow position={[1, 2, 3]}
            intensity={4.5}
            shadow-normalBias={0.04} //shadow normal bias, Shadow acne: nei modelli tondi, model casting shadows on itslef
        />
        <ambientLight intensity={1.5} />



        <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
        {/* suspense è un tag del react che fa lazy loading */}
        <Suspense
            //con il fallback possiamo creare una geometria primitiva leggera che viene visualizzata mentre si carica il modello principale
            fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}
        >
            <Hamburger scale={0.35} /> {/*⬆️*/}
        </Suspense>

        <Fox />

    </>
}