import React from 'react'
import * as S from './style'

export default function ToggleButtom(props) {
    return (
        <S.Slider for="checkbox">
            <input type="checkbox" id="checkbox" onChange={props.onCheck}/>
            <div class="slider round"></div>
        </S.Slider>
    )
}