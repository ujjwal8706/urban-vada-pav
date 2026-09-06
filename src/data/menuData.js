import alootikkivadapav from "../assets/images/alootikkivadapav.jpg";
import paneerburger from "../assets/images/paneerburger.webp";
import paneerwrap from "../assets/images/paneerwrap.jpg";
import americanpizza from "../assets/images/americanpizza.jpeg";
import whitesaucepasta from "../assets/images/whitesaucepasta.jpg";
import strawberrymojito from "../assets/images/strawberrymojito.webp";
import chocobrownie from "../assets/images/chocobrownie.jpg";

export const menuCategories = [
  {
    id: "vada-pav",
    name: "Vada Pav",
    title: "🍔 Vada Pav",
    subtitle: "Mumbai's Favourite",
    description: "Freshly prepared Mumbai Style Vada Pav with authentic spices and signature chutneys.",
    image: alootikkivadapav,
    reverse: false,
  },
  {
    id: "burgers",
    name: "Burgers",
    title: "🍔 Burgers",
    subtitle: "Loaded With Flavours",
    description: "Crunchy burgers loaded with fresh veggies, signature sauces and premium fillings.",
    image: paneerburger,
    reverse: true,
  },
  {
    id: "wraps",
    name: "Wraps",
    title: "🌯 Wraps",
    subtitle: "Fresh & Filling",
    description: "Delicious grilled wraps packed with fresh vegetables and flavourful fillings.",
    image: paneerwrap,
    reverse: false,
  },
  {
    id: "pizza",
    name: "Pizza",
    title: "🍕 Pizza",
    subtitle: "Freshly Baked",
    description: "Loaded with premium cheese, fresh toppings and Urban's signature flavours.",
    image: americanpizza,
    reverse: true,
  },
  {
    id: "pasta",
    name: "Pasta",
    title: "🍝 Pasta",
    subtitle: "Creamy & Delicious",
    description: "Creamy white sauce pasta tossed with herbs and premium seasonings.",
    image: whitesaucepasta,
    reverse: false,
  },
  {
    id: "beverages",
    name: "Beverages",
    title: "🥤 Beverages",
    subtitle: "Refresh Yourself",
    description: "Refreshing coolers and mojitos crafted to complement every bite.",
    image: strawberrymojito,
    reverse: true,
  },
  {
    id: "desserts",
    name: "Desserts",
    title: "🍫 Desserts",
    subtitle: "Sweet Ending",
    description: "Finish your meal with rich chocolate desserts and sweet indulgence.",
    image: chocobrownie,
    reverse: false,
  },
];

export const menuItems = [
  // Vada Pav
  {
    id: 1,
    name: "Aloo Tikki Vada Pav",
    category: "Vada Pav",
    price: 55,
    bestseller: true,
    description: "Crispy potato tikki layered with signature chutneys in a soft Mumbai-style pav.",
    image: alootikkivadapav,
  },
  {
    id: 2,
    name: "Bombay Vada Pav",
    category: "Vada Pav",
    price: 59,
  },
  {
    id: 3,
    name: "Masala Vada Pav",
    category: "Vada Pav",
    price: 65,
  },
  {
    id: 4,
    name: "Cheese Vada Pav",
    category: "Vada Pav",
    price: 65,
  },
  {
    id: 5,
    name: "Urban Maharaja Vada Pav",
    category: "Vada Pav",
    price: 79,
  },

  // Burgers
  {
    id: 6,
    name: "Urban Crispy Aloo Burger",
    category: "Burgers",
    price: 59,
  },
  {
    id: 7,
    name: "Urban Veggie Delight Burger",
    category: "Burgers",
    price: 79,
  },
  {
    id: 8,
    name: "Urban Maharaja Burger",
    category: "Burgers",
    price: 85,
  },
  {
    id: 9,
    name: "Urban Crispy Paneer Burger",
    category: "Burgers",
    price: 129,
    bestseller: true,
    description: "Crunchy paneer patty with fresh veggies, creamy sauces and a toasted bun.",
    image: paneerburger,
  },

  // Wraps
  {
    id: 10,
    name: "Veg Grilled Wrap",
    category: "Wraps",
    price: 139,
    description: "Loaded with fresh vegetables, flavorful fillings and wrapped in a perfectly grilled tortilla.",
    image: paneerwrap,
  },
  {
    id: 11,
    name: "Paneer Wrap",
    category: "Wraps",
    price: 149,
  },
  {
    id: 12,
    name: "Cheese Wrap",
    category: "Wraps",
    price: 159,
  },

  // Pizza
  {
    id: 13,
    name: "American Pizza",
    category: "Pizza",
    price: 249,
    image: americanpizza,
  },
  {
    id: 14,
    name: "Farm House Pizza",
    category: "Pizza",
    price: 249,
  },
  {
    id: 15,
    name: "Paneer Pizza",
    category: "Pizza",
    price: 249,
  },

  // Pasta
  {
    id: 16,
    name: "White Sauce Pasta",
    category: "Pasta",
    price: 115,
    description: "Creamy white sauce pasta tossed with herbs, vegetables and premium seasonings.",
    image: whitesaucepasta,
  },
  {
    id: 17,
    name: "Red Sauce Pasta",
    category: "Pasta",
    price: 115,
  },
  {
    id: 18,
    name: "Mix Sauce Pasta",
    category: "Pasta",
    price: 125,
  },

  // Beverages
  {
    id: 19,
    name: "Virgin Mojito",
    category: "Beverages",
    price: 105,
    description: "A refreshing blend of mint, lemon and sparkling fizz, perfect for every meal.",
    image: strawberrymojito,
  },
  {
    id: 20,
    name: "Strawberry Mojito",
    category: "Beverages",
    price: 105,
  },
  {
    id: 21,
    name: "Blue Lagoon",
    category: "Beverages",
    price: 115,
  },

  // Desserts
  {
    id: 22,
    name: "Choco Brownie",
    category: "Desserts",
    price: 175,
    description: "Rich, fudgy chocolate brownie with a soft center for the ultimate dessert experience.",
    image: chocobrownie,
  },
  {
    id: 23,
    name: "Brownie with Ice Cream",
    category: "Desserts",
    price: 225,
  },
];

export const featuredItems = [
  {
    id: 1,
    name: "Aloo Tikki Vada Pav",
    category: "Vada Pav",
    price: 55,
    image: alootikkivadapav,
    bestseller: true,
    description: "Crispy potato tikki layered with signature chutneys in a soft Mumbai-style pav.",
  },
  {
    id: 2,
    name: "Urban Crispy Paneer Burger",
    category: "Burgers",
    price: 129,
    image: paneerburger,
    bestseller: true,
    description: "Crunchy paneer patty with fresh veggies, creamy sauces and a toasted bun.",
  },
  {
    id: 3,
    name: "Veg Grilled Wrap",
    category: "Wraps",
    price: 139,
    image: paneerwrap,
    description: "Loaded with fresh vegetables, flavorful fillings and wrapped in a perfectly grilled tortilla.",
  },
  {
    id: 4,
    name: "White Sauce Pasta",
    category: "Pasta",
    price: 115,
    image: whitesaucepasta,
    description: "Creamy white sauce pasta tossed with herbs, vegetables and premium seasonings.",
  },
  {
    id: 5,
    name: "Urban Pizza",
    category: "Pizza",
    price: 249,
    image: americanpizza,
    bestseller: true,
    description: "Freshly baked pizza topped with rich cheese, vegetables and Urban's signature flavours.",
  },
  {
    id: 6,
    name: "Virgin Mojito",
    category: "Beverages",
    price: 105,
    image: strawberrymojito,
    description: "A refreshing blend of mint, lemon and sparkling fizz, perfect for every meal.",
  },
  {
    id: 7,
    name: "Choco Brownie",
    category: "Desserts",
    price: 175,
    image: chocobrownie,
    description: "Rich, fudgy chocolate brownie with a soft center for the ultimate dessert experience.",
  },
];
