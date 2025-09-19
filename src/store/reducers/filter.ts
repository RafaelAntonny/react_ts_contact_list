import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FilterState = {
  term?: string;
  criteria: 'group' | 'tag' | 'all';
  caption?: string | string[];
};

const initialState: FilterState = {
  term: '',
  criteria: 'all'
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criteria = action.payload.criteria;
      state.caption = action.payload.caption;
    }
  }
});

export const { changeTerm, changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
