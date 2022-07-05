import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export default function SliderRange(props:any) {
    const[indicator, setIndicator] = useState<number>(0)


    return(
    
        <div className='slider'>
            <div className="slider__heads">
                <h3 className={`title title-xs ${indicator >= 0 ? 'slider__heads-active' : ''}`}>{props.valeur_1}</h3>
                <h3 className={`title title-xs ${indicator >= 50 ? 'slider__heads-active' : ''}`}>{props.valeur_2}</h3>
                <h3 className={`title title-xs ${indicator == 100 ? 'slider__heads-active' : ''}`}>{props.valeur_3}</h3>
            </div>  
           

            <Slider
                defaultValue={indicator}
                onChange={ (e:any) => {setIndicator(e.target.value)} }
                className="slider-range"
            />
        </div>
    )
}