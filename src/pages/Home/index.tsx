import ContactList from '../../containers/contactList';
import SideBar from '../../containers/sideBar';

const Home = () => (
  <>
    <SideBar $showFilters={true} />
    <ContactList />
  </>
);

export default Home;
