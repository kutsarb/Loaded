module.exports = function (sequelize, DataTypes) {
    var Loads = sequelize.define("Loads", {
        broker: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        loadNum: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1, 75]
            }
        },
        puAddress: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        doAddress: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        puDate: {
            type: DataTypes.DATETIME ,
            allowNull: false,
        },
        dueDate: {
            type: DataTypes.DATETIME ,
            allowNull: false
        },
        trailer: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        active: DataTypes.Boolean,

        defaultValue: false

    })
    Loads.associate = function(models){
        Loads.belongsTo(models.Driver, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Loads
}