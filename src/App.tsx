import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Modal from "./components/modal/Modal";
import Form from "./components/form/Form";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Layout/Header";
import NotFund from "./pages/NotFund";
function App() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Header onClick={handleOpenModal} />

      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFund/>} />
      </Routes>

      {showModal && (
        <Modal onClose={hideModalHandler}>
          <Form />
        </Modal>
      )}
    </div>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
export default WrappedApp;
