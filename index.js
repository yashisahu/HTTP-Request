import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/Contact",(req, res) => {
    res.send("8052592639");
});

app.get("/About me", (req, res) => {
    res.send("hello, It's me Yashi Sahu.")
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
