import { AlertCircleIcon } from "lucide-react";
import { useRoomQuestions } from "../api/hooks/use-room-questions";
import { QuestionItem } from "./question-item";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

type QuestionListProps = {
  roomId: string;
};

export function QuestionList({ roomId }: QuestionListProps) {
  const { data } = useRoomQuestions(roomId);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      {data?.length === 0 && (
        <Alert>
          <AlertCircleIcon />
          <AlertTitle>Nenhuma pergunta encontrada</AlertTitle>
          <AlertDescription>
            Que tal fazer a primeira pergunta?
          </AlertDescription>
        </Alert>
      )}

      {data?.map((question) => {
        return <QuestionItem key={question.id} question={question} />;
      })}
    </div>
  );
}
