import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.contact}>
        <div>
          <FaUser />
          <span>{name}</span>
        </div>
        <div>
          <FaPhone />
          <span>{number}</span>
        </div>
      </div>
      <div className={s.deleteWrap}>
        <button onClick={() => deleteContact(id)} className={s.deleteBtn}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
