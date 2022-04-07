import { Container } from '@mui/material'
import { Box } from '@mui/system'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

declare global {
    interface Window {
        Dibs: any;
    }
}

function Checkout() {
    const router = useRouter();
    const { paymentId } = router.query;
    // useEffect(() => {
    //     const { paymentId } = router.query;
    //     const checkoutOptions = {
    //         checkoutKey: process.env.NEXT_PUBLIC_CHECKOUT_KEY,
    //         paymentId: paymentId,
    //         containerId: "checkout-container",
    //     }
    //     console.log(paymentId)
    //     const checkout = new window.Dibs.Checkout(checkoutOptions)
    //     checkout.on('payment-completed', function (response: any) {
    //         console.log("Payment completed")
    //     })
    // }, [])

    useEffect(() => {
        
        // const checkoutOptions = {
        //     checkoutKey: process.env.NEXT_PUBLIC_CHECKOUT_KEY,
        //     paymentId: paymentId,
        //     containerId: "checkout-container",
        // }
        // const checkout = new window.Dibs.Checkout(checkoutOptions)
        // checkout.on('payment-completed', function (response: any) {
        //     console.log("Payment completed")
        // })
    }, [paymentId])

    return (
        <main>
            <Container sx={{ py: 5, height: '70vh' }}>
                <Box id="checkout-container"></Box>
            </Container>
            <Script id="dibs-js" type="text/javascript" src="https://test.checkout.dibspayment.eu/v1/checkout.js?v=1"/>
        </main>
    )


}

export default Checkout