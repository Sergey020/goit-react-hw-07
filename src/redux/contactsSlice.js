import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts,deleteContact, addContact} from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
  //   addContact: (state, action) => {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(
  //       (contact) => contact.id !== action.payload
  //     );
  //   },

  // },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending,(state)=>{
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled,(state, action)=>{
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id)
      })
      .addCase(deleteContact.rejected,(state, action)=>{
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending,(state)=>{
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled,(state, action)=>{
        state.loading = false;
        state.items.push(action.payload)
      })
      .addCase(addContact.rejected,(state, action)=>{
        state.loading = false;
        state.error = true;
      })
});

const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
export default contactsReducer;
