const { GoogleSpreadsheet } = require("google-spreadsheet")
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID)

const spreadsheetAuth = (document) => {
  return document.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
  })
}

const write = async (cells) => {
  if (!cells || !Array.isArray(cells)) {
    console.error("Cells should be an array!")
  }

  await spreadsheetAuth(doc)
  await doc.loadInfo()
  console.log(doc)
  const sheet = doc.sheetsByIndex[0]
  await sheet.addRows(cells)
  return 0
}

export default (req, res) => {
  if (req.method === "POST") {
    const data = req.body.formData

    console.log(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    console.log(data.name)
    write([
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.msg,
      },
    ])
    console.log(data.email)

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
              // { email: "marketing@newtelco.de" },
              // { email: "jleuchters@newtelco.de" },
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
        res.status(200).json({ code: 200, value: "successfully sent" })
      } else {
        res.status(500).json({ code: 500, value: "error sending to SendGrid" })
      }
    })
  } else {
    res.status(500).json({ code: 500, value: "method not supported" })
  }
}
