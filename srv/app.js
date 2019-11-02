const express = require("express");

async function start(){
    // Create an express app
    const app = express();

    // start http server
    const port = process.env.PORT || "4004";
    return app.listen(port);
}


start().then(() => {
    console.log("Just started some app for testing");
});
