const createSlice = require("@reduxjs/toolkit");
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require('axios')

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUsers = createAsyncThunk('user/fetchUsers')

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requested: (state) => {
      state.loading = false;
    },
    success: (state) => {
      state.loading = false;
    },
    failure: (state) => {
      state.loading = false;
    },
  },
});
