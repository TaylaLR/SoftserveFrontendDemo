import { Stack } from '@mui/system';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import React, { useState } from "react";
import { AddModal, EditModal, DeleteModal } from './Modal';

// Example of a data array that
// you might receive from an API
const data = [
  { customerId: 1, firstName: "Test1", lastName: "One", username: "T1", emailAddress: "mail1@mail.com", dateOfBirth: "2001-05-02", age: 19, dateCreated: "2022-12-04", dateEdited: "2022-12-04", isDeleted: false },
  { customerId: 2, firstName: "Test2", lastName: "Two", username: "T2", emailAddress: "mail2@mail.com", dateOfBirth: "2001-05-02", age: 19, dateCreated: "2022-12-04", dateEdited: "2022-12-04", isDeleted: false },
  { customerId: 3, firstName: "Test3", lastName: "Three", username: "T3", emailAddress: "mail3@mail.com", dateOfBirth: "2001-05-02", age: 19, dateCreated: "2022-12-04", dateEdited: "2022-12-04", isDeleted: false },
]

const App = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  const openAddModal = () => {
    setShowAddModal(true);
  };

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  return (
    <BrowserRouter>
    <div className="App"> 
    <Stack>
      <h1
        style={{
          display: 'flex', justifyContent: 'center', padding: '15px',
          color: 'rgb(24, 26, 25)'
        }}>
        Customers
      </h1>
      <div>
        <table>
		      <tr>
		        <th>FirstName</th>
            <th>LastName</th>
		        <th>EmailAddress</th>
		        <th>DateEdited</th>
		      </tr>
		      {data.map((val, key) => {
		      return (
			      <tr key={key}>
			      <td>{val.firstName}</td>
			      <td>{val.lastName}</td>
			      <td>{val.emailAddress}</td>
            <td>{val.dateEdited}</td>
			      </tr>
		      )
		      })}
	      </table>
      </div>
    </Stack>
    <Stack>
      <button onClick={openAddModal}>Add Customer</button>
      {showAddModal ? <AddModal setShowAddModal={setShowAddModal} /> : null}

      <button onClick={openEditModal}>Edit Customer</button>
      {showEditModal ? <EditModal setShowEditModal={setShowEditModal} /> : null}

      <button onClick={openDeleteModal}>Delete Customer</button>
      {showDeleteModal ? <DeleteModal setShowDeleteModal={setShowDeleteModal} /> : null}
    </Stack>
	</div>
  </BrowserRouter>
	
);
}

export {App};

