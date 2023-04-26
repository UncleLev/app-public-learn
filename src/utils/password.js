import crypto from "crypto";
// const crypto = require("crypto");

function hashPassword(password) {
    const hash = crypto.createHash("sha256");
    hash.update(password);
    return hash.digest("hex");
}

const p = hashPassword("12346789");
console.log(" -----");
console.log("p:", p);
console.log(" -----");
