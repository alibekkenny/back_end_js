const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.get('/', async (req, res) => {
    res.status(200).send("<h1>Main page<h1>");
});

app.get('/api/users', async (req, res) => {
    const users = await prisma.users.findMany();
    res.status(200).send(users);
});

app.get('/api/users/:id', async (req, res) => {
    const id = Number(req.params.id);
    const user = await prisma.users.findUnique({
        where: {
            id: id,
        }
    });
    res.status(200).send(user);
});

app.post('/api/users', async (req, res) => {
    const newUser = req.body;
    const check = await prisma.companies.findUnique({
        where: {
            id: newUser.companies_id,
        }
    });
    if (check == undefined) {
        res.status(404).send("<h1>ERROR<h1>");
    }
    else {
        const user = await prisma.users.create({ data: newUser })
        res.status(200).send(user);
    }
});

app.put('/api/users', async (req, res) => {
    const updatedUser = req.body;
    const check = await prisma.companies.findUnique({
        where: {
            id: updatedUser.companies_id,
        }
    });
    const user = await prisma.users.findUnique({
        where: {
            id: updatedUser.id,
        }
    });
    if (user == undefined || check == undefined) {
        res.status(404).send("<h1>ERROR<h1>");
    }
    else {
        const newUser = await prisma.users.update({
            where: {
                id: updatedUser.id
            },
            data: updatedUser,
        });
        res.status(200).send(newUser);
    }
});

app.put('/api/users/:id', async (req, res) => {
    const id = Number(req.params.id);
    const updatedUser = req.body;
    const user = await prisma.users.findUnique({
        where: {
            id: id,
        }
    });
    const check = await prisma.companies.findUnique({
        where: {
            id: Number(updatedUser.companies_id),
        }
    });
    if (user == undefined || check == undefined) {
        res.status(404).send("<h1>ERROR<h1>");
    }
    else {
        const newUser = await prisma.users.update({
            where: {
                id: id
            },
            data: updatedUser,
        });
        res.status(200).send(newUser);
    }
});

app.delete('/api/users/:id', async (req, res) => {
    const user = await prisma.users.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });
    if (user == undefined) {
        res.status(404).send("<h1>ERROR<h1>");
    }
    else {
        const deleted = await prisma.users.delete({
            where: {
                id: Number(req.params.id),
            }
        });
        res.status(200).send(deleted);
    }
});


app.get('/api/users/:user_id/posts', async (req, res) => {
    const id = Number(req.params.user_id);
    const posts = await prisma.posts.findMany({
        where: {
            users_id: id,
        }
    });
    if (posts == undefined) {
        res.status(200).send("User has no posts!");
    }
    else {
        res.status(200).send(posts);
    }
});

app.get('/api/companies', async (req, res) => {
    const companies = await prisma.companies.findMany()
    res.status(200).send(companies);
});

app.get('/api/posts', async (req, res) => {
    const posts = await prisma.posts.findMany()
    res.status(200).send(posts);
});

app.get('/api/posts/:id', async (req, res) => {
    const id = Number(req.params.id);
    const post = await prisma.posts.findUnique({
        where: {
            id: id,
        }
    });
    if (post == undefined) {
        res.status(404).send("<h1>ERROR</h1>");
    }
    else {
        res.status(200).send(post);
    }
});

app.post('/api/posts', async (req, res) => {
    const newPost = req.body;
    const check = await prisma.users.findUnique({
        where: {
            id: Number(newPost.users_id),
        }
    });
    if (check == undefined) {
        res.status(404).send("<h1>ERROR<h1>");
    }
    else {
        const createdPost = await prisma.posts.create({ data: newPost })
        res.status(200).send(createdPost);
    }
});

app.put('/api/posts/:id', async (req, res) => {
    const id = Number(req.params.id);
    const newPost = req.body;
    const check = await prisma.users.findUnique({
        where: {
            id: Number(newPost.users_id),
        }
    });
    if (check == undefined) {
        res.status(404).send("<h1>ERROR<h1>");
    }
    else {
        const updatedPost = await prisma.posts.update({
            where: {
                id: id,
            },
            data: newPost,
        });
        res.status(200).send(updatedPost);
    }
});

app.delete('/api/posts/:id', async (req, res) => {
    const id = Number(req.params.id);
    const post = await prisma.posts.delete({
        where: {
            id: id
        }
    });
    res.status(200).send(post);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

