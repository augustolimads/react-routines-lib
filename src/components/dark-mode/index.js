import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalTheme from '../../styles/global'
import * as S from './style'
import ToggleButtom from '../toggle-buttom'
import light from '../../styles/themes/lightTheme'
import dark from '../../styles/themes/darkTheme'

const DarkMode = () => {
    const [themeMode, setThemeMode] = useState(light)

    const toggleTheme = () => {
        setThemeMode(themeMode.title === 'light' ? dark : light)
        console.log(themeMode)
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalTheme />
            <S.Container>
                <div className="group-toggle">
                    <em>Enable Dark Mode</em>
                    <ToggleButtom onCheck={toggleTheme}/>
                </div>

                <S.Card>
                    <h1>Hello World!</h1>
                </S.Card>
            </S.Container>
        </ThemeProvider>
    )
}

export default DarkMode