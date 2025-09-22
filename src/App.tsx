import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import store from './store';
import GlobalStyle, { Container } from './styles';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/create',
    element: <Create />
  }
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  );
}

export default App;
