const fetch = require('node-fetch');

const { HOST } = process.env;

if (!HOST) throw Error("Environment variable HOST not set.")

const emailUrl = `http://${HOST}/email`

const data = {
  firstName: "Steven",
  lastName: "Gerrard",
  from: "steven@gerrard.com",
  text: "Hello, testing some emails here.",
}

describe('Testing email', () => {
  Object.keys(data).map(key =>
    it(`Should not accept body while missing key: ${key}.`, async () => {
      const res = await fetch(emailUrl, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({ ...data, [key]: undefined }),
      });
      return expect(res.status).toEqual(400);
    })
  )

  it(`Should not accept missing body.`, async () => {
    const res = await fetch(emailUrl, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    });
    return expect(res.status).toEqual(400);
  })

  it(`Should accept correct email.`, async () => {
    const res = await fetch(emailUrl, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return expect(res.status).toEqual(200);
  })
});
