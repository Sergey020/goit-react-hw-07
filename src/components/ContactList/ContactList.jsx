import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectVisibleContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
