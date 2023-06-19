import { configureStore } from "@reduxjs/toolkit";
import clientSlice from "./features/client/clientSlice";
import inputSlice from "./features/input/inputSlice";
import getClientSlice from "./features/client/getClientSlice";
import updateModalSlice from "./features/modal/updateModalSlice";
import managerSlice from "./features/manager/managerSlice";
import createClientSlice from "./features/client/createClientSlice";

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

export const store = configureStore({
  reducer: {
    clients: clientSlice,
    inputVal: inputSlice,
    client: getClientSlice,
    updateModal: updateModalSlice,
    managers: managerSlice,
    createClient: createClientSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
