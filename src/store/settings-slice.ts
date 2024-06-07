import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NativeWindStyleSheet } from "nativewind";
import { Appearance } from "react-native";

export type Theme = "dark" | "light" | null;

export type Language = "en" | "ru";

interface SettingsState {
  openModal: boolean;
  language: Language;
  theme: Theme;
}

const initialState: SettingsState = {
  openModal: false,
  language: "en",
  theme: "dark",
};

export const SettingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeLanguage: (state: any, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },

    changeTheme: (state: any, action: PayloadAction<Theme>) => {
      Appearance.setColorScheme(action.payload);
      NativeWindStyleSheet.setColorScheme(action.payload ?? "system");
      state.theme = action.payload;
    },
  },
});

export const { changeLanguage, changeTheme } = SettingsSlice.actions;

export default SettingsSlice.reducer;
