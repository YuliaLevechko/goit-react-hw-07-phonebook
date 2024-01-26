import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './ContactListSlice';
import { filtersReducer } from './FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});