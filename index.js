import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


dotenv.config(); // Load environment variables from .env file

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT;



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', join(__dirname, 'views'));

app.get('/resume', (req, res) => {
    // Render the index.ejs template
    res.render('index.ejs');
});

app.get('/resume/contact', (req, res) => {
    // Render the index.ejs template
    res.render('contact.ejs');
});

app.get('/resume/hobbies', (req, res) => {
    // Render the index.ejs template
    res.render('hobbies.ejs');
});

app.get('/resume/projects', (req, res) => {
    // Render the index.ejs template
    res.render('projects.ejs');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
