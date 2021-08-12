import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';

// Import component
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
import Gallery from './components/Gallery/index';
import Admin from './components/Admin/index';

import { connect } from 'react-redux';
import { actSetProToStore } from './actions/actPro';
import { actSetCatToStore } from './actions/actCat';
import { actGetReviewByIdProduct } from './actions/actReview';

function App(props) {


  // State boolean
  const [isMiniCart, setIsMiniCart] = useState(false);

  // Hàm hiển thị giỏ hàng khi hover vào icon giỏ hàng
  const showMiniCart = () => {
    setIsMiniCart(!isMiniCart);
  }

  useEffect(() => {


    const fetchProducts = () => {
      let url = "http://localhost:3500/product";
      return fetch(url, { method: "GET" }
      )
        .then(res => res.json())
        .then(data => {
          props.setProToStore(data);
        });
    }
    const fetchCategories = () => {
      let url = "http://localhost:3500/category";
      return fetch(url, { method: "GET" }
      )
        .then(res => res.json())
        .then(data => {
          props.setCatToStore(data);
        });
    }
    const fetchReview = () => {
      let url = "http://localhost:3500/review";
      return fetch(url, { method: "GET" }
      )
        .then(res => res.json())
        .then(data => {
          props.getReview(data);
        })
    }

    fetchProducts();
    fetchCategories();
    fetchReview();

    return () => { }
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
        <Route path="/" exact component={() => <HotProduct hotProduct={props.products} />} />
        <Switch>
          <Route path="/login" component={UserFeature} />
          <Route path="/cart" component={() => <CartFeature />} />
          <Route path="/product" component={ProductFeature} />
          <Route path="/products" component={ProductFeature} />
          <Route path="/report" component={Report} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </main>
      <MessengerCustomerChat pageId="105512605076052" appId="620116525454173" />
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
    },
    getReview: (arrReview) => {
      dispatch(actGetReviewByIdProduct(arrReview))
    }
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.product,
    categories: state.category
  }
}

export default connect(mapStateToProps, mapDispatch)(App);
