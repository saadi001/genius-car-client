import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes/Route';

function App() {
  return (
    <div  className='max-w-screen-lg mx-auto '>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
