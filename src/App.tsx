import './App.css';
import Login from './pages/Login';
import Feed from './pages/Feed';
import ProtectedRoute from './ProtectedRoute';
import { PostsContext } from './components/context/PostsContext';
import { ModalContext } from './components/context/ModalContext';
import { AuthContext } from './components/context/AuthContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <PostsContext>
          <ModalContext>
            <HelmetProvider>
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/feed"
                  element={
                    <ProtectedRoute>
                      <Feed />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </HelmetProvider>
          </ModalContext>
        </PostsContext>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
