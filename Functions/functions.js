function showProducts() {

    for (let i = 0; i < products.length; i++) {
        console.log(`#${(i + 1)} Товар ${products[i].name} | Price: $${products[i].price}`);
    }

}

function EnterNumber() {
    let number;

    do {
         number = parseInt(prompt(`Enter product number which you wanna buy:`));
    } while (number < 1 || number > products.length || isNaN(number));

    return number;
}

function EnterAmount() {
    let amount;

    do {
         amount = parseInt(prompt(`Enter products amount:`));
    } while (amount < 1 || isNaN(amount));

    return amount;

}

function finalSum(sum) {

    const selectedProduct = products[productNumber - 1];

    sum = selectedProduct.price * productsAmount;
    console.log(`Final Price`, sum);

    return sum;
}

function calcDiscountValue() {
    return (100 - discount) / 100;
}

function calcDiscount() {

    if (initialPrice >= startDiscountFrom) {
        const finalPrice = initialPrice * discountValue;
        console.log(`Congrats! You got a discount, the final price is $` + finalPrice);
    }
}