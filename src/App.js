import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Banner from './Banner/Banner';
import NewArrival from './Components/NewArrival/NewArrival';
import Features from './Components/Features/Features'
import ClassicSpotlight from './Components/ClassiSpotlight/ClassicSpotlight';
import ShopCard from './Components/ShopBySport/ShopBySport';
import GenYouCollection from './Components/GenYouCollection/GenYouCollection';
import Trending from './Components/Trending/Trending';
import MemberBenefits from './Components/MemberBenefits/MemberBenefits';
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer';
import ProductPage from './Pages/ProductPage/ProductPage';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Cart from './Components/Cart/Cart';
import Products from './Pages/Products/Products';
import { CartProvider } from './context /CartContex';


function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider >
          <Routes>
            <Route
              path='/'
              element={
                <div>
                  <Header />
                  <NavBar />
                  <Banner />
                  <NewArrival />
                  <Features />
                  <ClassicSpotlight />
                  <ShopCard />
                  <GenYouCollection />
                  <Trending />
                  <MemberBenefits />
                  <Menu />
                  <Footer />
                </div>
              }
            />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/menu' element={<Products />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
