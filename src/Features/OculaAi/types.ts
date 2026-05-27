export type OculaChatMessage = {
  content: string;
  createdAt: number;
  id: string;
  role: "user" | "assistant";
};
