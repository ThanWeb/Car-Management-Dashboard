'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Cars extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate (models) {
        // define association here
        }
    }
    Cars.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        model: DataTypes.STRING,
        image: DataTypes.STRING,
        rentPerDay: DataTypes.INTEGER,
        type: DataTypes.STRING,
        size: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Cars',
        tableName: 'Cars'
    })
    return Cars
}
