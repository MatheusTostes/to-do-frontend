import { get } from "lodash-es";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Reducers } from "../reducers";

var dispatch, store;

export const initStore = ({ initialState }) => {
    store = configureStore({
      reducer: Reducers,
      preloadedState: initialState,
      middleware: [
        ...getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false,
        }),
      ],
    });
    dispatch = store.dispatch;
    return store;
  },
  getState = (arg) =>
    arg === undefined ? store.getState() : get(store.getState(), arg);

export { dispatch, store };

export default getState;
