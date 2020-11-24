module.exports = function (sequelize, DataTypes) {
    var Driver = sequelize.define("Driver", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            },
        },
        cell: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10, 10]
            }
        },
        truck: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        }
    })
    Driver.associate = function (models) {
        Driver.hasMany(models.Loads);
    };
    return Driver
}