//singleton object
const user = new Object();
console.log(user); //{}

const user1 = {}; //non singleton object
user1.id = 15;
user1.name = "Meghana";
user1.isLogin = true;
console.log(user1);

//Object iinside the object
const user2 = {
    email : "Meghana@123",
    userName : {
        fullName : {
            fName : "Meghana",
            sName : "Musale"
        }
    }
}
console.log(user2);
console.log(user2.userName);
console.log(user2.userName.fullName);
console.log(user2.userName.fullName.fName);

