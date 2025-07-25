import { useMutation, useQueryClient } from "@tanstack/react-query";
import type {
  CreateQuestionRequest,
  CreateQuestionResponse,
  GetRoomQuestionsResponse,
} from "../../types/QuestionTypes";

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateQuestionResponse = await response.json();

      return result;
    },

    onMutate({ question }) {
      const questions = queryClient.getQueryData<GetRoomQuestionsResponse>([
        "get-questions",
        roomId,
      ]);

      const questionsArray = questions ?? [];

      // interface otimista
      const questionNotCreatedYet = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      };

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ["get-questions", roomId],
        [questionNotCreatedYet, ...questionsArray]
      );

      return { questionNotCreatedYet, questions };
    },

    onSuccess(data, _variables, context) {
      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ["get-questions", roomId],
        (questions) => {
          if (!questions || !context.questionNotCreatedYet) {
            return questions;
          }

          return questions.map((question) => {
            if (question.id === context.questionNotCreatedYet.id) {
              return {
                ...context.questionNotCreatedYet,
                id: data.questionId,
                answer: data.answer,
                isGeneratingAnswer: false,
              };
            }

            return question;
          });
        }
      );
    },

    onError(_error, _variables, context) {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ["get-questions", roomId],
          context.questions
        );
      }
    },

    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['get-questions', roomId] })
    // },
  });
}
