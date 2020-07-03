import React from 'react';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalStyled from './styles/global';

import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyled />
  </>
);

export default App;
