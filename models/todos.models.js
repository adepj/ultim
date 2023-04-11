const { DataTypes } = require ("sequelize");
const db = require ("../utils/database");

const Todos = db.define( "todos",{
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title:{
        type:  DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },

    description:{
        type:  DataTypes.STRING(30),
        allowNull: false,
       
    },

    status:{
        type:  DataTypes.STRING(30),
        allowNull: false,
       
    },
categories:{
    type: DataTypes.INTEGER,
    allowNull:false,
    field:"categories"
},
   
});

module.exports = Todos;