import Test1 from './components/test1';
import Test2 from './components/test2';
import { useSelector } from 'react-redux';

function App() {

  const data = useSelector(state => state.test);

  return (
    <>
      <Test1 test={'test1'} />
      <Test2 test={'test2'} />
      <h1>Номер теста:</h1>
      <h2>{data}</h2>
    </>
  );
}

export default App;