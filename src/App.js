import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import Landing from './pages/Landing';
import store from './redux/store';
import './styles/main.css';

function App() {
  return (
    <Provider store={store} >
     <Landing />
    </Provider>
  );
}

export default App;
