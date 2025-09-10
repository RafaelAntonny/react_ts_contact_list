import { Provider } from 'react-redux';
import ContactList from './containers/contactList';
import SideBar from './containers/sideBar';
import store from './store';
import GlobalStyle, { Container } from './styles';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <ContactList />
      </Container>
    </Provider>
  );
}

export default App;
