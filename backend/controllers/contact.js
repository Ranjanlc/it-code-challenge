import Contact from "../models/contact.js";
import Mailjet from "node-mailjet";

export const sendEmail = async (req, res) => {
  try {
    // Extract data from the request body (assuming the data is sent via a POST request)
    const { fullName, emailAddress, phoneNumber, contactMethod, message } =
      req.body;
    // Create a new Contact instance using the Contact model
    const newContact = new Contact({
      fullName,
      emailAddress,
      phoneNumber,
      message,
    });

    // Save the new contact instance to the database
    await newContact.save();
    // Sending email through mailjet
    const mailjet = new Mailjet({
      apiKey: process.env.MJ_APIKEY_PUBLIC,
      apiSecret: process.env.MJ_APIKEY_PRIVATE,
    });
    const requestPromise = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "ranjanlc@ranjan-lamichhane.com.np",
            Name: "Admin",
          },
          To: [
            {
              Email: "studylc29@gmail.com",
              Name: "Ranjan Lamichhane",
            },
          ],
          Subject: "New contact form submission",
          HTMLPart: `<h2>Greetings!You have received a new contact form submission</h2><h4> The sender's details are as follows:</h4><strong>First Name: </strong><i>${fullName}</i><br/><strong> Email Address: </strong><i>${emailAddress}</i><br/><strong>Phone Number: </strong><i>${phoneNumber}</i><br/><<strong>Message: </strong><i>${message}</i><br/>`,
        },
      ],
    });
    requestPromise
      .then((result) => {
        console.log(result);
        res.status(202).json({ message: "Email sent successfully" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Failed to send email" });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in sending email: " });
  }
};
