import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Feed from './pages/Feed';
import ProtectedRoute from './ProtectedRoute';
import { AuthContext } from './AuthContext';
import { PostsContext } from './PostsContext';
import { ModalContext } from './components/ModalContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <PostsContext>
          <ModalContext>
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
          </ModalContext>
        </PostsContext>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
