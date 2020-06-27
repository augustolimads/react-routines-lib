import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import DarkMode from "../dark-mode"
import Fetching from '../fetching'
import ToggleButtom from '../toggle-buttom'

export default function Routing() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="darkmode">DarkMode</Link>
                    </li>
                    <li>
                        <Link to="fetching">Fetching</Link>
                    </li>
                    <li>
                        <Link to="toggle-buttom">ToggleButtom</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/darkmode" component={DarkMode} />
                <Route path="/fetching" component={Fetching} />
                <Route path="/toggle-buttom" component={ToggleButtom} />
            </Switch>
        </BrowserRouter>
    );
}