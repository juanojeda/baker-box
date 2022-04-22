import { styled } from "@linaria/react";

const Background = styled.div``;

function App() {
  return (
    <Background className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Background>
  );
}

export default App;
