const findAuthors = async (obj) =>{
    console.log("Mocked GET all authors")
    return Promise.resolve([{
        _id:"64e72dd100a09b25657ec15c",
        name: "Phat Nguyen",
        book: "64e712fcfe48b3e2527453ac",
        publisher: "CTTNHH1MT",
        website: "http:phatdeptraipro",
        twitter: "@PhatNguyen",
        about: "I'm a handsome author"
    }])
}
const findAuthorByBookId = async (obj) =>{
    console.log("Mocked GET author by Id")
    return Promise.resolve({
        _id:"64e72dd100a09b25657ec15c",
        name: "Phat Nguyen",
        book: "64e712fcfe48b3e2527453ac",
        publisher: "CTTNHH1MT",
        website: "http:phatdeptraipro",
        twitter: "@PhatNguyen",
        about: "I'm a handsome author"
    })
}
const saveAuthor = async (newAuthor) =>{
    console.log("Mocked save author")
    return Promise.resolve({
        _id:"64e72dd100a09b25657ec15c",
        name: "Phat Nguyen",
        book: "64e712fcfe48b3e2527453ac",
        publisher: "CTTNHH1MT",
        website: "http:phatdeptraipro",
        twitter: "@PhatNguyen",
        about: "I'm a handsome author"
    })
}
const updateAuthor = async (filter, update)=>{
    console.log("Mocked update author")

    return Promise.resolve(
        {
            "acknowledged": true,
            "modifiedCount": 1,
            "upsertedId": null,
            "upsertedCount": 0,
            "matchedCount": 1
        })
}

const deleteAuthor = async (obj)=>{
    console.log("Mocked delete author")

    return Promise.resolve({
        "acknowledged": true,
        "deletedCount": 1
    })
}
module.exports = {findAuthorByBookId, findAuthors, saveAuthor, updateAuthor, deleteAuthor}