import axios from "axios";

const checkGrammar = async () => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("text", "Him pencl is un the table");

  const options = {
    method: "POST",
    url: "https://textgears-textgears-v1.p.rapidapi.com/grammar",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "b83c549ad8msh7858eac60fba4c7p1c2c58jsnd1c568e3a836",
      "X-RapidAPI-Host": "textgears-textgears-v1.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

checkGrammar();
