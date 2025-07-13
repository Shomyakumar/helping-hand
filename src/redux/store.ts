    import { configureStore } from '@reduxjs/toolkit';
   import stepReducer from "./slices/stepReducer"

    export const store = configureStore({
      reducer: {
        step: stepReducer,
  
      },
    });

    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;