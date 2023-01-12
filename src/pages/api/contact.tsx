import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.body);
    try {
        await sendgrid.send({
            to: process.env.CONTACT_EMAIAL || '',
            from: process.env.SENDGRID_API_KEY || '',
            subject: `Website contact form submission`,
            html: `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>kevincai.me submission</title>
                    <meta name="description" content="Website contact form submission: ${req.body.name}">
                    <meta name="author" content="Kevin Cai">
                <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
                    <link rel="stylesheet" href="css/styles.css?v=1.0">
                </head>
                
                <body>
                    <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
                    <div style="font-size: 16px;">
                    <p>Message: ${req.body.message}</p>
                    <br>
                    </div>
                </body>
            </html>
            `,
        });
    } catch (error) {
        return (
            res
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                .status(error.code || 500)
                .json({})
        );
    }

    return res.status(200).json({});
};

export default sendEmail;
