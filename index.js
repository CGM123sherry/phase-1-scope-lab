// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
customerName = customerName.toUpperCase ();
}
function setBestCustomer(){
bestCustomer = 'not bob';
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
const leastFavouriteCustomer = 'lulu';
// function changeleastFavouriteCustomer(){
//     const leastFavouriteCustomer = 'hassan';
//     throw new TypeError('Assignment to constant variable.');

// }
function changeLeastFavoriteCustomer(){
    const leastFavouriteCustomer = 'abel';
    throw new TypeError('Assignment to constant variable.');


}
