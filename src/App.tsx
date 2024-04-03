import "./App.css";
import { SpeechRecognitionExample } from "./SpeechRecognition.example";

function App() {
  const customHooks: string[] = [
    "useCustomForm",
    "useFetchingData",
    "useInfiniteScroll",
  ];
  return (
    <div className="app">
      <main>
        <h1>React Typescript App</h1>
        <h2>Custom Hooks</h2>

        <ul style={{ marginBottom: 40 }}>
          {customHooks.map((hook) => (
            <li key={hook}>{hook}</li>
          ))}
        </ul>
        <SpeechRecognitionExample />
      </main>
    </div>
  );
}

export default App;
