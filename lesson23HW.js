const person = {
    firstName: "Peter",
    lastName: "Johnson",
    birthYear: 1976,

    get age() {
      return (new Date()).getFullYear() - this.birthYear;
    },
    get fullName () {
      return `${this.firstName} ${this.lastName}`;
    },
    set age(years) {
      this.birthYear = (new Date()).getFullYear() - years;
    },
    set fullName (fName) {
        let s = 0
        for (let i = 0; i < fName.length; i+=1){
            if( fName[i] == " "){
            s=i;
            }
        }
        this.firstName=fName.substring(0,s)
        this.lastName=fName.substring(s+1,)
    }
  }

  console.log(person);
  console.log(person.firstName)
  person.firstName = "Jacob";
  console.log(person.firstName)
  console.log(person.fullName)
  // console.log(person.getFullName());
  // console.log(person.getAge());
  console.log(person.birthYear);
  person.birthYear = 1988;
  console.log(person.birthYear);
  console.log(person.age); // person.age()
  person.age = 28; // person.age(28)
  console.log(person.age);
  console.log(person.birthYear);
  person.fullName = "John Jackson";
  console.log(person.fullName) // "John Jackson";
  console.log(person.firstName) // "John";
  console.log(person.lastName) // "Jackson";

  const t = {
    celsius:0,

    get fahrenheit(){
        return  this.celsius*9/5+32;
    },
    set fahrenheit(farh){
      this.celsius = 5 / 9 * (farh- 32)
    }
}

  t.celsius = 0;
  console.log(t.celsius); // 0
  console.log(t.fahrenheit) // 32

  t.fahrenheit = 100;
  console.log(t.fahrenheit) // 100
  console.log(t.celsius) // 37.7778
  console.log(5/9*(100-32))