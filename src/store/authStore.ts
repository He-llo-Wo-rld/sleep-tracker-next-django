export type User = {
  id: string;
  email: string;
  name?: string;
  createdAt?: string; // ISO string
  updatedAt?: string; // ISO string
};

import { create } from "zustand";

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
