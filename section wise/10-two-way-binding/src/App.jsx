// import Player from './components/Player.jsx';

// function App() {
//   return (
//     <main>
//       <div id="game-container">
//         <ol id="players">
//           <Player initialName="Player 1" symbol="X" />
//           <Player initialName="Player 2" symbol="O" />
//         </ol>
//         GAME BOARD
//       </div>
//       LOG
//     </main>
//   );
// }

// export default App;


import Review from './components/Review';
import { useState } from 'react'


// don't change the Component name "App"
function App() {
  const [feed, setFeed] = useState("");
     const [name, setName] = useState("");
    function handleFeedChange(event){
        setFeed(event.target.value)
    }
    function handleNameChange(event){
        setName(event.target.value)
    }
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feed}
          onChange={handleFeedChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={name}
          onChange={handleNameChange} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review student={name} feedback={feed}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;