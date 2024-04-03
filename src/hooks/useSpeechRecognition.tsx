"use client";
import { useCallback, useEffect, useState } from "react";

interface SpeechRecognitionInterface {
  grammars: any;
  lang: string;
  interimResults: boolean;

  onresult: (event: {
    results: {
      length: number;
      [key: number]: {
        length: number;
        isFinal: boolean;
        [key: number]: { transcript: string };
      };
    };
  }) => void;

  onspeechend: () => void;
  onerror: (event: { error: string }) => void;

  start: () => void;
  stop: () => void;
}
interface SpeechGrammarListInterface {
  addFromString: (grammar: string, weight: number) => void;
}

interface Props {
  lang: string;
  grammar?: string;
}
export function useSpeechRecognition({ lang, grammar = "#JSGF V1.0;" }: Props) {
  const [speechRecog, setSpeechRecog] = useState<SpeechRecognitionInterface>();
  const [speechGramm, setSpeechGramm] = useState<SpeechGrammarListInterface>();
  const [transcription, setTranscription] = useState("");
  // const [mounted, setMounted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const stopRecording = useCallback(() => {
    if (speechRecog) {
      speechRecog.stop();
      setIsRecording(false);
    }
  }, [speechRecog]);
  const startRecording = useCallback(() => {
    if (speechRecog) {
      speechRecog.start();
      setIsRecording(true);
    }
  }, [speechRecog]);
  useEffect(() => {
    if (speechRecog && speechGramm) {
      speechGramm.addFromString(grammar, 1);
      speechRecog.grammars = speechGramm;
      speechRecog.lang = lang;
      speechRecog.interimResults = false;

      speechRecog.onresult = function (event) {
        const last = event.results.length - 1;
        const command = event.results[last][0].transcript;
        // console.log(command);
        setTranscription(command);
      };
      speechRecog.onspeechend = function () {
        speechRecog.stop();
        setIsRecording(false);
      };
      speechRecog.onerror = function (event) {
        console.log(event.error);
      };
      // setMounted(true);
    } else {
    }
  }, [speechRecog, speechGramm]);
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    const SpeechGrammarList =
      (window as any).SpeechGrammarList ||
      (window as any).webkitSpeechGrammarList;

    setSpeechRecog(new SpeechRecognition());
    setSpeechGramm(new SpeechGrammarList());
  }, []);

  return { isRecording, transcription, startRecording, stopRecording };
}
