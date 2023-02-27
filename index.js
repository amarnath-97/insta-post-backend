import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();

app.use(cors());

app.use('/', async (req, res) => {
    const {code} = req.query;
    const response = await fetch(`https://api.instagram.com/oauth/access_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `client_id=708865567383723&client_secret=5b8d7e24b6e6ba4746717f3f47900f69&grant_type=authorization_code&redirect_uri=https://insta-post-ts.vercel.app/&code=${code}`
    });
    const data = await response.json();

    res.send(data)
});



const port = process.env.PORT || 8080;

app.listen(port, () =>{
    console.log('Server is up and running on port:'+ port);
});