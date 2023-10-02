console.log("------ Inheritance ------");

// Definisi kelas dasar (Gadget)
class Gadget {
    constructor(name) {
        this.name = name;
    }

    present() {
        return "I have an " + this.name;
    }
}

// Kelas turunan (Handphone) yang mewarisi dari kelas dasar (Gadget)
class Handphone extends Gadget {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show() {
        return this.present() + ", it is " + this.model;
    }
}

// Membuat objek handphone dari kelas Handphone
let myHandphone = new Handphone("iPhone", "14 Pro Max");

// Memanggil metode show() dari objek handphone dan mencetak hasilnya
console.log(myHandphone.show());
