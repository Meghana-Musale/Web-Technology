let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof(myDate));
console.log(myDate.getFullYear());

let myCreatedDate=new Date(2026,1,1);
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());


let myCreatedDate1=new Date("01-01-2026");
console.log(myCreatedDate1);


let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(Date.now()/100);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getHours());


console.log(newDate.toLocaleString('default',{weekday:"long"}));