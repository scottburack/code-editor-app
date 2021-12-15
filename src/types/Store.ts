import store from "../store";

export type RoootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
