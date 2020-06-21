import React from 'react'
import * as S from './style'

export default function ToggleButtom() {
    return (
        <S.Slider for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div class="slider round"></div>
        </S.Slider>
    )
}