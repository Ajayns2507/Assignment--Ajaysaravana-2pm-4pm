
class student {
    constructor(name,rollNo){
        this.name=name;
        this.rollNo=rollNo
    }
    display(){
        console.log("Name :"+ this.name +", RollNo: " + this.rollNo)
    }
}
const s1 = new student ("sullan",76);
const s2 = new student ("seenu",90);
const s3 = new student ("sheetu sathish",9);

s1.display()
s2.display()
s3.display()
