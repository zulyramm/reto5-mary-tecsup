import { RouterProvider } from 'react-router-dom';
import './App.css';
import Footer from './components/sections/Footer';
import { primaryRoute } from './routes/primaryRoute';


function App() {
  const credits = {
    year: new Date().getFullYear(),
    author: 'mary luz'
  };
  return (
    <>
    
    
    <RouterProvider router={primaryRoute} />,

    <Footer credits={credits}/>,
    

    </>
  );
}

export default App;