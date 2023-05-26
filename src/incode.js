import { create } from "@incodetech/welcome";
const apiURL = process.env.REACT_APP_USER_SERVER;
const apiKey = process.env.REACT_APP_API_KEY;

const incode = create({
  apiKey: apiKey,
  apiURL: apiURL,
  lang: 'es',
  encrypt: true,
});
export default incode;
