var cars = [
    { manufacturer: "Audi", model: "A6", year: 2011, vin: "ABCD1234567890XYZ", imageUrl: "./img/audi-a6.jpg" },
    { manufacturer: "Jaguar", model: "X-type", year: 2008, vin: "DCAF0987654321XYZ", imageUrl: "./img/jaguar-x-type.jpg" },
    { manufacturer: "Porsche", model: "Carrera 911", year: 2011, vin: "EFGH0987654321XYZ", imageUrl: "./img/porsche-911.jpg" }
];
var carDiv = document.getElementById("car-list");
if (carDiv) {
    for (var i = 0; i < cars.length; i++) {
        var carCard = document.createElement("div");
        carCard.className = "car-card";
        carCard.innerHTML = "\n            <img src=\"".concat(cars[i].imageUrl, "\" alt=\"").concat(cars[i].manufacturer, " ").concat(cars[i].model, "\">\n            <h2>").concat(cars[i].manufacturer, " ").concat(cars[i].model, "</h2>\n            <p><strong>\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430:</strong> ").concat(cars[i].year, "</p>\n            <p><strong>VIN:</strong> ").concat(cars[i].vin, "</p>\n        ");
        carDiv.appendChild(carCard);
    }
}