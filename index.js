import express from "express";

const app = express();

app.use(express.json());
app.get("/api/v1.0/accounts/client/:client_id", (req, res) => {
    console.log(req.params)
    const account = {
        name: "test",
        balance: 2000,
        account_number: "ES2131313123" 

    }
  res.send(account);
});

app.post("/api/v1.0/accounts/client", (req, res) => {
    // console.log(req.params)
    // const account = {
    //     name: "test",
    //     balance: 2000,
    //     account_number: "ES2131313123" 
    // }
    console.log(req.body)
    const account = {
      name: "test2",
      balance: 2000,
      account_number: "ES2131313123" 
  }
res.send(account);
});


app.post("/api/v1.0/accounts/client/operation/:client_id", (req, res) => {
  // console.log(req.params)
  const {type , amount} = req.body;
  const {client_id} = req.params;

  const datos = {
    operation_id: "12345",
    operation_datetime: "2023-09-05T14:30:00Z",
    client_id: client_id,
    balance: amount
  }
  console.log({type})
  res.send(datos);
});

app.listen(5000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});