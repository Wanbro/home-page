import React from 'react';
import { useFetch } from './Hook';



function Joke() {

    const { setup, punchline } = useFetch('https://official-joke-api.appspot.com/jokes/random', {})

    return (
        <div>
            <h3>Joke in this session</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>

    )


}

export default Joke;