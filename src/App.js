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
import UserDeatilComponent from './User/UserDeatilComponent';
import { lazy, Suspense } from 'react';
import CounterComponent from './Hooks/CounterComponent';
import UseCallBackDemoComponent from './Hooks/UseCallBackDemoComponent';
import UseRefComponent from './UseRefComponent';

const LazyComponent = lazy(() => {
  // import("./CodeSplitting/LazyComponent") // with out delay

  // to add some delay 

  return new Promise(resolve => {
    setTimeout(() => resolve(import("./CodeSplitting/LazyComponent")), 1000)
  });
})

function App() {
  return (
    <div className="App">
      <NavComponent />

      <div className='container'>
        <MyErrorBoundaryExample>
          <Suspense fallback={<div>Loading...</div>}>

            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/contact" element={<ContactComponent />} />
              <Route path="/error-boundry" element={<BuggyCounter />} />
              <Route path="/user" element={<UserComponent />}>
                <Route path="profile" element={<ProfileComponent />} />
                <Route path="account" element={<AccountComponent />} />
                <Route path=":userId" exact element={<UserDeatilComponent />} />
              </Route>
              <Route path="/lazy" element={<LazyComponent />} />
              <Route path="/memo" element={<CounterComponent />} />
              <Route path="/callback" element={<UseCallBackDemoComponent />} />
              <Route path="/ref" element={<UseRefComponent />} />
              <Route path="*" element={<NotFoundComponent />} />



            </Routes>
          </Suspense>
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
