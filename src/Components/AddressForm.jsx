import React, {useState} from 'react'

export const AddressForm = ({handleFormSubmit, address, setAddress, isEditing, setIsEditing, setEditingId}) => {
    const handleInput = event => {
        const {name, value} = event.target;
        setAddress(prevAddress => ({...prevAddress, [name]: value}));
    }

    const handleResetForm = event => {
        setAddress({
            name: '',
            phone: '',
            pincode: '',
            locality: '',
            address: '',
            city: '',
            state: '',
            landmark: '',
            altPhone: ''
        });
        setIsEditing(false);
        setEditingId(-1);
    }

  return (
    <form className="address-form" onSubmit={e => handleFormSubmit(e, handleResetForm)}>
        <div className="form-fields">
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Name" value={address.name} tabIndex="1" required onChange={handleInput}></input>
            </div>
            <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="number" className="form-control" id="phone" placeholder="Phone Number" tabIndex="2" maxLength="10" min="1000000000" value={address.phone} max="9999999999" required onChange={handleInput} name="phone"></input>
            </div>
            <div className="input-group">
                <label htmlFor="pincode">Pincode</label>
                <input type="number" className="form-control" id="pincode" placeholder="Pincode" tabIndex="3" value={address.pincode} maxLength="6" min="100000" max="999999" required onChange={handleInput} name="pincode"></input>
            </div>
            <div className="input-group">
                <label htmlFor="locality">Locality</label>
                <input type="text" className="form-control" id="locality" placeholder="Locality" value={address.locality} tabIndex="4" required onChange={handleInput} name="locality"></input>
            </div>
            <div className="input-group input-group-address">
                <label htmlFor="address">Address</label>
                <textarea className="form-control" value={address.address} id="address" placeholder="Address (Area and Street)" required tabIndex="5" onChange={handleInput} name="address"></textarea>
            </div>
            <div className="input-group">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="City/ District/ Town" required tabIndex="6" value={address.city} onChange={handleInput} name="city"></input>
            </div>
            <div className="input-group">
                <label htmlFor="state">State</label>
                <select className="form-control" id="state" value={address.state} onChange={handleInput} tabIndex="7" name="state">
                    <option value="" disabled defaultValue>--Select State--</option>
                    <option value="Andaman &amp; Nicobar Islands">Andaman &amp; Nicobar Islands</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu">Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="landmark">Landmark</label>
                <input type="text" className="form-control" id="landmark" placeholder="Landmark (Optional)" tabIndex="8" value={address.landmark} name="landmark" onChange={handleInput}></input>
            </div>
            <div className="input-group">
                <label htmlFor="altPhone">Alternative Phone</label>
                <input type="text" className="form-control" id="altPhone" placeholder="Alternative Phone Number(Optional)" tabIndex="9" value={address.altPhone} name="altPhone" onChange={handleInput}></input>
            </div>
        </div>
        <button type="submit" className="btn-save" >{isEditing ? "Edit" : "Save"}</button>
        <button type="reset" className="btn-cancel" onClick={handleResetForm}>Cancel</button>
    </form>
  )
}


