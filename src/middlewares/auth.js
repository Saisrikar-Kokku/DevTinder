const adminAuth = (req, res, next) => {
    console.log("Admin auth is getting Checked !!!!...");

    const token = "srikar123";
    const isAuthorized = token === "srikar123";

    if (!isAuthorized) {
        res.status(401).send("UnAuthorized User ");
    }
    else {
        next()
    }
}
const UserAuth = (req, res, next) => {
    console.log("Admin auth is getting Checked !!!!...");

    const token = "srikar123";
    const isAuthorized = token === "srikar123";

    if (!isAuthorized) {
        res.status(401).send("UnAuthorized User ");
    }
    else {
        next()
    }
}

module.exports = { adminAuth, UserAuth };
