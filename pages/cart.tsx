import Router from 'next/router'

function Cart() {

    const createPayment = async () => {
        console.log("testing")
        const response = await fetch("api/create-payment");
        const data = await response.json();
        console.log(data);

        if(!data.paymentId) {
            console.error("Error: Check output from API request: " + JSON.stringify(data));
            return;
        }

        console.log(data);

        Router.push({
            pathname: "checkout",
            query: {paymentId: data.paymentId}
        })
        
    }

    return (
        <button onClick={createPayment}>Proceed to checkout</button>
    )
}

export default Cart