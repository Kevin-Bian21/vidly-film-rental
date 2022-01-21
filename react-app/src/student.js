import Person from "./person";

export class Student extends Person{
    constructor(name,age) {  // ReferenceError：Must call super constructor in derived class before accessing 'this' or returning from derived constructor
      super(name);
      this.age = age;
    }
    study(){
      console.log("study hard");
    }
}