
export function getCurrencyAmounts() {
  return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
  .then(function(response) {
    if(!response.ok){
      throw Error(response.statusText)
    } return response.json()
  })
  .catch(function(error) {
    console.error(error);
  })
  .then(function(data){
    return data.conversion_rates;
  });
} 

// https://httpstat.us/500

// https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD