const ENDPOINT =
  'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const fetchData = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    });
};
export default { fetchData };
