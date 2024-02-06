import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import SigninPage from './Pages/SigninPage';

function App() {
  // const { id } = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:id/home' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/signin' element={<SigninPage></SigninPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
