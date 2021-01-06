import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
  const [height, setHeight] = React.useState(0);
  const [smileyCount, setSmileyCount] = React.useState(0);

  const measuredRef = React.useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, [smileyCount]);

  return (
    <div>
      <h1 ref={measuredRef}><div>Hello, world</div>{new Array(smileyCount).fill('').map(() => <div>:)</div>)}</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
      <button onClick={() => setSmileyCount(smileyCount+1)}>Make it taller</button>
    </div>
  );
}

ReactDOM.render(
  <div className="App">
    <App/>
  </div>,
  document.getElementById('root')
);
