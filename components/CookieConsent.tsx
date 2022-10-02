import { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Link, Snackbar, SnackbarContent, Typography, IconButton, ListItemText, Switch, ListItem, List } from '@mui/material'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import useLocalStorage from '../hooks/UseLocalStorage';

const CookieConsent = () => {
    const [isConsentActive, setIsConsentActive] = useState(true);
    const [localConsent, setLocalConsent] = useLocalStorage("ShowConsent", true)
    const [isModalActive, setIsModalActive] = useState(false);

    useEffect(() => {
        setIsConsentActive(localConsent)
        window.addEventListener("ShowConsent", (e) => {
            const item = window.localStorage.getItem("ShowConsent")
            if (item === "true") {
                setIsModalActive(true);
            } else {
                setIsModalActive(false)
            }
        })

    }, [])

    const handleAcceptAll = () => {
        setIsConsentActive(false);
        setLocalConsent(false)
    }

    const toggleModal = () => {
        setIsModalActive((prevState) => !prevState);
        setIsConsentActive((prevState) => !prevState);
    }

    const acceptChanges = () => {
        setIsConsentActive(false);
        setIsModalActive(false);
        setLocalConsent(false);
    }

    

    return (
        <>
            <Snackbar
                sx={{ width: ["calc(100% - 16px)", "100%"] }}
                open={isConsentActive}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                children={
                    <SnackbarContent sx={{ width: "90%" }} message={
                        <Grid container component="section" spacing={2}>
                            <Grid item md={9}>
                                <Typography sx={{ fontWeight: 'bold' }} component="h1" variant="h6">Beskyttelse af dine oplysninger <PrivacyTipIcon sx={{ fontSize: "1rem" }} /></Typography>
                                <Typography variant="body2">Vi bruger cookies og lignende teknologier til at tilpasse indhold, skræddersy og afpasse annoncer og give en mere sikker oplevelse. Når du klikker på OK eller slår noget til i Cookieindstillinger, accepterer du dette som beskrevet i vores <Link color="secondary" href="/policies/cookies">Cookiepolitik</Link>. For at ændre indstillinger eller tilbagekalde samtykke skal du opdatere din Cookieindstillinger.</Typography>
                            </Grid>
                            <Grid item container md={3} spacing={2} sx={{ mt: 0 }}>

                                <Grid item container md={6} >
                                    <Button variant="outlined" color="secondary" fullWidth onClick={toggleModal}>Cookieindstillinger</Button>
                                </Grid>
                                <Grid item container md={6}>
                                    <Button variant="contained" fullWidth onClick={handleAcceptAll}>Accepter alle</Button>
                                </Grid>


                            </Grid>
                        </Grid>
                    } />

                }
            />
            <Dialog onClose={toggleModal} open={isModalActive} >
                <SnackbarContent sx={{ p: 0 }} message={
                    <>
                        <DialogTitle sx={{ display: 'flex', alignItems: "center", fontWeight: 'bold' }}> <IconButton color="secondary" onClick={toggleModal}><ChevronLeftIcon /></IconButton>  Beskyttelse af dine personlige oplysninger</DialogTitle>
                        <DialogContent dividers sx={{ borderColor: "#5f6576", maxHeight: 400 }}>
                            <Typography variant="body1" sx={{ mb: 5 }}>Når du besøger et websted, kan det gemme eller hente oplysninger i din browser, for det meste i form af cookies. Disse oplysninger kan handle om dig, dine præferencer eller din enhed og bruges mest til at få webstedet til at fungere, som du forventer. Oplysningerne identificerer dig normalt ikke direkte, men de kan give dig en mere brugertilpasset internetoplevelse. Da vi respekterer din ret til beskyttelse af personlige oplysninger, kan du vælge ikke at tillade visse typer cookies. Klik på de forskellige kategorioverskrifter for at finde ud af mere og ændre vores standardindstillinger. Blokering af visse typer cookies kan dog påvirke din oplevelse af webstedet og de tjenester, vi kan tilbyde.</Typography>
                            <Typography component="h4" variant="h4">Strengt nødvendige cookies</Typography>
                            <Typography variant="body1">Disse cookies er nødvendige for at hjemmesiden kan fungere, og der kan ikke slukkes for dem i vores systemer. De afsættes normalt kun som svar på handlinger, du har foretaget, som resulterer i en anmodning om tjenester, såsom at angive dine indstillinger at logge på eller udfylde formularer og beskyttelse af personlige oplysninger. Du kan indstille din browser til at blokere eller advare dig om disse cookies, men nogle dele af webstedet fungerer måske ikke som følge heraf.</Typography>
                            <List>
                                <ListItem divider sx={{ borderColor: "#5f657636" }}>
                                    <ListItemText id="switch-list-label-toggle-all" primary="Slå alle fra" />
                                    <Switch
                                        edge="end"
                                        checked={true}
                                        color="secondary"
                                        disabled
                                        inputProps={{
                                            'aria-labelledby': 'switch-list-label-toggle-all',
                                        }}
                                    />
                                </ListItem>
                                <ListItem divider sx={{ borderColor: "#5f657636" }}>
                                    <ListItemText id="switch-list-label-sikkerhed" primary="Sikkerhed" />
                                    <Switch
                                        edge="end"
                                        checked={true}
                                        disabled
                                        color="secondary"
                                        inputProps={{
                                            'aria-labelledby': 'switch-list-label-sikkerhed',
                                        }}
                                    />
                                </ListItem>
                                <ListItem divider sx={{ borderColor: "#5f657636" }}>
                                    <ListItemText id="switch-list-label-sprogindstillinger" primary="Sprogindstillinger" />
                                    <Switch
                                        edge="end"
                                        checked={true}
                                        disabled
                                        color="secondary"
                                        inputProps={{
                                            'aria-labelledby': 'switch-list-label-sprogindstillinger',
                                        }}
                                    />
                                </ListItem>
                                <ListItem divider sx={{ borderColor: "#5f657636" }}>
                                    <ListItemText id="switch-list-label-recaptcha" primary="Google reCAPTCHA v3" secondary={<Typography variant="body2">reCAPTCHA v3 er underlagt Googles <Link color="secondary" target="_blank" rel="nofollow" href="https://www.google.com/policies/privacy/">privatlivspolitik</Link> og <Link color="secondary" target="_blank" rel="nofollow" href="https://www.google.com/policies/terms/">vilkår</Link> for brug.</Typography>} />
                                    <Switch
                                        edge="end"
                                        checked={true}
                                        disabled
                                        color="secondary"
                                        inputProps={{
                                            'aria-labelledby': 'switch-list-label-recaptcha',
                                        }}
                                    />
                                </ListItem>
                            </List>
                        </DialogContent>
                        <DialogActions sx={{ py: 2 }}>
                            <Button color="primary" variant="contained" fullWidth onClick={acceptChanges}>Gem</Button>
                        </DialogActions>
                    </>

                } />
            </Dialog>
        </>
    )
}

export default CookieConsent