import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './routes/Posts';
import NewPost from './routes/NewPost'
import RootLayout from './routes/RootLayout';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([ // layout route
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [{ path: '/create-post', element: <NewPost /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
