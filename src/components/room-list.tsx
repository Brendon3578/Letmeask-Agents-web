import { AlertCircleIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRooms } from "@/api/hooks/use-room";
import { dayjs } from "@/lib/dayjs";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function RoomList() {
  const { data, isLoading, isError } = useRooms();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salas criadas recentemente
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Carregando salas...</p>
        )}

        {isError && (
          <Alert variant={"destructive"}>
            <AlertCircleIcon />
            <AlertTitle>Não foi possível carregar as salas</AlertTitle>
            <AlertDescription>Tente novamente mais tarde.</AlertDescription>
          </Alert>
        )}

        <div className="sm:mask-b-from-90% scheme-dark flex max-h-[600px] flex-col gap-3 overflow-y-auto pr-2 pb-10">
          {data?.map((room) => {
            return (
              <Link
                className="group flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
                key={room.id}
                to={`/room/${room.id}`}
              >
                <div className="flex flex-1 flex-col gap-1.5">
                  <h3 className="font-medium">{room.name}</h3>

                  <div className="flex items-center gap-2">
                    <Badge className="text-xs" variant="secondary">
                      Criado {dayjs(room.createdAt).fromNow()}
                    </Badge>
                    {room?.questionsCount > 0 && (
                      <Badge className="text-xs" variant="secondary">
                        {room.questionsCount} pergunta
                        {room.questionsCount > 1 ? "s" : ""}
                      </Badge>
                    )}
                  </div>
                </div>

                <span className="flex items-center gap-1 font-medium text-sm transition-transform group-hover:translate-x-0.5">
                  Entrar
                  <ArrowRight className="size-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
