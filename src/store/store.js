import { configureStore } from "@reduxjs/toolkit";
import clientSlice from "./clientSlice";
import inputSlice from "./features/inputSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import getClientSlice from "./features/getClientSlice";
import updateModalSlice from "./features/modal/updateModalSlice";
import managerSlice from "./features/managerSlice";

export const store = configureStore({
  reducer: {
    clients: clientSlice,
    inputVal: inputSlice,
    client: getClientSlice,
    updateModal: updateModalSlice,
    managers: managerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
