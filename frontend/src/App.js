import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HotelSearchBar from './components/HotelSearchBar';
import Footer from './components/Footer';
import HotelCard from './components/HotelCard';
import NewsletterSignup from './components/NewsletterSignup';
import HotelList from './components/HotelList';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HotelSearchBar />
      <HotelCard />
      <Reviews />
      <HotelList />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;
