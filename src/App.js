import { Route, Routes } from 'react-router';
import { AboutComponent } from './AboutComponent';
import './App.css';
import ContactComponent from './ContactComponent';
import BuggyCounter from './ErrorBoundry/BuggyCounter';

import { HomeComponent } from './HomeComponent';
import { NavComponent } from './NavComponent';
import { MyErrorBoundaryExample } from './ErrorBoundry/MyErrorBoundaryExample'
import UserComponent from './User/UserComponent';
import ProfileComponent from './User/ProfileComponent';
import { AccountComponent } from './User/AccountComponent';
import NotFoundComponent from './NotFoundComponent';

function App() {
  return (
    <div className="App">
      <NavComponent />

      <div className='container'>
        <MyErrorBoundaryExample>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/error-boundry" element={<BuggyCounter />} />
            <Route path="/user" element={<UserComponent />}>
              <Route path="/user/profile" element={<ProfileComponent />} />
              <Route path="/user/account" element={<AccountComponent />} />
            </Route>
            <Route path="*" element={<NotFoundComponent />} />



          </Routes>
        </MyErrorBoundaryExample>
      </div>
      {/* <MyErrorBoundaryExample>
        <h1>Error Boundry Demo</h1>
        <BuggyCounter />
      </MyErrorBoundaryExample> */}
    </div>
  );
}

export default App;
