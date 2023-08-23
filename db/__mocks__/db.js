const connect =async ()=>{
    console.log('MongoDB mocked connection');       
}
const disconnect = async ()=>{
    console.log('MongoDB mocked disconnection');       
}
const findUser = async (obj)=>{
   return Promise.resolve({
    firstName: "Phat",
    lastName: "Nguyen",
    address: "Binh Chuong, Binh Son",
    city: "Quang Ngai",
    state: "Viet Nam",
    zip: "30023",
    email: "vanpat@gmail.com",
    password: "12345"
});
}
const saveUser = async (newUser)=>{
    return Promise.resolve({
        firstName: "Phat",
        lastName: "Nguyen",
        address: "Binh Chuong, Binh Son",
        city: "Quang Ngai",
        state: "Viet Nam",
        zip: "30023",
        email: "vanpat@gmail.com",
        password: "12345"
    });
}
module.exports = {connect, disconnect, findUser, saveUser};