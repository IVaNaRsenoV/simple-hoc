import { withApp } from './hoc/withApp';

function App(props) {
  const { item } = props;
  console.log('App.js')

  return (
    <div className="App">
      {item}
    </div>
  );
}

export default withApp(App);