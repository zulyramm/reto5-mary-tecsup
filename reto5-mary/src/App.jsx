import { RouterProvider } from 'react-router-dom';
import './App.css';
import Figure from './components/sections/Figure'
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


      <main>
        <Figure/>

    

      </main>
      <Footer credits={credits} />,


    </>
  );
}

export default App;