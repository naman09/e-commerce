import { create } from "zustand";

type UserStore = {
  userId: string;
  setUserId: (userId: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
    userId: "Naman",
    setUserId: (newUserId) => set({userId: newUserId})
}));