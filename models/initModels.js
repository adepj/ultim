const Users = require ("./users.models");
const Todos = require ("./todos.models");
const Categories = require ("./categories.models");

const initModels = () => {

    Users.hasMany(Todos, {foreignKey: "title"});
    Todos.belongsTo(Users, {foreignKey: "title"});
    Categories.hasMany(Todos, {foreignKey: "categories"});
    Todos.belongsTo(Categories, {foreignKey: "categories"})  

};

module.exports = initModels;