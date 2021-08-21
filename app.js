const express = require("express")
const app = express()

app.use("/", (req, res) => {

    res.send("hello world");
});


app.listen(8000,(error)=>{
    if (error) {
        console.log(error);
        return;
    }
    console.log("server is running at http://localhost:8000")
});