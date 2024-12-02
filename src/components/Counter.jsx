//  -----------------------------------------------------------------------
//  ----------  /01/curso-astro-demo/src/components/Counter.jsx  ----------
//  -----------------------------------------------------------------------

import { useState } from 'preact/hooks';


export const Counter = () => {

    const [counter, setCounter] = useState(0);

    return (

        <>
            <button 
                class="border px-4 py-2 text-xl" 
                onClick={() => {
                    if(counter === 0) return;
                    setCounter(counter - 1)}
                }
            > - </button>
            <span class="text-yellow-500 text-xl ml-4 mr-4"> {counter} </span>
            <button class="border px-4 py-2 text-xl" onClick={() => setCounter(counter + 1)}> + </button>

        </>
    )
}
