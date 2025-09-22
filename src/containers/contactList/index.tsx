import { useSelector } from 'react-redux';
import Contact from '../../components/contact';
import ContactModel from '../../models/Contact';
import { RootReducer } from '../../store';
import { NoResults } from './style';
import { MainContainer, Title } from '../../styles';

const ContactList = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.items);
  const tags = useSelector((state: RootReducer) => state.tags.items);
  const { term, criteria, caption } = useSelector(
    (state: RootReducer) => state.filter
  );

  const filterContacts = (): ContactModel[] => {
    let filteredContacts = contacts;

    if (term?.trim()) {
      filteredContacts = filteredContacts.filter((contact) =>
        contact.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if ((criteria === 'group' || criteria === 'tag') && caption) {
      filteredContacts = filteredContacts.filter((contact) =>
        contact.tagIds.some((tagId) => {
          const tag = tags.find((t) => t.id === tagId);
          return tag && tag.kind === criteria && tag.label === caption;
        })
      );
    }

    return filteredContacts;
  };

  const showFilterResult = (quantity: number) => {
    let message = '';

    const compliment =
      term !== undefined && term.length > 0 ? `e "${term}"` : '';

    if (criteria === 'all') {
      message = `${quantity} contatos como: todos ${compliment}`;
    } else {
      message = `${quantity} contatos como ${`${criteria}: "${caption}"`} ${compliment}`;
    }

    return message;
  };

  const filteredContacts = filterContacts();
  const message = showFilterResult(filteredContacts.length);

  return (
    <MainContainer>
      <Title>{message}</Title>
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
    </MainContainer>
  );
};

export default ContactList;
