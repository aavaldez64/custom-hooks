import './App.css';

function App() {

  const customHooks: string[] = [
    "useCustomForm",
    "useFetchingData",
    "useInfiniteScroll"
  ];
  return (
    <div className="app">
      <main>
        <h1>React Typescript App</h1>
        <h2>Custom Hooks</h2>
        
        <ul>
          {
            customHooks.map((hook) => (
              <li key={hook}>{hook}</li>
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
