import app from "./API Rest/src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escutando em "http://localhost:${port}"`);
})