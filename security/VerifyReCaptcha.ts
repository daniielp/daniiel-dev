import fetch from "node-fetch";

// This function should ony be used on server side
async function verifyReCaptcha(recaptchaToken: string) {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;

    try {
        const recaptchaResponse = await fetch(verifyUrl, {method: 'POST'});

        const recaptchaJson = await recaptchaResponse.json() as any;

        if(recaptchaJson.sucess === true && recaptchaJson.score >= 0.5) {
            return true;
        }

        return false;

    } catch (e) {
        return false
    }
}

export default verifyReCaptcha