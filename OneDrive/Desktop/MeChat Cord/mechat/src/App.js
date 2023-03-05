import React,{lazy,Suspense} from 'react';
import './App.scss'
import {auth} from './firebase/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutSidebar from './pages/Layout_Sidebar/Layout_Sidebar';
import Spinner from './components/Spinner/Spinner';
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from './pages/ErrorBoundaries/Errorboundaries.styles.jsx'
import ServerComponent from './pages/ServerComponent/ServerComponent.jsx'
import Homepage from './pages/Homepage/HomePage.jsx';
const Login=lazy(()=>import('./pages/Login/Login.jsx'));
const ServerPage=lazy(()=>import('./pages/ServerPage/ServerPage'));
const ErrorFallback=({error,resetErrorBoundary})=>{
  return <>
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png'/>
      <ErrorImageText>Sorry this page is broken</ErrorImageText>
      <button onClick={resetErrorBoundary}>Try again</button>
    </ErrorImageOverlay>
  </>
}

function App() {
const [user]=useAuthState(auth);
  return (
    <div className="App">
      <main>

        {!user && <Navigate to='/discord-clone'/>}
        <Routes>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Spinner/>}>
          <Route exact path='/discord-clone' render={()=>auth.currentUser?<Navigate to='/discord-clone/channels/@me'/>:<Login/>} />
          <Route path='/discord-clone/channels' component={ServerComponent}/>
            <Routes>
              <Route exact path='/discord-clone/channels/@me' render={()=><Homepage/>}/>
              <Route path='/discord-clone/channels/:serverId' render={(props)=><LayoutSidebar><ServerPage {...props}/></LayoutSidebar>}/>
            </Routes>
            </Suspense>
          </ErrorBoundary>
        </Routes>
      </main>
    </div>
  );
}

export default App;
