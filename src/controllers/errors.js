const notFound = (req,res) => {
    res.status(404).send("<h1> page not found</h1>")
}

const serverError = (err,req,res,next) => {
    res.status(500).send ("<h1>500 server error</h1>")
}

module.exports = {notFound , serverError}