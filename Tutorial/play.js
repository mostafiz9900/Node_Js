
var name='Mostafizur';
let age=27;
const hasHobbies=true;
//  function create r-1
function sumUser(name,age,hasHobbies) {
    return ('Name : '+ name +' Age :'+ age + ' Hobbies : '+ hasHobbies);
    
}
//  function create r-2 name function
 var sumUser2=function (name,age,hasHobbies) {
    return ('Name : '+ name +' Age :'+ age + ' Hobbies : '+ hasHobbies);
    
}
//  function create r-2 remove  function key word
var sumUser3= (name,age,hasHobbies)=> {
    return ('Name : '+ name +' Age :'+ age + ' Hobbies : '+ hasHobbies);
    
}


const add=(a,b)=>{
    return a + b;
}
const add2=(a,b)=> a + b;
const add3=a=> a + 1;

const addRandom=()=> 1 + 1;


// console.log(addRandom());



const person={
    name:"Mostafiz",
    age:28,
    greet:function(){
        console.log('Hi i am '+ this.name);
    }
};
const person2={
    name:"Mostafiz",
    age:28,
    greet:()=>{
        console.log('Hi i am '+ this.name);
    }
};
const person3={
    name:"Mostafiz",
    age:28,
    greet(){
        console.log('Hi i am '+ this.name);
    }
};
// person.greet();
// person2.greet();
// person3.greet();

// console.log(add(2,5));
// console.log(add2(4,5));
// console.log(add3(10));
// console.log(sumUser(name, age, hasHobbies));
// console.log(sumUser2(name, age, hasHobbies));
// console.log(sumUser3(name, age, hasHobbies));
// console.log(name);




const hobbies=["Sports","Computin", "Playing"];

// for(let hobb of hobbies){
//     console.log(hobb);
// }

hobbies.map(hobb => console.log(hobb)
);

// console.log(hobbies);

// multipule argument 

const toArray=(...args)=>{
    return args;
}
console.log(toArray(1,2,4,5,6));