const asyncHandeller = (requesthandeller) => {
    return (req, res, next) => {
        Promise.resolve(requesthandeller(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandeller}





// const asyncHandeller = (fn) => async (req, res, next) => {
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             messege: error.messege
//         })
//     }
// }