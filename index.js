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
    const account = {
      name: "test",
      balance: 2000,
      accountNumber: "ES2131313123" 
  }
res.send(account);
});

app.patch("/updateBalance/:operation", (req, res) => {
  // console.log(req.params)
  const {type , amount} = req.body;
  const {operation} = req.params;

  const datos = {
    type,
    amount,
    operation
  }
res.send(datos);
});

app.listen(5000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});