import React from 'react'
import './Artistas.css'
import { useTodosArtistasQuery } from '../../features/ArtistasApi'
import ArtistasCard from '../../components/artistas/ArtistasCard'


const Artistas = () => {

    let { data: artistas } = useTodosArtistasQuery()


    return (
        <main className='container'>
            <div className='artistas-container'>
                {artistas?.map((item) => {
                    return (<ArtistasCard key={item._id} data={item} />)
                })}
            </div>
        </main >
    )
}

export default Artistas