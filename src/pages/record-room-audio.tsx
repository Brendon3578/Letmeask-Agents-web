import { Loader2, Mic, Redo2, Send, StopCircle, Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === "function" &&
  typeof window.MediaRecorder === "function";

type RoomParams = {
  roomId: string;
};

export function RecordRoomAudio() {
  const params = useParams<RoomParams>();

  const [isSending, setIsSending] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);

  const recorder = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRecording]);

  async function startRecording() {
    if (!isRecordingSupported) {
      alert("O seu navegador não suporta gravação");
      return;
    }

    setSeconds(0);
    setRecordedBlob(null);
    setAudioUrl(null);

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    streamRef.current = stream;

    const newRecorder = new MediaRecorder(stream, {
      mimeType: "audio/webm",
    });

    const chunks: Blob[] = [];

    newRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    newRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/webm" });

      setRecordedBlob(blob);

      console.log(blob);

      setAudioUrl(URL.createObjectURL(blob));
    };

    newRecorder.start();

    recorder.current = newRecorder;

    setIsRecording(true);
  }

  function stopRecording() {
    recorder.current?.stop();

    for (const track of streamRef.current?.getTracks() || []) {
      track.stop();
    }

    setIsRecording(false);
  }

  function restartRecording() {
    stopRecording();
    setSeconds(0);
    setRecordedBlob(null);
    setAudioUrl(null);
    startRecording();
  }

  async function uploadAudio(blob: Blob) {
    setIsSending(true);

    const formData = new FormData();
    formData.append("file", blob, "audio.webm");

    const response = await fetch(
      `http://localhost:3333/rooms/${params.roomId}/audio`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();
    setIsSending(false);
    console.log(result);
  }

  function handleManualUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setRecordedBlob(file);
      setAudioUrl(URL.createObjectURL(file));
    }
  }

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 pt-10">
      <h2 className="scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0">
        Grave áudios sobre o conteúdo da sala
      </h2>
      <p>
        Grave os áudios do conteúdo da sala e depois use-o para a Inteligência
        Artificial responder automaticamente
      </p>

      <div className="flex flex-col items-center gap-2">
        {isRecording ? (
          <>
            <Button
              className="gap-2"
              onClick={stopRecording}
              size="lg"
              variant="destructive"
            >
              <StopCircle size={20} /> Parar Gravação
            </Button>
            <p className="font-semibold text-red-600">Gravando: {seconds}s</p>
          </>
        ) : (
          <Button className="gap-2" onClick={startRecording} size="lg">
            <Mic size={20} /> Iniciar Gravação
          </Button>
        )}

        <Button
          className="gap-2"
          disabled={!(isRecording || audioUrl)}
          onClick={restartRecording}
          size="lg"
          variant="secondary"
        >
          <Redo2 size={20} /> Reiniciar Gravação
        </Button>

        <div className="mt-4 flex flex-col items-center">
          <label className="mb-1 text-sm font-medium">
            Ou envie um áudio manualmente
          </label>
          <input
            type="file"
            accept="audio/*"
            onChange={handleManualUpload}
            className="block w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-emerald-700 hover:file:bg-emerald-200"
          />
        </div>
      </div>

      {audioUrl && (
        <div className="flex flex-col items-center gap-2">
          <audio className="w-full min-w-2xs max-w-md" controls src={audioUrl}>
            <track kind="captions" label="Português" srcLang="pt" />
          </audio>
          <Button
            className="gap-2"
            onClick={() => uploadAudio(recordedBlob!)}
            size="lg"
            variant="outline"
          >
            {isSending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <>
                <Send size={20} /> Enviar Gravação
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
