export type RawQuestion = {
  id: string;
  question: string;
  answer?: string | null;
  createdAt: string;
  isGeneratingAnswer?: boolean; // apenas do front
};

export type CreateQuestionRequest = {
  question: string;
};

export type CreateQuestionResponse = {
  questionId: string;
  answer: string | null;
};

export type GetRoomQuestionsResponse = RawQuestion[];
