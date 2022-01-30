import { forwardRef } from 'react'

const FancyButton = forwardRef((props, ref) => {
    return (<>
        <h1 ref={ref} className='meading'>Meading</h1>

        <button>bosing</button>
    </>)
})

export default FancyButton