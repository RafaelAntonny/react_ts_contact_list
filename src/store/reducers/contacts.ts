import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Contact from '../../models/Contact';

type ContactsState = {
  items: Contact[];
};

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Rafael Andrade',
      email: 'rafaelandrade@gmail.com',
      phoneNumber: '11 12345-6789',
      tags: [
        { id: 1, label: 'trabalho' },
        { id: 2, label: 'amigo' }
      ]
    },
    {
      id: 2,
      name: 'Maria Silva',
      email: 'maria.silva@gmail.com',
      phoneNumber: '11 98765-4321',
      tags: [{ id: 3, label: 'amigo' }]
    },
    {
      id: 3,
      name: 'João Pereira',
      email: 'joao.pereira@gmail.com',
      phoneNumber: '11 11223-4455',
      tags: [{ id: 4, label: 'trabalho' }]
    },
    {
      id: 4,
      name: 'Ana Costa',
      email: 'ana.costa@gmail.com',
      phoneNumber: '11 99887-6655',
      tags: [{ id: 5, label: 'familia' }]
    },
    {
      id: 5,
      name: 'Lucas Mendes',
      email: 'lucas.mendes@gmail.com',
      phoneNumber: '11 55667-8899',
      tags: [
        { id: 6, label: 'amigo' },
        { id: 7, label: 'trabalho' }
      ]
    }
  ]
};

const contactsSlices = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      );

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload;
      }
    }
  }
});

export const { remove, edit } = contactsSlices.actions;

export default contactsSlices.reducer;
