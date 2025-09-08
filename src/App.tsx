import ContactList from './containers/contactList';
import SideBar from './containers/sideBar';
import GlobalStyle, { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <ContactList />
      </Container>
    </>
  );
}

export default App;
