import { Route, Routes } from 'react-router-dom';

import './globals.css';
import SignInForm from './_auth/forms/SignInForm';
import { Home } from './_root/pages';
import SignUpForms from './_auth/forms/SignUpForm';
import RootLayout from './_root/RootLayout';
import AuthLayout from './_auth/AuthLayout';


function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SignInForm />} />
          <Route path='/sign-up' element={<SignUpForms />} />
        </Route>


        {/* private routes */}
        <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        </Route>

      </Routes>

    </main>
  )
}

export default App;
