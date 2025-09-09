import Contact from '../../components/contact';
import { Container } from './style';

const contacts = [
  {
    name: 'Rafael Andrade',
    tags: [{ label: 'trabalho' }, { label: 'amigo' }],
    email: 'rafaelandrade@gmail.com',
    phoneNumber: '11 12345-6789'
  },
  {
    name: 'Maria Silva',
    tags: [{ label: 'amigo' }],
    email: 'maria.silva@gmail.com',
    phoneNumber: '11 98765-4321'
  },
  {
    name: 'João Pereira',
    tags: [{ label: 'trabalho' }],
    email: 'joao.pereira@gmail.com',
    phoneNumber: '11 11223-4455'
  },
  {
    name: 'Ana Costa',
    tags: [{ label: 'familia' }],
    email: 'ana.costa@gmail.com',
    phoneNumber: '11 99887-6655'
  },
  {
    name: 'Lucas Mendes',
    tags: [{ label: 'amigo' }, { label: 'trabalho' }],
    email: 'lucas.mendes@gmail.com',
    phoneNumber: '11 55667-8899'
  }
];

const ContactList = () => (
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

export default ContactList;
