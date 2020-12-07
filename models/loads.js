module.exports = function (sequelize, DataTypes) {
    var Loads = sequelize.define("Load", {
        broker: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        loadNum: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 75]
            }
        },
        puAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        doAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        puDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        dueDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        trailer: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        future: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        enRoute: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        delivered: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }

    })
    Loads.associate = function (models) {
        Loads.belongsTo(models.Driver, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Loads
}