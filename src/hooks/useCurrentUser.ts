import { useUserContext } from "@/context/UserContext";
import { useAuthStore, User } from "@/store/authStore";
import { useEffect, useState } from "react";

export function useCurrentUser() {
  const [loading, setLoading] = useState(true);
  const setGlobalUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const ssrUser = useUserContext();

  useEffect(() => {
    if (ssrUser && user === null) {
      setGlobalUser(ssrUser);
      setLoading(false);
      return;
    }

    if (!ssrUser && user === null) {
      setLoading(false);
      return;
    }

    fetch("/api/auth/me", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        const apiUser = data.user as User;
        const isSame =
          apiUser &&
          user &&
          user.id === apiUser.id &&
          user.email === apiUser.email &&
          user.name === apiUser.name &&
          user.createdAt === apiUser.createdAt &&
          user.updatedAt === apiUser.updatedAt;
        if (apiUser && !isSame) {
          setGlobalUser(apiUser);
        }
        setLoading(false);
      })
      .catch(() => {
        setGlobalUser(null);
        setLoading(false);
      });
  }, [setGlobalUser, ssrUser, user]);

  return { user, loading };
}
