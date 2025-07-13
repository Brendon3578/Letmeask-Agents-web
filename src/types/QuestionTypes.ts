export type RawQuestion = {
  id: string;
  question: string;
  answer?: string | null;
  createdAt: string;
};

export type CreateQuestionRequest = {
  question: string;
};

export type CreateQuestionResponse = {
  questionId: string;
};

export type GetRoomQuestionsResponse = RawQuestion[];
