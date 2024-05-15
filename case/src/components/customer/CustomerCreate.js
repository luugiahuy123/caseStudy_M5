export function CustomerCreate() {
    return(
        <>
            <div className="container">
                <h1>Create Customer</h1>
                <!-- Form for creating a new customer goes here -->
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" className="form-control" id="dob"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select className="form-control" id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="idCardNumber">ID Card Number</label>
                        <input type="text" className="form-control" id="idCardNumber"
                               placeholder="Enter ID card number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" className="form-control" id="phoneNumber" placeholder="Enter phone number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerType">Customer Type</label>
                        <select className="form-control" id="customerType">
                            <option value="diamond">Diamond</option>
                            <option value="platinium">Platinium</option>
                            <option value="gold">Gold</option>
                            <option value="silver">Silver</option>
                            <option value="member">Member</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Enter address"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}