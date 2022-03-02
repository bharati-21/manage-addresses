import React from 'react'
import axios from 'axios';

const AddressList = ({setAddress, addresses, setIsEditing, setEditingId, isEditing, handleAddressDelete}) => {

   const handleAddressEdit = (event, id) => {
       setIsEditing(true);
       setEditingId(id);
       setAddress(addresses.find(address => address.id === id));
   }

   

  return (
    <div className="address-list">
    {
        addresses.length > 0 
        ?
        <div>
            <h1>Address List</h1>
            <div>
                {
                    addresses.map(address => {
                        return <div className="address-list-item" key={address.id}>
                            <p><strong>Name: </strong>{address.name}</p>
                            <p><strong>Phone Number: </strong>{address.phone}</p>
                            <p><strong>Pincode: </strong>{address.pincode}</p>
                            <p><strong>Locality: </strong>{address.locality}</p>
                            <p><strong>Address: </strong>{address.address}</p>
                            <p><strong>City: </strong>{address.city}</p>
                            <p><strong>State: </strong>{address.state}</p>
                            <p><strong>Landmark: </strong>{address.landmark}</p>
                            <p><strong>Alternate Phone Number: </strong>{address.altPhone}</p>
                            {
                                isEditing ? null : 
                                <div>
                                    <button className="btn-save" onClick={e => handleAddressEdit(e, address.id)}>Edit</button>
                                    <button className="btn-cancel" onClick={e => handleAddressDelete(e, address.id)}>Delete</button>
                                </div>
                            }
                        </div>
                    })
                }
            </div>
        </div>
        : null
    }
    </div>
  )
}

export {AddressList};