import { Container } from '@mui/material'
import { Box } from '@mui/system'
import Script from 'next/script'
import { useRouter } from 'next/router'
import Head from 'next/head';

declare global {
    interface Window {
        Dibs: any;
    }
}

function Checkout() {
    const router = useRouter();

    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <main>
                <Container sx={{ py: 5, minHeight: '70vh' }}>
                    <Box id="checkout-container"></Box>
                </Container>
                <Script src="https://test.checkout.dibspayment.eu/v1/checkout.js?v=1" strategy="afterInteractive" onLoad={() => {
                    const urlParams = new URLSearchParams(window.location.search);
                    const paymentId = urlParams.get('paymentId');
                    const checkoutOptions = {
                        checkoutKey: process.env.NEXT_PUBLIC_CHECKOUT_KEY,
                        paymentId: paymentId,
                        containerId: "checkout-container",
                        language: "da-DK"
                    }
                    const checkout = new window.Dibs.Checkout(checkoutOptions)
                    checkout.on('payment-completed', function (response: any) {
                        console.log("Payment completed")
                    })
                }} />
            </main>
        </>
    )


}

export default Checkout