$(".toggleDarkMode").click(function () {
  $("#contentContainer").toggleClass("darkMode");
});
const storeItems = [
  {
    name: "TV",
    price: 800.0,
    inStock: true,
    details: "4K Ultra HD",
  },
  {
    name: "Phone",
    price: 700.0,
    inStock: false,
    details: "5G",
  },
  {
    name: "Game Console",
    price: 300.0,
    inStock: true,
    details: "The latest and greatest",
  },
  {
    name: "Laptop",
    price: 1200.0,
    inStock: true,
    details: "16GB RAM 1TB SSD",
  },
  {
    name: "Smart Watch",
    price: 200.0,
    inStock: false,
    details: "Counts your steps",
  },
  {
    name: "Headphones",
    price: 100.0,
    inStock: true,
    details: "Clearest music to be heard",
  },
  {
    name: "Keyboard",
    price: 100.0,
    inStock: true,
    details: "Types for you",
  },
  {
    name: "HDMI Cord",
    price: 100.0,
    inStock: true,
    details: "HDMI to USB type C",
  },
  {
    name: "Monitor",
    price: 300.0,
    inStock: true,
    details: "4K Ultra HD",
  },
  {
    name: "Speaker",
    price: 200.0,
    inStock: true,
    details: "Clearest music to be heard",
  },
  {
    name: "Video Game",
    price: 60.0,
    inStock: true,
    details: "Enjoy for hours",
  },
];
storeItems.forEach(function(item) {
    if (item.inStock) {
        $(".items").append(
            `<div class="item">
                <h2>${item.name}</h2>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>${item.details}</p>
            </div>`
        );
    }
});

$("#dark-mode-checkbox").change(function () {
  $("body").toggleClass("dark-mode");
});
