import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import HeroSection from './components/HeroSection/index';
import HotProduct from './components/HotProduct/index';
import MiniCart from './components/MiniCart/index';
import OurServiceSection from './components/OurServiceSection/index';
import UserFeature from './features/User/index';
import CartFeature from './features/Cart/index';
import ProductFeature from './features/Product/index';
import Report from './components/Report/index';

import { connect } from 'react-redux';
import { actSetProToStore } from './actions/actPro';
import { actSetCatToStore } from './actions/actCat';





function App(props) {
  const [category, setCategory] = useState([
    { id: 0, name: 'Giày', slot: 1, active: 1 },
    { id: 1, name: 'Quần', slot: 2, active: 1 },
    { id: 2, name: 'Áo', slot: 3, active: 1 }
  ]);
  const [products, setProducts] = useState([
    { id: 0, name: 'Nike Air Max 2021', amount: 0, price: 200000, salePrice: 1, imageURL: ['./images/shoes-1.jpg', '1', '2', '3', '4'], description: 'Nike', category: 0, style: 'Lifestyle', createdDate: new Date(), views: 1, likes: 1, color: 'White', size: [39, 40, 41, 42], isSale: 0 },
    { id: 1, name: 'Nike Air Force 1', amount: 0, price: 350000, salePrice: 1, imageURL: ['./images/shoes-2.jpg', '1', '2', '3', '4'], description: 'Nike', category: 0, style: 'Air Force 1', createdDate: new Date(), views: 1, likes: 1, color: 'Pink', size: [39, 40, 41, 42], isSale: 1 },
    { id: 2, name: 'Nike Jordan 1 x Dior', amount: 0, price: 545000, salePrice: 1, imageURL: ['./images/shoes-3.jpg', '1', '2', '3', '4'], description: 'Nike', category: 0, style: 'Jordan', createdDate: new Date(), views: 1, likes: 1, color: 'Cyan', size: [39, 40, 41, 42], isSale: 0 },
    { id: 3, name: 'Nike Phantom GT2 Elite FG', amount: 0, price: 299000, salePrice: 1, imageURL: ['./images/shoes-4.jpg', '1', '2', '3', '4'], description: 'Nike', category: 0, style: 'Soccer', createdDate: new Date(), views: 1, likes: 1, color: 'Blue', size: [39, 40, 41, 42], isSale: 1 },
    { id: 4, name: 'Nike Sportwear', amount: 0, price: 499000, salePrice: 1, imageURL: ['./images/shoes-5.jpg', '1', '2', '3', '4'], description: 'Nike', category: 1, style: 'Shorts', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
    { id: 5, name: 'Nike Sportwear Alumni', amount: 0, price: 299000, salePrice: 1, imageURL: ['./images/shoes-6.jpg', '1', '2', '3', '4'], description: 'Nike', category: 1, style: 'Shorts', createdDate: new Date(), views: 1, likes: 1, color: 'White', size: [39, 40, 41, 42], isSale: 1 },
    { id: 6, name: 'Nike Team USA', amount: 0, price: 199000, salePrice: 1, imageURL: ['./images/shoes-7.jpg', '1', '2', '3', '4'], description: 'Nike', category: 1, style: 'Pants', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
    { id: 7, name: 'Nike Sportwear Club Fleece', amount: 1, price: 199000, salePrice: 1, imageURL: ['./images/shoes-8.jpg', '1', '2', '3', '4'], description: 'Nike', category: 1, style: 'Shorts', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
    { id: 8, name: 'Nike Sportwear Club Fleece', amount: 1, price: 899000, salePrice: 1, imageURL: ['0', '1', '2', '3', '4'], description: 'Nike', category: 2, style: 'Hoodies', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
    { id: 9, name: 'Nike Sportwear Tech Fleece', amount: 1, price: 459000, salePrice: 1, imageURL: ['0', '1', '2', '3', '4'], description: 'Nike', category: 2, style: 'Hoodies', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
    { id: 10, name: 'Nike Sportwear Club', amount: 0, price: 499000, salePrice: 1, imageURL: ['0', '1', '2', '3', '4'], description: 'Nike', category: 2, style: 'T-shirts', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
    { id: 11, name: 'Nike x Space Jam', amount: 0, price: 399000, salePrice: 1, imageURL: ['0', '1', '2', '3', '4'], description: 'Nike', category: 2, style: 'T-shirts', createdDate: new Date(), views: 1, likes: 1, color: 'Gray', size: [39, 40, 41, 42], isSale: 1 },
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);


  // State boolean
  const [isMiniCart, setIsMiniCart] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Hàm hiển thị giỏ hàng khi hover vào icon giỏ hàng
  const showMiniCart = () => {
    setIsMiniCart(!isMiniCart);
  }

  React.useEffect(() => {
    let url = "http://localhost:3500/product";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        props.setProToStore(data);
        console.log(data);
      });

    let url2 = "http://localhost:3500/category";
    fetch(url2)
      .then(res => res.json())
      .then(data => {
        props.setCatToStore(data);
        console.log(data);
      });
  }, [])

  return (
    <>
      <Header showMiniCart={showMiniCart} />
      <main>
        <aside onMouseLeave={showMiniCart} onMouseEnter={showMiniCart} className={isMiniCart ? "wrapMiniCart show" : "wrapMiniCart"}>
          <MiniCart />
        </aside>
        <Route path="/" exact component={HeroSection} />
        <Route path="/" exact component={OurServiceSection} />
        <Route path="/" exact component={() => <HotProduct hotProduct={products} />} />
        <Route path="/login" component={UserFeature} />
        <Route path="/cart" component={() => <CartFeature selectedProducts={selectedProducts} />} />
        <Route path="/product" component={ProductFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/report" component={Report} />
      </main>
      <Footer />
    </>
  );
}



const mapDispatch = (dispatch) => {
  return {
    setProToStore: (arrPro) => {
      dispatch(actSetProToStore(arrPro));
    },
    setCatToStore: (arrCat) => {
      dispatch(actSetCatToStore(arrCat));
    }
  };
};
export default connect(null, mapDispatch)(App);
