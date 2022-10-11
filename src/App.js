import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import QuizChart from './components/QuizChart/QuizChart';
import Question from './components/QuizQuestion/Question';
import Main from './Layout/Main';





function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [


        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },

        {
          path: 'home',
          loader:  ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
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
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Question></Question>
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
