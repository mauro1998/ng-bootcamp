export interface AuthUserData {
  name?: string;
  email: string;
  photoUrl?: string;
  password?: string;
}

export interface AuthState {
  authenticated: boolean;
  data: AuthUserData;
}
