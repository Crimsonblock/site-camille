// import logo from './logo.svg';
import './App.css';
import Bio from './modules/Bio';
import Root from './modules/Root';
import Repertoir from './modules/Repertoir';
import Error from './modules/Error';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Media } from './modules/Media';

// 5ca0b8



const router = createBrowserRouter([{
  path: "/",
  element: <Root/>,
  errorElement: <Error/>,
  children:[
    {
      path: "/",
      element: <Bio/>
    },
    {
      path: "/repertoir",
      element: <Repertoir/>
    },
    {
      path:"/contact",
      element: <div>En construction</div>
    },
    {
      path:"/media",
      element: <Media/>
    }
  ]
}]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
