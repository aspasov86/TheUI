import m17 from '../assets/M17.jpg'
import m18 from '../assets/M18.jpg'
import m39 from '../assets/M39.jpg'
import m43 from '../assets/M43.jpg'

export const trueLogin = {
    username: 'acko1986@yahoo.com',
    password: 'Cliveowen20.'
};

const ids = [9426446563, 7410887671, 9083503333, 9233201614];
const images = [m17, m18, m39, m43];

class Majstor {
    constructor(firstName, lastName, email, phoneNumber, stats, place, occupation) {
        this.id = (() => {
            let firstOne = ids[0];
            ids.splice(0, 1);
            return firstOne;
        })()
        this.image = (() => {
            let first = images[0];
            images.splice(0,1);
            return first;
        })()
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phoneNumber = phoneNumber
        this.stats = stats
        this.place = place
        this.occupation = occupation
    };
};

export const majstors = [
    new Majstor('Jovan', 'Ilic', 'jova@ilic.com', '063/444-331', { brzina: 33, pedantnost: 51, cena: 56, ljubaznost: 47}, 'Zrenjanin', 'Vodoinstalater'),
    new Majstor('Milivoje', 'Zbulj', 'zbulj@mil.com', '061/5414-731', { brzina: 57, pedantnost: 71, cena: 16, ljubaznost: 87}, 'Jagodina', 'Elektricar'),
    new Majstor('Bojan', 'Gorkov', 'gore@yahoo.com', '069/4712-781', { brzina: 73, pedantnost: 51, cena: 96, ljubaznost: 87}, 'Beograd', 'Zidar'),
    new Majstor('Veroljub', 'Ciric', 'cira@gmail.com', '064/777-991', { brzina: 13, pedantnost: 21, cena: 46, ljubaznost: 67}, 'Novi Sad', 'Stolar'),
];