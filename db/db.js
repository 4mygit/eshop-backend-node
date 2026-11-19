require('dotenv').config();
const Sequelize = requrie('sequelize');


const DB = process.env.DBNAME
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD

const sequelize = new Sequelize(DB,USER,PASSWORD, {
    host:'localhost',
    dialect:'mysql'
})

(async()=>{

    try{
      await  sequelize.authenticate();
    }
    catch(e){
        console.log(e);
    }
})();

module.exports = sequelize;