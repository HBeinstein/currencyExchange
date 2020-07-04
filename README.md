# _Currency Converter_

#### _A web app to convert between currencies, 7/2/20_

#### By _**Hannah Beinstein**_

## Description
Currency Converter is a web app that will convert any whole, positive, number amount in USD to another currency (limited to those available through the exchangerateapi.com API). The user can input their currency amount and select the new currency that they would like to convert to, and the program will make an API call to retrieve the new currency information and print the results to the webpage. The user then has the option to input another currency and convert the amount again. 

## Setup/Installation Requirements

API Instructions:
1. Get a unique API key by creating a free account at https://www.exchangerate-api.com/. When creating your API key, sign up for the "free" account-- this should allow you to make up to 2000 API calls/month. 

Setup/Installation Instructions:
* Clone the project from its GitHub repository (https://github.com/HBeinstein/currencyExchange.git).
* Open in your code editor of choice.
* Run "npm install" in terminal to install all necessary project modules 
* Create a .env file at the top level of your directory, and place your API key in the file using the formatting: "API_KEY = YOUR-API-KEY-HERE"
* Run "npm build" and then "npm start" in your terminal to create a server and view project live.

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase
3. A free exchangerateapi.com account and API key

## Specifications
_The chart below shows all possible input behaviors and their expected outputs._

| Behavior       | Input         | Output  |
| ------------- |:-------------:| -----:|
| ------------- |:-------------:| -----:|
| User selects value input for currency not supported by API | "Example not valid API currency" | "Sorry, information for this currency type isn't available, try another!" | 
| User does not select valid input for currency to convert to | null , $20 usd | "Please choose a currency to convert to!" | 
| User enters valid input for currency to convert to but does not enter money amount | EUR , null | "Please enter a valid amount!" | 
| User chooses currency to convert to from list and inputs valid number amount in USD | EUR, $20 usd | "17.81 euro" | 


## Known Bugs

_No known bugs_

## Support and contact details

_Please contact me through my Github or at hannah.beinstein@gmail.com._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Webpack_
* _Babel_

### License

MIT License.

Copyright (c) 2020 **_Hannah Beinstein_**