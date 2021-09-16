import 'styles/_App.scss'
import Layout1 from 'app/layouts/layout1/Layout1';
import Home from 'app/views/Home/Home';

function App() {
  return (
    <div className="container-fluid app">
      <div className="container">
        <Layout1>
          <Home />
        </Layout1>
      </div>
    </div>
  );
}

export default App;
