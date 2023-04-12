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
            type: DataTypes.STRING
        },
        plate: DataTypes.STRING,
        manufacture: DataTypes.STRING,
        model: DataTypes.STRING,
        image: DataTypes.STRING,
        rentPerDay: DataTypes.INTEGER,
        capacity: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        availableAt: DataTypes.STRING,
        transmission: DataTypes.STRING,
        available: DataTypes.BOOLEAN,
        type: DataTypes.STRING,
        year: DataTypes.INTEGER,
        options: DataTypes.TEXT,
        specs: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Cars',
        tableName: 'Cars'
    })
    return Cars
}
