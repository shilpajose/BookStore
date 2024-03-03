import React from 'react'
import { Parallax } from 'react-parallax';


function ParallaxEffect() {
    return (
        <div>
            <Parallax bgImage="https://i.postimg.cc/DyJJ2NSB/271866.jpg" strength={500}>
                <div style={{ height: '500px' }}></div>
            </Parallax>
        </div>
    )
}

export default ParallaxEffect