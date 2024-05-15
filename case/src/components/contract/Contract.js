
export function Contract() {
    return (

        <div className="container">
            <h1>List Contracts</h1>
            <!-- Table for listing contracts goes here -->
            <table className="table">
                <thead>
                <tr>
                    <th>Contract ID</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Deposit Amount</th>
                    <th>Total Payment</th>
                    <th>Customer ID</th>
                    <th>Rental Service ID</th>
                </tr>
                </thead>
                <tbody>
                <!-- Contract data rows will be inserted here -->
                <tr>
                    <td>1</td>
                    <td>2024-05-01</td>
                    <td>2024-06-01</td>
                    <td>$1000</td>
                    <td>$5000</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2024-06-01</td>
                    <td>2024-07-01</td>
                    <td>$1200</td>
                    <td>$6000</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <!-- Add more rows as needed -->
                </tbody>
            </table>
        </div>
    )

}