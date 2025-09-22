import Form from '../../containers/form';
import SideBar from '../../containers/sideBar';

const Create = () => {
  return (
    <>
      <SideBar $showFilters={false} />
      <Form />
    </>
  );
};

export default Create;
