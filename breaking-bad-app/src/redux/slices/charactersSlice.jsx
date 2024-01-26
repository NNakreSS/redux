import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// async thunk midlwares
export const fetchCharacters = createAsyncThunk(
  "characters/getCharacter",
  async () => {
    const { data } = await axios(
      import.meta.env.VITE_API_BASE_ENDPOINT + "/character"
    );
    return data.results;
  }
);

const initialState = {
  items: [
    { name: "selami" },
    { name: "serkan" },
    { name: "hasan" },
    { name: "ali" },
    { name: "veli" },
    { name: "axon" },
    { name: "json" },
  ],
};

const reducers = {};

const CharactersSlice = createSlice({
  name: "character",
  initialState,
  reducers,
  extraReducers: (build) => {
    build.addCase(fetchCharacters.fulfilled, (state, action) => {
      console.log(action.payload);
      state.items = action.payload;
    });
  },
});

export default CharactersSlice.reducer;
export const {} = CharactersSlice.actions;
