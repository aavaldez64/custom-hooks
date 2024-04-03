import { useSpeechRecognition } from "./hooks/useSpeechRecognition";

export function SpeechRecognitionExample() {
  const { isRecording, transcription, startRecording, stopRecording } =
    useSpeechRecognition({
      lang: "es-ES",
    });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <button type="button" onClick={startRecording}>
          Start
        </button>
        <button type="button" onClick={stopRecording}>
          Stop
        </button>
      </div>
      <div>
        Recording: {isRecording ? "Si" : "No"} <br />
        Transcription: {transcription} <br />
      </div>
    </div>
  );
}
