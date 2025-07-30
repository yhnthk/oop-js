// let car = {
//     name: "fiat",
//     model: 500,
//     weight: "850kg",
//     color: "white",

//     start: function() {
//         console.log("mobil dinyalakan.");
//     },
//     drive: function(){
//         console.log("mobil berjalan.");
//     },
//     brake: function(){
//         console.log("mobil mengerem.");
//     },
//     stop: function(){
//         console.log("mobil berhenti.");
//     }
// }

// console.log(car.name);
// console.log(car.color);

// car.start();
// car.drive();
// let sepeda = {
//     name: "polygon",
//     gear: 21,
//     weight: "850kg",
//     color: "white",

//     start: function() {
//         console.log("sepeda mulai dikayuh.");
//     },
//     drive: function(){
//         console.log("mobil berjalan.");
//     },
//     brake: function(){
//         console.log("sepeda mengerem.");
//     },
//     stop: function(){
//         console.log("mobil berhenti.");
//     }
// }

// console.log(sepeda.name);
// console.log(sepeda.color);
// console.log(sepeda.gear);

// sepeda.start();
// sepeda.brake();

// function sepeda(merk, gear,color, idk) {
//     this.merk = merk;
//     this.gear = gear;
//     this.color = color;
//     this.idk = idk;

//     this.start = function() {
//         console.log(`${this.merk}gatau merek sepeda.`);
//     };
//     this.drive = function() {
//         console.log(`${this.gear}219.`);
//     };
// }
// let sepeda1 = new sepeda("honda. saya tidak ","idk", "green", "idk bro")
// let sepeda2 = new sepeda("jumlah giginya ada ","jumlah giginya ada ", "green", "idk vro")

// sepeda1.start();
// sepeda2.drive();

class Student {
    constructor(name, jurusan, angkatan) {
        this.name = name;
        this.jurusan = jurusan;
        this.angkatan = angkatan;
    }

    introduce() {
        console.log(`Halo, nama saya ${this.name}, dari jurusan ${this.jurusan}, angkatan ${this.angkatan}.`);
    }

    isSenior() {
        // misal senior adalah angkatan <= 2
        return this.angkatan <= 2;
    }
}

let student1 = new Student("shrek", "RPL", 1);
let student2 = new Student("mr.crab", "RPL", 2);

student1.introduce();
console.log(`Apakah ${student1.name} senior?`, student1.isSenior());

student2.introduce();
console.log(`Apakah ${student2.name} senior?`, student2.isSenior());
