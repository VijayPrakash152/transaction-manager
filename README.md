<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://raw.githubusercontent.com/VijayPrakash152/transaction-manager/main/img/logo.png" alt="Transaction-Manager" width="200"></a> 
  <br>
  Transaction-Manager
  <br>
</h1>

<h4 align="center">A node app that generates daily transaction report using transaction data stored in a mongodb database and sends them to the admin via email every midnight using <a href="https://nodemailer.com/" target="_blank">NodeMailer</a>.</h4>

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#license">License</a>
</p>
<p align="center">
  <img width="660" height="400" src="https://raw.githubusercontent.com/VijayPrakash152/transaction-manager/main/img/tm.gif">
</p>

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) and [NodeMailer](https://nodemailer.com/) and put your own credemtials in default.json file situated in config folder for which you can refer [here](https://nodemailer.com/usage/using-gmail/).

```bash
# Clone this repository
$ git clone https://github.com/VijayPrakash152/transaction-manager.git

# Go into the repository
$ cd transaction-manager

# Install MongoDB

To run this project, you need to install the latest version of MongoDB Community Edition first.

[Link to install mongodb](https://docs.mongodb.com/manual/installation/)
```

```
Once you install MongoDB, make sure it's running.


# Install dependencies
$ npm install

# Populate the database
$ node seed.js

# Run the app
$ npm run start

# For development
$ npm run dev
```

## Download

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [NodeMailer](https://nodemailer.com/)
- Emojis are taken from [here](https://github.com/arvida/emoji-cheat-sheet.com)
- [csv-writer](https://www.npmjs.com/package/csv-writer)
- [node-cron](https://www.npmjs.com/package/node-cron)
- [winston](https://www.npmjs.com/package/winston)
- [express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [config](https://www.npmjs.com/package/config)

## License

MIT

---

> GitHub [@VijayPrakash152](https://github.com/VijayPrakash152) &nbsp;&middot;&nbsp;
