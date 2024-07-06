import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6687dfac0bc7155dc0197b44.mockapi.io";

export const fetchContacts  = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI)=>{
    try{
    const response = await axios.get('/contacts')
    return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.mesage);
    }
  }
);
// console.log(fetchContacts);
export const deleteContact = createAsyncThunk('contacts/deleteContact',async (contactId,thunkAPI)=>{
    try{const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
} catch (error) {
    return thunkAPI.rejectWithValue(error.massege);
}
    
});