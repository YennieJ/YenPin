import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const onSidebarAtom = atom({
  key: "onSidebar ",
  default: false,
});
