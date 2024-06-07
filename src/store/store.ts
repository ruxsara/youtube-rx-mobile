import { configureStore } from '@reduxjs/toolkit';
import SettingsReducer from '@store/settings-slice'

const store = configureStore({
  reducer: {
    settings: SettingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
