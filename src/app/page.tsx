import Image from "next/image";
import Navbar from './components/Resusable_components/Navbar'
import Footer from './components/Resusable_components/Footer'
import './page.css'
import MainPage from './components/Main';

export default function Home() {
  return (
    <>
      <div className="Port_MainPage">

        <Navbar />
       <MainPage/>
         <Footer />
      </div>
    </>
  );
}
