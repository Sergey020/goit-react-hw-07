import { VscAccount } from "react-icons/vsc";
import { VscCallOutgoing } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleClickDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      <div>
        <p>
          <VscAccount />
          {name}
        </p>
        <p>
          <VscCallOutgoing />
          {number}
        </p>
      </div>
      <button onClick={handleClickDelete}>Delete</button>
    </div>
  );
};

export default Contact;
