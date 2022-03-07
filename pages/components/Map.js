import React from 'react'
import {useEffect} from 'react'
import mapboxgl from 'mapbox-gl'




const style={
    wrapper: ` flex-1 h-full w-full `
}

mapboxgl.accessToken=process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN


const Map=() => {

    useEffect(() => {
        const map=new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [9.0820,8.6753],
            zoom: 5,
        })
    },[]);

    return (
        <div className={style.wrapper} id='map'>

        </div>
    )
}

export default Map