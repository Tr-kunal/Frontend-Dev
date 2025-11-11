const originalTotal = 7800;
let discountPercent = 0;

if (originalTotal >= 10000) {
  discountPercent = 25;
} else if (originalTotal >= 5000) {
  discountPercent = 15;
} else if (originalTotal >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

const discountAmount = Math.round(originalTotal * (discountPercent / 100));
const finalPrice = originalTotal - discountAmount;

console.log("Original total:", originalTotal);
console.log("Discount %:", discountPercent + "%");
console.log("Discount amount:", discountAmount);
console.log("Final price after discount:", finalPrice);
