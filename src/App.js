import { Stack } from '@mui/system';
import './App.css';
import { BrowserRouter} from "react-router-dom";

// Example of a data array that
// you might receive from an API
const data = [
{ customerId: 1, firstName: "Test1", lastName: "One", username: "T1", emailAddress: "mail1@mail.com", dateOfBirth: "2001-05-02", age: 19, dateCreated: "2022-12-04", dateEdited: "2022-12-04", isDeleted: false },
{ customerId: 2, firstName: "Test2", lastName: "Two", username: "T2", emailAddress: "mail2@mail.com", dateOfBirth: "2001-05-02", age: 19, dateCreated: "2022-12-04", dateEdited: "2022-12-04", isDeleted: false },
{ customerId: 3, firstName: "Test3", lastName: "Three", username: "T3", emailAddress: "mail3@mail.com", dateOfBirth: "2001-05-02", age: 19, dateCreated: "2022-12-04", dateEdited: "2022-12-04", isDeleted: false },
]

const App = () => {
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
    <a href='./AddCustomer'>
              <button>Add Customer</button>
            </a>
            <a href='/DeleteCustomer'>
              <button>Delete Customer</button>
            </a>
            <a href='/EditCustomer'>
              <button>Edit Customer</button>
            </a>
    </Stack>
	</div>
  </BrowserRouter>
	
);
}

const AddCustomer = () => {
  return (
    <BrowserRouter>
    <div className='AddCustomer'>
    <h1>
      Add Customer
    </h1>
  </div>
    </BrowserRouter>
      
  );
}

const EditCustomer = () => {
  return (
    <BrowserRouter>
    <div>
    <h1>
      Edit Customer Details
    </h1>
  </div>
    </BrowserRouter>
      
  );
}

const DeleteCustomer = () => {
  return (
    <BrowserRouter>
    <div>
    <h1>
      Delete Customer
    </h1>
  </div>
    </BrowserRouter>
      
  );
}

export {App, AddCustomer, EditCustomer, DeleteCustomer};

