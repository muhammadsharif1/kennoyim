import React from 'react'
import './Header.scss'

import langData from '../../Localization/data'

import { Context } from '../../Context/Localization'



function Header () {

    const { state, setState } = React.useContext(Context)

    return <header>
        <nav>
            <ul>
                <li>
                    {langData[state].header.nav.home}
                </li>

                <li>
                    {langData[state].header.nav.about}

                </li>
            </ul>
        </nav>

        <select value={state} onChange={(evt) => setState(evt.target.value)}>
            <option value='uz'> UZ</option>
            <option value='ru'> RU</option>
            <option value='en'> EN</option>
        </select>
    </header>
}

export default Header