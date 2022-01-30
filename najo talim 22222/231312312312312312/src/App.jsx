import React from 'react'
import './App.scss'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import langData from './Localization/data'

import { Context } from './Context/Localization'


function App () {

    const { state } = React.useContext(Context)


    return (
        <>
            <Header />


            <main>
                {langData[state].main.title}
            </main>


            <Footer />
        </>
    );
}

export default App;