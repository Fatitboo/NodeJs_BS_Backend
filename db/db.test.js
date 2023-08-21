const mongoose = require('mongoose');
const { connect, disconnect, findUser, saveUser } = require('./db.js');
const User = require('../models/userModel.js');
beforeAll(async () => {
    return await connect();
});

describe('User test Suite', () => {
    test('As a user i want to save a user to database', async () => {
        const newUser = new User({
            _id:new  mongoose.Types.ObjectId() ,
            firstName: "Phat",
            lastName: "Nguyen",
            address: "Binh Chuong, Binh Son",
            city: "Quang Ngai",
            state: "Viet Nam",
            zip: "30023",
            email: "vanpat@gmail.com",
            password: "12345"
        });
        const user = await saveUser(newUser);
        expect(user.firstName).toEqual("Phat");
        expect(user.lastName).toEqual("Nguyen");
        expect(user.address).toEqual("Binh Chuong, Binh Son");
        expect(user.city).toEqual("Quang Ngai");
        expect(user.state).toEqual("Viet Nam");
        expect(user.zip).toEqual("30023");
        expect(user.email).toEqual("vanpat@gmail.com");
        expect(user.password).toEqual("12345");

    });

    test('As a user i want to find a user by using any properties', async ()=>{
        const obj = { firstName: "Phat"};
        await findUser(obj).then((user)=>{
            expect(user.firstName).toBe("Phat")
        }).catch((err)=>{
            console.log("err: "+ err.messag)
        })
    })
})

afterAll(async () => {
    return await disconnect();
})