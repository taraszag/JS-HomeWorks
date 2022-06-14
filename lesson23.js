const person = {
    firstName: "Peter",
    lastName: "Johnson",
    birthYear: 1976,
    getFullName: function() {
      let fullName = this.firstName + " " + this.lastName;
      return fullName;
    },
    getAge: function() {
      return (new Date()).getFullYear() - this.birthYear;
    },
    get age() {
      return (new Date()).getFullYear() - this.birthYear;
    },
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
  }

  console.log(person);
  console.log(person.firstName)
  console.log(person.getFullName());
  console.log(person.getAge());
  console.log(person.age);
  console.log(person.birthYear); 