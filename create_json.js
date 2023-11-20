
class Address
{
    constructor(street, suit, city, zip) 
    {
      this.street = street;
      this.suit = suit;
      this.city = city;
      this.zip = zip;
    }
}

class Geo
{
    constructor(lat, long) 
    {
      this.lat = lat;
      this.long = long;
    }
}

class Company
{
    constructor(name, catchPhrase, bs) 
    {
      this.name = name;
      this.catchPhrase = catchPhrase;
      this.bs = bs;
    }
}

class Person 
{
    constructor(id, name, username, email, address, geo, phone, website, company) 
    {
      this.id = id;
      this.name = name;
      this.username = username;
      this.email = email;
      this.address = address;
      this.geo = geo;
      this.phone = phone;
      this.website = website;
      this.company = company
    }
  }


var array = Array(0);
array.push(new Person(1,
     "Leanne Graham",
     "Bret",
     "Sincere@april.biz",
     new Address("Kulas Light", "Apt. 556", "Gwenborough", "92998-3874"),
     new Geo("-37.3159","81.1496"),
     "1-770-736-8031 x56442",
     "hildegard.org",
     new Company("Romaguera-Crona", "Multi-layered client-server neural-net", "harness real-time e-markets")));
array.push(new Person(2,
     "Ervin Howell",
     "Antonette",
     "Shanna@melissa.tv",
     new Address("Victor Plains", "Suite 879", "Wisokyburgh", "90566-7771"),
     new Geo("-43.9509","-34.4618"),
     "010-692-6593 x09125",
     "anastasia.net",
     new Company("Deckow-Crist", "Proactive didactic contingency", "synergize scalable supply-chains")));

var json =  JSON.stringify(array);
console.log(json);

var fs = require("fs");
fs.writeFile('db.json', json, function(){
    console.log("Upisano");
});

