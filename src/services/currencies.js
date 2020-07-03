export function getCurrencyAmounts() {
  return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
  .then(function(response) {
    return response.json()
  }).then(function(data){
    return data.conversion_rates;
  });
} 