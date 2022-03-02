import './App.css';
import {useState} from 'react';
import {AddressForm} from './Components/AddressForm';
import {AddressList} from './Components/AddressList'
import faker from 'faker';
import axios from 'axios';

const App = () => {

  const [addresses, setAddresses] = useState([]); 

  const [address, setAddress] = useState({
    name: '',
    phone: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    state: "",
    landmark: '',
    altPhone: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  const [editingId, setEditingId] = useState(-1);

  const handleFormSubmit = async (event, handleResetForm) => {
    event.preventDefault();
    if(isEditing) {
      try {
        const res = await axios.patch(`/api/addresses/${editingId}`, {
          address: address
        });
        if(res.status >= 200 && res.status < 300) {
          alert('Address edited successfully!');
          
          setAddresses(prevAddresses => prevAddresses.reduce((accum, currentAddress) => currentAddress.id === editingId ? [...accum, {...currentAddress, ...address}]: [...accum, currentAddress], []));

          console.log(res);
          handleResetForm();
        }
      }
      catch (err) {
        console.log(err);
        alert('Something went really wrong!');
      }
    }
    else {
      try {
        const addressToPost = {id: faker.datatype.uuid(), ...address};
        const res = await axios.post('/api/addresses', {
          address: addressToPost
        });
        if(res.status >= 200 && res.status < 300) {
          alert('Address saved successfully!');
          setAddresses(prevAddresses => [...prevAddresses, addressToPost])
          console.log(res);
          handleResetForm();
        }
      }
      catch (err) {
        console.log(err);
        alert('Something went really wrong!');
      }
    }
  }

  const handleAddressDelete = async (event, id) => {
    try {
     const res = await axios.delete(`/api/addresses/${id}`);
     if(res.status >= 200 && res.status < 300) {
         alert('Address Deleted Successfully');
         setAddresses(prevAddresses => prevAddresses.filter(prevAddress => prevAddress.id !== id))
     }
     else {
         throw new Error('Something went wrong while deleting');
     }
    }
    catch(err) {
     alert('Something went wrong while deleting');
    }
 }


  return (
    <div className="App">
      <header className="header">
        <h2 className="hero">Manage Addresses</h2>
      </header>
      <AddressForm addresses={addresses} setAddress={setAddress} address={address} handleFormSubmit={handleFormSubmit} isEditing={isEditing} setIsEditing={setIsEditing} setEditingId={setEditingId} editingId={editingId}/>
      <AddressList addresses={addresses} setAddress={setAddress} setIsEditing={setIsEditing} setEditingId={setEditingId} isEditing={isEditing} handleAddressDelete={handleAddressDelete}/>
    </div>
  );
}

export default App;
