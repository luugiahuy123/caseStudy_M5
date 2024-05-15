
export function EditEmployee() {
    return (
        <>
            <div className="container">
                <h1>Edit Employee</h1>
                <!-- Form for editing employee goes here -->
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
                        <label htmlFor="idNumber">ID Number</label>
                        <input type="text" className="form-control" id="idNumber" placeholder="Enter ID number"/>
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
                        <label htmlFor="education">Education</label>
                        <select className="form-control" id="education">
                            <option value="highSchool">High School</option>
                            <option value="college">College</option>
                            <option value="university">University</option>
                            <option value="postGraduate">Post Graduate</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <select className="form-control" id="position">
                            <option value="receptionist">Receptionist</option>
                            <option value="waiter">Waiter</option>
                            <option value="specialist">Specialist</option>
                            <option value="supervisor">Supervisor</option>
                            <option value="manager">Manager</option>
                            <option value="director">Director</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}