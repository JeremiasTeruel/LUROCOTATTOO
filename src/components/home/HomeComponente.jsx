import React from 'react'
import './HomeComponente.css'
// import TATTOO1 from '../../assets/tatuaje1.jpg'
// import TATTOO2 from '../../assets/tatuaje2.jpg'
// import TATTOO3 from '../../assets/tatuaje3.jpg'
// import TATTOO4 from '../../assets/tatuaje4.jpg'
// import TATTOO5 from '../../assets/tatuaje5.jpg'
import VIDEO_HOME from '../../assets/video_home.mp4'
import { Link as LinkRouter } from 'react-router-dom'

const Main = () => {
    return (
        <main className='container'>
            <div>
                <video id='video' autoPlay loop muted>
                    <source
                        src={VIDEO_HOME}
                        type="video/mp4"
                        />
                </video>
            </div>

            <div className='artistas_home'>
                <LinkRouter to={'/artistas'} style={{textDecoration: 'none'}}>
                    <h2 className='artistas_h2'>Nuestrxs Artistas</h2>
                </LinkRouter>
            </div>

            <div className='separador'></div>

            <div className='cursos'>
                <LinkRouter to={'/cursos'} style={{textDecoration: 'none'}}>
                    <h2 className='cursos_h2'>CURSOS</h2>
                </LinkRouter>
            </div>

            <div className='separador'></div>

            <div className='productos'>
                <LinkRouter to={'/productos'} style={{textDecoration: 'none'}}>
                    <h2 className='productos_h2'>Nuestros productos</h2>
                </LinkRouter>
            </div>


            <div className='mapa'>
                <h2 className='mapa_h2'>Donde encontrarnos...</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.255655101707!2d-68.84080898427818!3d-32.89140827642533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0919da344f6f%3A0xaaab5a555c485cc4!2sGaler%C3%ADa%20Piazza%2C%20Av.%20San%20Mart%C3%ADn%201027%2C%20M5500%20Mendoza!5e0!3m2!1ses-419!2sar!4v1669843620340!5m2!1ses-419!2sar" width="600" height="450" style={{ border: 0 }} referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    )
}

export default Main