//a “person” class to hold all the details
class person{
    
    constructor(name,age,fatherName,motherName,siblings,maritalStatus,qualification,job,email,hobbies,phoneNumber,address,city,country,nationality){
       this.Name=name;
       this.Age=age;
       this.FatherName=fatherName;
       this.MotherName=motherName;
       this.Siblings=siblings;
       this.MaritalStatus=maritalStatus;
       this.Qualification=qualification;
       this.Job=job;
       this.Email=email;
       this.Hobbies=hobbies;
       this.PhoneNumber=phoneNumber;
       this.Address=address;
       this.City=city;
       this.Country=country;
       this.Nationality=nationality;
    }
    
}
const person1=new person('Bingo',
    23,
    'Walter',
    'Selena',
    ['Justin','Delin'],
    'Unmarried',
    'B.Sc',
    'Salesman',
    'bingo123@gmail.com',
    ['Reading','Singing','Dancing','Watching Cricket'],
    6734567223,
    {DoorNumber:'3-456',
        Street:'R C Street',
        LandMark:'Near SVR hotel',
        Town:'George Town'},
    'Chennai',
    'India',
    'Anglo-Indian');
console.log(person1);

