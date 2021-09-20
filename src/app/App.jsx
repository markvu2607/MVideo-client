import 'styles/_App.scss'
import Layout1 from 'app/layouts/layout1/Layout1';
import Home from 'app/views/Home/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="container-fluid app">
      <div className="container">
        <Provider store={store}>
          <Layout1>
            <Home />
          </Layout1>
        </Provider>
      </div>
    </div>
  );
}

export default App;
