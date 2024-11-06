import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';





export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (

        <>
            <h3>{category}</h3>

            { isLoading && <h2>Cargando...</h2> }

            <div className='card-grid'>
                {
                    images.map((img) => {
                        return <GifItem 
                            key={img.id}
                            {...img}
                        />
                    })
                }
            </div>
        </>
    )
}
