export interface CommonNote {
  id: string | null;
  text: string;
  description: string;
  timestamp: string;
  year: number;
}

export interface ConfidentialNote {
  id: string | null;
  login: string;
  password: string;
  description: string;
  timestamp: string;
  year: number;
}
