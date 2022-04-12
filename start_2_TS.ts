// # Typescript - Exercise 2 Typescript -
// Creare una classe che implementi l'interfaccia dell'esercizio precedente ed esponga un metodo che restituisca il fullName
//
// Dichiarativa delle variabili fuori dalla classe e delle interace
// enum dei ruoli per inizializzare con valori controllati fin dalla stesura del codice
enum Roles {
  Staff = "staff",
  Student = "student",
  Manager = "manager",
  Admin = "admin",
}
// enum dei genders per inizializzare con valori controllati fin dalla stesura del codice
enum Genders {
  Male = "male",
  Female = "female",
  Other = "other",
}
// interface degli oggetti e degli array comeposti da oggetti
interface IAddress {
  city: string;
  street: string;
  postalCode: string;
}
// interface modulare di companies/azienda riutilizzabile
interface ICompany {
  id: number;
  name: string;
  description: string;
  location: IAddress; // interface annidata richiamo interface degli indirizzi
}
// da Gabri aggiunge interface User per controllare le rimanenti variabili, oltre agli oggetti.........
interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: Date;
  address: IAddress;
  role: Roles;
  username: string;
  profilePhotoUrl: string;
  companies: ICompany[];
  gender: Genders;
}
// fine aggiunta da Gabri
class User {
  // dichiaro le varibili e le inizializzo altrimenti vanno in errore(?)
  id: number = 0;
  name: string = "";
  surname: string = "";
  age: number = 0;
  dateOfBirth: Date;
  address: IAddress; // richiamo interface degli indirizzi
  role: Roles; // richiamo enum dei ruoli
  username: string = "";
  profilePhotoUrl: string = "";
  companies: ICompany[]; // richiamo interface di company in un array
  gender: Genders; // richiamo enum dei genders
  // il costruttore mi porta in this tutte le variabili di costruzioni dell'oggetto
  constructor(
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: Date,
    address: IAddress,
    role: Roles,
    username: string,
    profilePhotoUrl: string,
    companies: ICompany[],
    gender: Genders
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
    this.role = role;
    this.username = username;
    this.profilePhotoUrl = profilePhotoUrl;
    this.companies = companies;
    this.gender = gender;
  }
  pubblica() {
    return `${this.name} ${this.surname}`;
  }
}
//
// instanzia oggetto di cui prendere full name
const obj = new User(
  3487,
  "Mario",
  "Rossi",
  25,
  new Date("1995-14-12"),
  // address obj
  { city: "Roma", street: "Via roma 10", postalCode: "00100" },
  Roles.Staff,
  "MarioRossi80",
  "https://bit.ly/3yRngEP",
  // Companies array di oggetti contenente obj location = address obj
  [
    {
      id: 148979,
      name: "Develhope",
      description: "La migliore",
      // location  = address
      location: {
        city: "Palermo",
        street: "Via Libertà 58",
        postalCode: "90139",
      },
    },
    {
      id: 123123,
      name: "Apple",
      description: "E insomma...",
      // location  = address
      location: {
        city: "Cupertino",
        street: "One Apple Park Way",
        postalCode: "95014",
      },
    },
  ],
  Genders.Male
);
// richiamo metodo dell'oggetto instanziato
console.log(obj.pubblica());
