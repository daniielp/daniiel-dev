import Router from 'next/router'

function Cart() {

    const createPayment = async () => {
        const response = await fetch("api/create-payment");
        const data = await response.json();

        if(!data.paymentId) {
            console.error("Error: Please try again.");
            return;
        }

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