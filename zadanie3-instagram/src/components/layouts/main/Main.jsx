import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'components/elements/header/Header';
import Footer from 'components/elements/footer/Footer';
import { observeOnlyNew } from 'services/firebase';
import { MainContext } from 'contexts/main';

function Main({ children }) {
  const { currentUser } = useContext(MainContext);
  useEffect(() => {
    observeOnlyNew('notifications', (notification) => {
      if (notification.reciepient === currentUser.displayName) {
        toast('Ktoś polajkował twoj komentarz');
      }
    });
  }, []);

  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
