import { useSelector } from 'react-redux';
import Contact from '../../components/contact';
import { Container } from './style';
import { RootReducer } from '../../store';

const ContactList = () => {
  const { contacts } = useSelector((state: RootReducer) => state);

  return (
    <Container>
      <p>{contacts.length} contatos com o termo: &quot;termo&quot;</p>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.name}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ContactList;
