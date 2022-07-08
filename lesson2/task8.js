const human = {
  firstName: '',
  lastName: '',
  age: null,
  _dateOfBirth: '',
  set fullName(name) {
    this.firstName = name.split(' ')[0]
    this.lastName = name.split(' ')[1]
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  set dateOfBirth(date) {
    this.age = Math.floor((new Date() - new Date(date))/(1000*3600*24*365))
    this._dateOfBirth = date
  },
  get dateOfBirth() {
    return this._dateOfBirth
  }
}

human.fullName = 'Art Cont'
human.dateOfBirth = '1990-6-12'
console.log(human.firstName);
console.log(human.lastName);
console.log(human.fullName);
console.log(human.age);
console.log(human.dateOfBirth);
