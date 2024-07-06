import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";



function App() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.contacts.loading)
  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader/>}
      <ContactList />
    </div>
  );
}

export default App;
