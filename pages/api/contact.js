import fetch from 'node-fetch';
import nodeMailer from 'nodemailer';
// const mailgunSdk = require('mailgun-js');
// const apiKey = process.env.MAILGUN_API_KEY;
// const domain = `mail.${process.env.DOMAIN}`;
// const mailgun = mailgunSdk({ apiKey, domain });

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 350);
  });

export default async function handler(req, res) {
  const { body, method } = req;

  // Extract the email and captcha code from the request body
  const { name, email, message, captcha } = body;

  if (method === 'POST') {
    // If email or captcha are missing return an error
    if (!email || !captcha) {
      return res.status(422).json({
        message: 'Unproccesable request, please provide the required fields'
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
          method: 'POST'
        }
      );
      const captchaValidation = await response.json();
      /**
       * The structure of response from the veirfy API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
       */
      if (captchaValidation.success) {
        const transporter = nodeMailer.createTransport({
          port: 465,
          host: 'smtp.gmail.com',
          auth: {
            user: process.env.CONTACT_USERNAME,
            pass: process.env.CONTACT_PASSWORD
          },
          secure: true
        });

        const mailData = {
          from: req.body.email,
          to: 'saurish.srivastava@envisionnew.org',
          subject: `New Email From ${req.body.name}`,
          text: req.body.message + ' | Sent from: ' + req.body.email,
          html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
        };

        transporter.sendMail(mailData, function (err, info) {
          if (err) {
            console.log(err);
            return res.json({
              error: 'An error occurred when sending the email.'
            });
          }
          console.log('Success!');
          return res.json({ status: 'Success!' });
        });
        // TO DO: ADD GOOGLE FORM:
        // fetch(
        //   'https://restful-google-form.vercel.app/api/forms/1FAIpQLSd5oYN6h70QLFdhn50689_fXRQjmYQG8ouhEBBWGhj2XObAHQ',
        //   {
        //     method: 'POST',
        //     headers: {
        //       'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(body)
        //   }
        // ).then((res) => {
        //   console.log(res.status);
        //   setDisable(false);
        // });

        await sleep();
        // Return 200 if everything is successful
        return res.status(200).send('OK');

        // const resNew = await fetch(
        //   'https://hooks.zapier.com/hooks/catch/9878971/boq3mid',
        //   {
        //     body: JSON.stringify({
        //       name: event.target.name.value
        //     }),
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     method: 'POST'
        //   }
        // );
        // await sleep();
        // // Return 200 if everything is successful
        // return resNew.status(200).send('OK');
      }

      return res.status(422).json({
        message: 'Unproccesable request, Invalid captcha code'
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: 'Something went wrong' });
    }
  }
  // Return 404 if someone pings the API with a method other than
  // POST
  return res.status(404).send('Not found');
}
