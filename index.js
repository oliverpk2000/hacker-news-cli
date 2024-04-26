#!/usr/bin/env node

const commander = require('commander');
const {Api} = require("./src/api");
const api = new Api('https://hacker-news.firebaseio.com/v0/');
const program = new commander.Command();

const get = program.command('get');


get
    .command('newest')
    .action(async () => {
        try {
            let maxitem = await api.getNewest();
            let post = await api.getPost(maxitem);
            console.log(post);
        } catch (error) {
            console.log(error);
        }
    });

get
    .command('top')
    .action(() => {
        console.log('top');
    });

get
    .command('best')
    .action(() => {
        console.log('best');
    });

program.parse(process.argv);