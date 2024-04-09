import React, { useState } from "react";
import Modal from "react-modal";
import Login from "../User/Login.jsx";
import SignUp from "../User/SignUp.jsx";
import Detail from "../Detail/Detail.jsx";
import Button from "react-bootstrap/Button";
import "./NavStyle.css";
import Tag from "../Tag/Tag.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Nav() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);
  const [detailModalIsOpen, setDetailModalIsOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalIsOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalIsOpen(false);
  };

  const openSignUpModal = () => {
    setSignUpModalIsOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalIsOpen(false);
  };

  const openDetailModal = () => {
    setDetailModalIsOpen(true);
  };

  const closeDetailModal = () => {
    setDetailModalIsOpen(false);
  };

  return (
    <section id="nav">
      <div className="-brand">
        <div className="-logo">
          <img src="./banner.png" alt="logo" />
        </div>
      </div>

      <div className="-center">
        <div className="-search">
          <div className="-search-box">
            <input type="text" className="-search-input" />
          </div>
          <div className="-btn">
            <span>
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
        <div className="-tag">
          <Tag />
        </div>
      </div>
      <div className="-end">
        <Button
          className="-end-item"
          variant="outline-warning"
          onClick={openDetailModal}
        >
          <span>
            <i class="fa-solid fa-heart"></i>
          </span>
        </Button>{" "}
        <Button
          className="-end-item"
          variant="outline-success"
          onClick={openLoginModal}
        >
          LOGIN
        </Button>{" "}
        <Button
          className="-end-item"
          variant="outline-warning"
          onClick={openSignUpModal}
        >
          SIGN UP
        </Button>{" "}
      </div>
      <Modal
        isOpen={loginModalIsOpen}
        onRequestClose={closeLoginModal}
        contentLabel="Login Modal"
      >
        <Login />
      </Modal>
      <Modal
        isOpen={signUpModalIsOpen}
        onRequestClose={closeSignUpModal}
        contentLabel="Sign Up Modal"
      >
        <SignUp />
      </Modal>
      <Modal // New Detail Modal
        isOpen={detailModalIsOpen}
        onRequestClose={closeDetailModal}
        contentLabel="Detail Modal"
      >
        <Detail />
      </Modal>
    </section>
  );
}

export default Nav;
