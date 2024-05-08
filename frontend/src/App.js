import Footer from './components/Footer';
import Header from './components/Header';

import store from './utils/store';
import { Provider } from 'react-redux'

import HomeScreen from './screen/HomeScreen';
import LogIn from './screen/LoginScreen';
import Registration from './screen/RegisterScreen';
import Cart from './screen/CartScreen'
import ProductDetails from './screen/ProductDetailsScreen';
import BuyProduct from './screen/BuyProductScreen';
import UserProfile from './screen/UserProfileScreen';
import ManageUser from './screen/ManageUserScreen';
import UpdateProfile from './screen/ProfileUpdateScreen';
import ShippingPage from './screen/ShippingScreen';
import PaymentPage from './screen/PaymentScreen';

import UserAddress from './components/UserAdderess';

import { createBrowserRouter, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <>
          <HomeScreen />
          <Footer />
        </>
      },
      {
        path: "/checkout/cart",
        element: <Cart />
      },
      {
        path: "/checkout/address",
        element: <ShippingPage />
      },
      {
        path: "/checkout/payment",
        element: <PaymentPage />
      },
      {
        path: "/users/login",
        element: <LogIn />
      },
      {
        path: "/users/register",
        element : <Registration />
      },
      {
        path: "/users/profile",
        element : <UserProfile />
      },
      {
        path : "/users/profile/update",
        element : <UpdateProfile />
      },
      {
        path: "/users/address",
        element : <UserAddress />
      },
      {
        path: "/users/manage",
        element : <ManageUser />
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      },
      {
        path: "/product/buy/:id",
        element : <BuyProduct />
      }
    ]
  }
])

export default appRouter;
