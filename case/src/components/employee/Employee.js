
export function Employee() {

    return (
        <>

            <div className="container">
                <h1>List Employees</h1>
                <!-- Table for listing employees goes here -->
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>ID Number</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Education</th>
                        <th>Position</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>1990-01-01</td>
                        <td>123456789</td>
                        <td>123-456-7890</td>
                        <td>john@example.com</td>
                        <td>University</td>
                        <td>Manager</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>1985-05-15</td>
                        <td>987654321</td>
                        <td>987-654-3210</td>
                        <td>jane@example.com</td>
                        <td>High School</td>
                        <td>Receptionist</td>
                    </tr>
                    <!-- Additional rows go here -->
                    </tbody>
                </table>
            </div>
        </>
    )
}