
function ContractCreate() {
    return(
        <>
            <h1>Create Contract</h1>
            <form action="submit_contract.php" method="post">
                <label htmlFor="start_date">Start Date:</label><br/>
                <input type="date" id="start_date" name="start_date" required/><br/><br/>

                <label htmlFor="end_date">End Date:</label><br/>
                <input type="date" id="end_date" name="end_date" required/><br/><br/>

                <label htmlFor="deposit_amount">Deposit Amount:</label><br/>
                <input type="number" id="deposit_amount" name="deposit_amount" required/><br/><br/>

                <label htmlFor="total_payment">Total Payment:</label><br/>
                <input type="number" id="total_payment" name="total_payment" required/><br/><br/>

                <label htmlFor="customer_id">Customer ID:</label><br/>
                <input type="number" id="customer_id" name="customer_id" required/><br/><br/>

                <label htmlFor="rental_service_id">Rental Service ID:</label><br/>
                <input type="number" id="rental_service_id" name="rental_service_id" required/><br/><br/>

                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}