import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  age: number;
}

const initialState: UserState = {
  name: 'User 1',
  age: 23,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUsersAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    changeUsersName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { changeUsersAge, changeUsersName } = userSlice.actions;
