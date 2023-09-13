import express from "express";

const app = express();

app.use(express.json());
app.get("/accountNumber/:id", (req, res) => {
    console.log(req.params)
    const account = {
        name: "test",
        balance: 2000,
        accountNumber: "ES2131313123" 
    }
  res.send(account);
});

app.post("/createAccount/", (req, res) => {
    // console.log(req.params)
    // const account = {
    //     name: "test",
    //     balance: 2000,
    //     account_number: "ES2131313123" 
    // }
    console.log(req.body)
  res.send(req.body);
});

app.listen(5000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});