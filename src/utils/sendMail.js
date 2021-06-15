import axios from 'axios';

const sendMail = async (name, email) => {
  const data = JSON.stringify({
    name,
    email,
  });

  const config = {
    method: 'post',
    url: 'https://expoimapi-email.herokuapp.com/api/v1/email',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };

  try {
    return await axios(config);
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
