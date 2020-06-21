import React from 'react'
import * as S from './style'
import ToggleButtom from '../toggle-buttom'

const DarkMode = () => {
    return (
        <S.Container>
            <div className="group-toggle">
                <em>Enable Dark Mode</em>
                <ToggleButtom />
            </div>

            <S.Card>
                <h1>Oi mundo</h1>
            </S.Card>
        </S.Container>
    )
}

export default DarkMode