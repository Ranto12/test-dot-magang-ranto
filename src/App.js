import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { PrivateRoute, PrivateRouteLogRes } from './component/PrivateRouter';
import Hasil from './page/Hasil';
import Login from './page/Login';
import Soal from './page/soal';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRouteLogRes/>}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute/>}>
          <Route path="/soal" element={<Soal />} />
          <Route path="/" element={<Soal />} />
          <Route path="/hasil" element={<Hasil />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
