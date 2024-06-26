import css from './ContactList.module.css';
  import ContactItem from './components/Contact/contact';



 export default function ContactList({contacts, onDelete}){


    return(    
        <ul className={css.list}>
        {contacts.map((contact)=>{
                return<li key={contact.id}>

                <ContactItem contact={contact} onDelete={onDelete}/>
                    </li>
            })
            }	
      </ul>
      
    )
}
