 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import QuizChart from './components/QuizChart/QuizChart';

import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      children:[


        {path: '/',
        element: <Home></Home>
      },

      {
        path: 'home',
        element: <Home></Home>
      },
      
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'statistics',
        element: <QuizChart></QuizChart>
      },
      
      ]
    }
  ]);
  return (
    <div className="App">

     
     <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
