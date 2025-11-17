import app from './app.js';


//to access any variable from .env file we simply use process.env.VARIABLE_NAME
app.listen(process.env.PORT, () => {
console.log(`Server is running on port ${process.env.PORT}`);
})
    