export const trueLogin = {
    username: 'acko1986@yahoo.com',
    password: 'Cliveowen20.'
};

class Majstor {
    constructor(firstName, lastName, email, phoneNumber, stats, place) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phoneNumber = phoneNumber
        this.stats = stats
        this.place = place
    };
};

export const majstors = [
    new Majstor('Jovan', 'Ilic', 'jova@ilic.com', '063/444-331', { brzina: 33, pedantnost: 51, cena: 56, ljubaznost: 47}, 'Zrenjanin'),
    new Majstor('Milivoje', 'Zbulj', 'zbulj@mil.com', '061/5414-731', { brzina: 57, pedantnost: 71, cena: 16, ljubaznost: 87}, 'Jagodina'),
    new Majstor('Bojan', 'Gorkov', 'gore@yahoo.com', '069/4712-781', { brzina: 73, pedantnost: 51, cena: 96, ljubaznost: 87}, 'Beograd'),
    new Majstor('Veroljub', 'Ciric', 'cira@gmail.com', '064/777-991', { brzina: 13, pedantnost: 21, cena: 46, ljubaznost: 67}, 'Novi Sad'),
];