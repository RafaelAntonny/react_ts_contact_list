import { useSelector } from 'react-redux';
import Contact from '../../components/contact';
import ContactModel from '../../models/Contact';
import { RootReducer } from '../../store';
import { Container, NoResults } from './style';

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts);
  const { term, criteria, caption } = useSelector(
    (state: RootReducer) => state.filter
  );

  const filterContacts = (): ContactModel[] => {
    let filteredContacts = items;
    if (term !== undefined) {
      return items.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (criteria === 'group' && caption) {
      filteredContacts = filteredContacts.filter((item) =>
        item.tags.some((tag) => tag.label === caption)
      );
    } else if (criteria === 'tag' && caption) {
      filteredContacts = filteredContacts.filter((item) =>
        item.tags.some((tag) => tag.label === caption)
      );
    }
    return filteredContacts;
  };

  const filteredContacts = filterContacts();

  return (
    <Container>
      <p>
        {items.length} contatos com o termo: &quot;{term}&quot;
      </p>
      <ul>
        <li>{term}</li>
        <li>{criteria}</li>
        <li>{caption}</li>
      </ul>
      <ul>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li key={contact.name}>
              <Contact {...contact} />
            </li>
          ))
        ) : (
          <NoResults>
            Não encontramos nada <i className="bi bi-search"></i> .
          </NoResults>
        )}
      </ul>
    </Container>
  );
};

export default ContactList;
