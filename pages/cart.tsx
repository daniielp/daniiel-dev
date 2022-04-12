import { Button, Container, Grid } from '@mui/material';
import Router from 'next/router'
import TextBundle from '../components/Typography/TextBundle';

function Cart() {

    const createPayment = async () => {
        const response = await fetch("api/create-payment");
        const data = await response.json();

        if (!data.paymentId) {
            console.error("Error: Please try again.");
            return;
        }

        Router.push({
            pathname: "checkout",
            query: { paymentId: data.paymentId }
        })

    }

    return (
        <main>
            <Container maxWidth="lg" sx={{ py: [5, 5, 10] }}>
                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <TextBundle title="Betalingsløsning for webshops" subtitle="Checkout" text="På denne side vil  du kunne prøve kræfter med betalingsløsning målrettet imod webshops. Ved at klikke på knappen nedenfor vil du blive sendt videre til en testside hvor der kan betales med kort og mobilepay." />
                        <Button variant="contained" sx={{mt: 3}} onClick={createPayment}>Fortsæt til checkout</Button>
                    </Grid>
                    <Grid item md={6}>
                        
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default Cart