import { Octokit } from '@octokit/rest';
import express from 'express';
import cors from 'cors'






const app = express();
app.use(cors());
app.use(express.json())
app.post('/svg_response', async (req, res) => {
   
    const {auth,owner,repo,path} = req.body

    const octokit = new Octokit({
        auth:auth,
        baseUrl: 'https://api.github.com',
        mediaType:{format:'raw'}
    })
    octokit.repos.getContent({
        owner: owner,
        repo: repo,
        path: path,
        headers: {
            "Accept": "application/vnd.github.v3.raw"
        }
      })
   
          .then(response=>(res.send(response.data.toString())))
    

  
      
});

app.listen('9000',()=>console.log("Running"));

