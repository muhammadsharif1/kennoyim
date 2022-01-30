import React from 'react'
import './Footer.scss'

import langData from '../../Localization/data'

import { Context } from '../../Context/Localization'


function Footer () {
    const { state } = React.useContext(Context)

    return <footer>
        {langData[state].footer.copyright}
    </footer>
}

export default Footer
