import { useSelector } from 'react-redux';
import Contact from '../../components/contact';
import { Container } from './style';
import { RootReducer } from '../../store';

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts);

  return (
    <Container>
      <p>{items.length} contatos com o termo: &quot;termo&quot;</p>
      <ul>
        {items.map((contact) => (
          <li key={contact.name}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ContactList;
