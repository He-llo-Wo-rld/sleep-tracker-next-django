"use client";
import type { User } from "@/store/authStore";
import { createContext, ReactNode, useContext } from "react";

export const UserContext = createContext<User | null>(null);

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({
  user,
  children,
}: {
  user: User | null;
  children: ReactNode;
}) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
