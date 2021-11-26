import create from "zustand";

interface StoreTypes {
  fontSize: number;
  setFontSize: (payload: number) => void;
  tabSize: number;
  setTabSize: (payload: number) => void;
  vimKeyboard: boolean;
  setVimKeyboard: (payload: boolean) => void;
}

export const useStore = create<StoreTypes>((set) => ({
  fontSize: Number(localStorage.getItem("font-size")) || 16,
  setFontSize: (payload) => {
    localStorage.setItem("font-size", String(payload));

    set({ fontSize: payload });
  },
  tabSize: Number(localStorage.getItem("tab-size")) || 2,
  setTabSize: (payload) => {
    localStorage.setItem("tab-size", String(payload));

    set({ tabSize: payload });
  },
  vimKeyboard: Boolean(localStorage.getItem("vim")),
  setVimKeyboard: (payload) => {
    localStorage.setItem("vim", payload ? "1" : "");

    set({ vimKeyboard: payload });
  },
}));
