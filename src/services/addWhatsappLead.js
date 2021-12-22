const ENDPOINT = 'https://hook.integromat.com/q8onoebv9axv5x8csknzdsvronnl3nht';

export default function addWhatsappLead(data = {}) {
  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
