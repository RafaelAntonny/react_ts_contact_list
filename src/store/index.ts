import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './reducers/contacts';
import filterReducer from './reducers/filter';
import tagReducer from './reducers/tags';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    tags: tagReducer
  }
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
