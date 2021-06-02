export interface Data {
  phonewords: string[];
}

export interface ErrorData {
  message: string;
}

export type GenerateApiResult = Data | ErrorData;

export function isErrorData(data: GenerateApiResult): data is ErrorData {
  return (data as ErrorData).message !== undefined;
}
