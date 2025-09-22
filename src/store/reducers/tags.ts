import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Tag from '../../models/Tag';
import theme from '../../styles/theme';

type TagsState = {
  items: Tag[];
};

const initialState: TagsState = {
  items: [
    {
      id: 1,
      label: 'Família',
      color: theme.success,
      kind: 'group',
      contactIds: [2, 3]
    },
    {
      id: 2,
      label: 'Amigos',
      color: theme.friend,
      kind: 'group',
      contactIds: [5]
    },
    {
      id: 3,
      label: 'Trabalho',
      color: theme.work,
      kind: 'group',
      contactIds: [1]
    },
    {
      id: 4,
      label: 'Veterinária',
      color: '#00ff55',
      kind: 'tag',
      contactIds: [4]
    },
    { id: 5, label: 'Doutor', color: '#ff0033', kind: 'tag', contactIds: [5] }
  ]
};

const tagsSlices = createSlice({
  name: 'tags',
  initialState: initialState,
  reducers: {
    removeTag: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    createTag: (state, action: PayloadAction<Tag>) => {
      const tagAlreadyExists = state.items.find(
        (contact) =>
          contact.label.toLowerCase() === action.payload.label.toLowerCase()
      );

      if (tagAlreadyExists) {
        alert('Um contato com esse nome já existe');
      } else {
        state.items.push(action.payload);
      }
    }
  }
});

export const { removeTag, createTag } = tagsSlices.actions;

export default tagsSlices.reducer;
