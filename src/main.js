import $ from 'jquery'
import './styles.css';
import {getCurrencyAmounts} from './services/currencies.js';

$( document ).ready(function() {
let currencies = getCurrencyAmounts();
console.log(currencies.conversion_rates);
});