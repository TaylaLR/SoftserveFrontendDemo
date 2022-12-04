import React, { useRef,useState } from "react";
import { TextField } from "@mui/material";
import ReactDom from "react-dom";
import { Stack } from "@mui/system";

export const AddModal = ({ setShowAddModal }) => {

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }

  // close the modal when clicking outside the modal
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowAddModal(false);
    }
  };

  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    birthDate: ""
    })
  

  //render modal
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <Stack>
            <h2>Add Customer</h2>
            <form>
            <Stack>
                <label>
                    First name
                    <input
                        type="text"
                        name="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last name
                    <input
                        type="text"
                        name="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                     />
                </label>
                <label>
                    Email Address
                    <input
                    type="text"
                    name="emailAddress"
                    value={state.emailAddress}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Date of Birth
                    <input
                        type="text"
                        name="birthDate"
                        value={state.birthDate}
                        onChange={handleChange}
                    />
                </label>
            </Stack>      
            </form>
            <button onClick={() => setShowAddModal(false)}>X</button>
        </Stack>        
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export const EditModal = ({ setShowEditModal }) => {
    // close the modal when clicking outside the modal
    const modalRef = useRef();
    const closeModal = (e) => {
      if (e.target === modalRef.current) {
        setShowEditModal(false);
      }
    };
    //render modal
    return ReactDom.createPortal(
      <div className="container" ref={modalRef} onClick={closeModal}>
        <div className="modal">
            <Stack>
                <h2>Edit Customer</h2>
                <form>
                <label>
                    Enter Customer ID
                    <input
                        type="text"
                    name="customerID"
                    />
                </label>
                </form>
            </Stack>          
            <button onClick={() => setShowEditModal(false)}>X</button>
        </div>
      </div>,
      document.getElementById("portal")
    );
  };

  export const DeleteModal = ({ setShowDeleteModal }) => {
    // close the modal when clicking outside the modal
    const modalRef = useRef();
    const closeModal = (e) => {
      if (e.target === modalRef.current) {
        setShowDeleteModal(false);
      }
    };
    //render modal
    return ReactDom.createPortal(
      <div className="container" ref={modalRef} onClick={closeModal}>
        <div className="modal">
            <Stack>
                <h2>Delete Customer</h2>
                <form>
                <label>
                    Enter Customer ID
                    <input
                        type="text"
                        name="customerID"
                    />
                </label>
                </form>
            </Stack>
          <button onClick={() => setShowDeleteModal(false)}>X</button>
        </div>
      </div>,
      document.getElementById("portal")
    );
  };

  