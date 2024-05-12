import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from './ContactItem.module.css'


export default function ContactItem ({contact:{ id, name, number}, onDelete}){
    return (
        <div className={css.fullContact}>
          <div className={css.contactInfo}>
         
          <p><IoPerson />   {name}</p>
          <p><FaPhoneAlt />   {number}</p>
          </div>        

             <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>

        </div>
    )
}