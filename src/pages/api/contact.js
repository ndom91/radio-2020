export default (req, res) => {
  if (req.method === "POST") {
    const data = req.body.formData
    const api = "https://api.sendgrid.com/v3/mail/send"

    fetch(api, {
      method: "post",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: {
          email: "device@newtelco.de",
        },
        personalizations: [
          {
            to: [
              { email: "marketing@newtelco.de" },
              { email: "jleuchters@newtelco.de" },
              { email: "ndomino@newtelco.de" },
            ],
            dynamic_template_data: {
              name: data.name,
              email: data.email,
              phone: data.phone,
              msg: data.msg,
            },
          },
        ],
        template_id: "d-700df02bfe404257861ff22464d50d2f",
      }),
    }).then((resp) => {
      if (resp.status === 202) {
        res.status(200).json({ code: 200, value: "successfully sent " })
      } else {
        res.status(500).json({ code: 500, value: "error sending to SendGrid" })
      }
    })
  } else {
    res.status(500).json({ code: 500, value: "method not supported" })
  }
}
