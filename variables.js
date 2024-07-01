let productColors = ['blue', 'green', 'yellow', 'black', 'orange', 'vomit'];

console.log(productColors);

function multiply(num1, num2) {
    return num1 * num2;
};

console.log(multiply(2,5));

console.log(productColors[4]);

productColors.push('olive');

console.log(productColors);

document.body.style.backgroundColor = "steelblue";


document.getElementById('target').innerHTML = "THIS IS THE TEXT I JUST TYPED " + productColors + " " + productColors.length;

const displayArray = (productColors) => {
    const colors = productColors.map(color => 
    `<li>${colors.color}</li>`
}};

