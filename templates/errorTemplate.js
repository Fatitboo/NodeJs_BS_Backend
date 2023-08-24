const errorTemplate = (res, err, message, errStatus=501) =>{
    return res.status(errStatus).json({
        error: {
            message: message,
            status: err.status
        }
    })
}
module.exports = errorTemplate;