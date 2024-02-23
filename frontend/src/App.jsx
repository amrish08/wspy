import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import {SignedIn,SignedOut,RedirectToSignIn} from '@clerk/clerk-react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home/>}/>
      <Route path='/dashboard' element={
        <>
        <SignedIn>
          <Dashboard/>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn/>
        </SignedOut>
        </>
      }/>
    </>
  )
);

function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
