/** LIBRARIES */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** MODELS */
import { type IAlertState, type ICommonState } from "@src/models/common";

/** OTHER */

const initialCommonState: ICommonState = {
  alert: {
    colorMode: "success",
    text: null,
  },
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialCommonState,
  reducers: {
    setAlert: (state, { payload }: PayloadAction<IAlertState>) => ({
      ...state,
      alert: payload,
    }),
  },
});

export const commonActions = commonSlice.actions;

export default commonSlice.reducer;
