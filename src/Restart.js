import React from 'react'

export default function Restart({returnAll}) {
    return (
        <section className="container high-alert">
            <h3>Recall the Ninjas!</h3>
            <button onClick={returnAll} className='high-alert' >Ninjas we need you!</button>
        </section>
    )
}
