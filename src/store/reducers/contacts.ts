import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Contact from '../../models/Contact';

const contactsSlices = createSlice({
  name: 'contacts',
  initialState: [
    new Contact(
      1,
      'Rafael Andrade',
      'rafaelandrade@gmail.com',
      '11 12345-6789',
      [
        { id: 1, label: 'trabalho' },
        { id: 2, label: 'amigo' }
      ]
    ),
    new Contact(2, 'Maria Silva', 'maria.silva@gmail.com', '11 98765-4321', [
      { id: 3, label: 'amigo' }
    ]),
    new Contact(3, 'João Pereira', 'joao.pereira@gmail.com', '11 11223-4455', [
      { id: 4, label: 'trabalho' }
    ]),
    new Contact(4, 'Ana Costa', 'ana.costa@gmail.com', '11 99887-6655', [
      { id: 5, label: 'familia' }
    ]),
    new Contact(5, 'Lucas Mendes', 'lucas.mendes@gmail.com', '11 55667-8899', [
      { id: 6, label: 'amigo' },
      { id: 7, label: 'trabalho' }
    ])
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((contact) => contact.id !== action.payload);
    }
  }
});

export const { remove } = contactsSlices.actions;

export default contactsSlices.reducer;
