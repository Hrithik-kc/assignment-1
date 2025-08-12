 const students = [
 { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
 { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
 { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
 { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
 { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
 { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
 { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
 { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
 { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
 ];
// MAP Questions
// let body=students.map((el)=>el=el.name);
// console.log(body);

// let b=students.map((el)=>el={name:el.name,course:el.course});
// console.log(b);

// let d=students.map((el)=>{
//  if(el.marks>=60)
//     {
//     el.status="Pass";
//     }
// else
//     {
//     el.status="Fail";
//    }
//    return el;
// });
// console.log(d);

// let b=students.map((el)=>{
//       el={name:el.name ,course:el.course}
//       console.log(el.name, "-" ,el.course);
// });

// let e=students.map((el)=>el={name:el.name ,mark:el.marks+5});
// console.log(d);

// Filter   Questions
//  let f=students.filter((el)=> el>=el.course="computer science");
// console.log(d);

// let comp=students.filter((el)=>el.course==="Computer Science");
// console.log(comp);
    
//  let mar=students.filter((el)=>el.marks>=80);
// console.log(mar);

//  let fee=students.filter((el)=>el.feesPaid===false);
// console.log(fee);

//  let age=students.filter((el)=>el.marks>=70 && el.age>=20);
//  console.log(age);

//  let bran=students.filter((el)=>el.marks<=85 && el.course==="Mechanical" );
//  console.log(bran);

// Reduce Question

//  const total=students.map((el)=>marks=el.marks).reduce((el, ui)=>ui=el+ui);
//  console.log(total);

// const total=students.map((el)=>marks=el.marks).reduce((el, ui)=>ui=(el+ui));
//  console.log(total/10);

// const count=students.map((el)=>fees=el.feesPaid).reduce((el, ui)=>ui=el+ui);
//  console.log(count);

// const high = students.map((bl)=>marks=bl.marks).reduce((bl,ui)=>{
// if(ui>bl) {
//     bl=ui; 
// }
//     return bl;
// });
// console.log(high);