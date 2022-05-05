import React, { useState } from "react";
import { Link } from "gatsby";

import { menuItems } from "./menuItems";
//import Modal from 'react-modal'
import QuizWizzPopUp from "./QuizWizzPopUp";
//import 'reactjs-popup/dist/index.css';
import "../../css/styles.css";

import { Modal, Button } from "antd";
import "antd/dist/antd.css";

const Menu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <ul className="navbar-nav main-menu d-none d-lg-flex ">
        {menuItems.map(
          ({ label, isExternal = false, name, items, ...rest }, index) => {
            const hasSubItems = Array.isArray(items);
            return (
              <React.Fragment key={name + index}>
                {hasSubItems ? (
                  <li className="nav-item dropdown" {...rest}>
                    <Link
                      className="nav-link dropdown-toggle gr-toggle-arrow"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      to={`/${name}`}
                      // href="/#"
                      // onClick={(e) => e.preventDefault()}
                    >
                      {label}
                      <i className="icon icon-small-down"></i>
                    </Link>
                    <ul className="gr-menu-dropdown dropdown-menu">
                      {items.map((subItem, indexSub) => {
                        const hasInnerSubItems = Array.isArray(subItem.items);
                        return (
                          <React.Fragment key={subItem.name + indexSub}>
                            {hasInnerSubItems ? (
                              <li className="drop-menu-item dropdown">
                                <a
                                  className="dropdown-toggle gr-toggle-arrow"
                                  role="button"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  href="/#"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {subItem.label}
                                  <i className="icon icon-small-down"></i>
                                </a>
                                <ul className="gr-menu-dropdown dropdown-menu dropdown-right">
                                  {subItem.items.map(
                                    (itemInner, indexInnerMost) => (
                                      <li
                                        className="drop-menu-item"
                                        key={itemInner.name + indexInnerMost}
                                      >
                                        {itemInner.isExternal ? (
                                          <a
                                            href={`${itemInner.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            {itemInner.label}
                                          </a>
                                        ) : (
                                          <Link to={`/${itemInner.name}`}>
                                            {itemInner.label}
                                          </Link>
                                        )}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ) : (
                              <li className="drop-menu-item">
                                {subItem.isExternal ? (
                                  <a
                                    href={`${subItem.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {subItem.label}
                                  </a>
                                ) : (
                                  <Link to={`/${subItem.name}`}>
                                    {subItem.label}
                                  </Link>
                                )}
                              </li>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" {...rest}>
                    {isExternal ? (
                      // <a
                      //   className="nav-link"
                      //   href={`${name}`}
                      //   target="_blank"
                      //   rel="noopener noreferrer"
                      // >
                      //   {label}
                      // </a>
                      <div>
                        <img
                          src={
                            "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621923645/crown_retnxs.png"
                          }
                          alt=""
                          className="quizwizz-link-img"
                        />
                        <a
                          className="nav-link"
                          href={name}
                          id="navLink-quizwizz"
                          // data-toggle="modal"
                          // data-target="#modalRegister"
                          onClick={showModal}
                        >
                          {label}
                        </a>

                        {/* <div className="overlay-quizwizz" id="popup-quizwizz">
                          
                            <div className="popup-quizwizz">
                                
                                <a href="#" className="close">
                                  &times;
                                </a>
                                <img src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621923817/crown1_bsnzg3.png"} className="quizwizz-img" />
                              <div className="content">
                                <QuizWizzPopUp setTogglePopUp={setTogglePopUp} togglePopUp={togglePopUp} />
                              </div>
                            </div>
                          
                        </div> */}

                        {/* <Modal
                          isOpen={togglePopUp}
                          shouldCloseOnOverlayClick={true}
                          onRequestClose={() => setTogglePopUp(false)}
                          style={{
                            overlay: {
                              // backgroundColor: "transparent",
                              opacity: "1",
                              position: "fixed",
                              transition: "opacity 500ms",
                              background: "rgba(0, 0, 0, 0.7)"
                            },
                            content: {
                              height: "90vh",
                              width: "30%",
                              margin: "auto",
                            }
                          }}
                        > */}
                        {/* </Modal> */}

                        {/* <Popup trigger={<button> Trigger</button>} position="center">
                            <div>Popup content here !!</div>
                          </Popup> */}

                        <>
                          {/* <Button type="primary" onClick={showModal}>
                              Open Modal
                            </Button> */}
                          <Modal
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={null}
                          >
                            <img
                              src={
                                "https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621923817/crown1_bsnzg3.png"
                              }
                              className="quizwizz-img"
                            />
                            <QuizWizzPopUp handleCancel={handleCancel} />
                          </Modal>
                        </>
                      </div>
                    ) : (
                      <Link
                        className="nav-link"
                        to={`/${name}`}
                        role="button"
                        aria-expanded="false"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                )}
              </React.Fragment>
            );
          }
        )}
      </ul>
    </>
  );
};
export default Menu;
