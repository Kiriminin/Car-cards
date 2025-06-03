interface Car {
    manufacturer: string;
    model: string;
    year: number;
    vin: string;
    imageUrl: string;
}

const cars: Car[] = [
    { manufacturer: "Audi", model: "A6", year: 2011, vin: "ABCD1234567890XYZ", imageUrl: "./img/audi-a6.jpg" },
    { manufacturer: "Jaguar", model: "X-type", year: 2008, vin: "DCAF0987654321XYZ", imageUrl: "./img/jaguar-x-type.jpg" },
    { manufacturer: "Porsche", model: "Carrera 911", year: 2011, vin: "EFGH0987654321XYZ", imageUrl: "./img/porsche-911.jpg" }
];

const carDiv = document.getElementById("car-list");

if (carDiv) {
    for (let i = 0; i < cars.length; i++) {
        const carCard = document.createElement("div");
        carCard.className = "car-card";
        
        carCard.innerHTML = `
            <img src="${cars[i].imageUrl}" alt="${cars[i].manufacturer} ${cars[i].model}">
            <h2>${cars[i].manufacturer} ${cars[i].model}</h2>
            <p><strong>Год выпуска:</strong> ${cars[i].year}</p>
            <p><strong>VIN:</strong> ${cars[i].vin}</p>
        `;

        carDiv.appendChild(carCard);
    }
}