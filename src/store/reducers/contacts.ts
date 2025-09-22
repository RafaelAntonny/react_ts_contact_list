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
      tagIds: [2, 3]
    },
    {
      id: 2,
      name: 'Maria Silva',
      email: 'maria.silva@gmail.com',
      phoneNumber: '11 98765-4321',
      tagIds: [1]
    },
    {
      id: 3,
      name: 'João Pereira',
      email: 'joao.pereira@gmail.com',
      phoneNumber: '11 11223-4455',
      tagIds: [1]
    },
    {
      id: 4,
      name: 'Ana Costa',
      email: 'ana.costa@gmail.com',
      phoneNumber: '11 99887-6655',
      tagIds: [4]
    },
    {
      id: 5,
      name: 'Lucas Mendes',
      email: 'lucas.mendes@gmail.com',
      phoneNumber: '11 55667-8899',
      tagIds: [2, 5]
    }
  ]
};

const contactsSlices = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    removeContact: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      );

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload;
      }
    },
    createContact: (state, action: PayloadAction<Contact>) => {
      const contactAlreadyExists = state.items.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      if (contactAlreadyExists) {
        alert('Um contato com esse nome já existe');
      } else {
        state.items.push(action.payload);
      }
    }
  }
});

export const { removeContact, editContact, createContact } =
  contactsSlices.actions;

export default contactsSlices.reducer;
