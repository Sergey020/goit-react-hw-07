import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6687dfac0bc7155dc0197b44.mockapi.io";

export const fetchContacts  = createAsyncThunk('contacts/fetchContacts', async ()=>{
    const response = await axios.get('/contacts')
    return response.data;
});