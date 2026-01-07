
function Student(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
}

Student.prototype.greet = function () {
    console.log("Hi , I am " + this.name);
};

const s1 = new Student("TADA thangarraj", 1);
const s2 = new Student("PADI parandhaman", 2);

s1.greet();
s2.greet();
