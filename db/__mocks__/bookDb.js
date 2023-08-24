const findBooks = async (obj, selectedValues) => {
    console.log("Mocked get All books")
    return Promise.resolve([
        {
            _id: "64e712fcfe48b3e2527453ac",
            title: "Hanh phuc cua mot tang gia",
            author: "Phat Nguyen",
            ISBN: "10-23834-2394",
            numberOfPages: 200,
            price: 100000,
            yearPublished: "1945"
        },
    ])
}
const findBook = async (obj, selectedValues) => {
    console.log("Mocked get one book")

    return Promise.resolve({
        _id: "64e712fcfe48b3e2527453ac",
        title: "Hanh phuc cua mot tang gia",
        author: "Phat Nguyen",
        ISBN: "10-23834-2394",
        numberOfPages: 200,
        price: 100000,
        yearPublished: "1945"
    })
}
const saveBook = async (newBook) => {
    console.log("Mocked save book")

    return Promise.resolve({
        _id: "64e712fcfe48b3e2527453ac",
        title: "Hanh phuc cua mot tang gia",
        author: "Phat Nguyen",
        ISBN: "10-23834-2394",
        numberOfPages: 200,
        price: 100000,
        yearPublished: "1945"
    })
}
const updateBook = async (filter, update) => {
    console.log("Mocked update book")

    return Promise.resolve(
        {
            "acknowledged": true,
            "modifiedCount": 1,
            "upsertedId": null,
            "upsertedCount": 0,
            "matchedCount": 1
        })
}

const deleteBook = async (obj) => {
    console.log("Mocked delete book")

    return Promise.resolve({
        "acknowledged": true,
        "deletedCount": 1
    })
}
module.exports = { findBooks, findBook, saveBook, updateBook, deleteBook }