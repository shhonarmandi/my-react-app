export interface PostRequestPayload {
  title: string;
  body: string;
  userId: number;
}

export interface PostResponse {
  title: string;
  body: string;
  userId: number;
  id: number;
}
