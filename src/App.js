import React, { useState } from 'react';
import Joke from './components/Joke';
import News from './components/News'
import Tasks from './components/Tasks'
import Gallery from './components/Gallery'

function App() {

  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = event => {
    console.log('userQuery', userQuery)
    setUserQuery(event.target.value);
  }
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery();
    }

  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  return (
    <div className="App">
      <h1>hello ale</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>

      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <Gallery />
      <hr />
      <News />
    </div>
  );
}

export default App;
