module.exports = function (sequelize, DataTypes) {
    var Load = sequelize.define("Load", 
    {
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
            type: DataTypes.DATE,
            allowNull: false,
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        trailer: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },


    })
    Load.associate = function(models){
        Load.belongsTo(models.Driver, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Load
}