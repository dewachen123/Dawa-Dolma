// ////optional chaining 
// const userProfile ={profile:undefined };
// console.log(userProfile.profile?.name);

// const profile={
//     profilr:{
//         name:"ram"
//     }
// };
// const userProfileName= profile.profile?.name
// const phone=profile.contact?.phone;

///nullish coolescing
// const input=null;
// const result=input?? "guest"
// console.log(result);
//logical && and ||
// const username="" || "Anonyoumas";
// const userage=0|| 20;
// console.log(username,userage);

const isLoggedIn = true && "welcome";
const isOnline =false&& "you are online";
console.log(isLoggedIn,isOnline);

// // double not(!!)
