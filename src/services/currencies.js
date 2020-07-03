// export function getCurrencyAmounts() {
//   fetch(`https://v6.exchangerate-api.com/v6/e422c05b7dba28b28396ed36/latest/USD`)
//   .then(function(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   })
//   .catch(function(error) {
//     return error;
//   })
// }

export function getCurrencyAmounts() {
  fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
  .then(function(response) {
    return response.json()
  })
  .then(function(data){
    console.log(data.conversion_rates.AUD)
  });
} 