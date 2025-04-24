import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Feed from './pages/Feed';
import ProtectedRoute from './ProtectedRoute';
import { GlobalContext } from './Context';

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
        </Routes>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
