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
            get() {
                return moment(this.getDataValue('puDate')).format('DD/MM/YYYY h:mm');
            }
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                return moment(this.getDataValue('dueDate')).format('DD/MM/YYYY h:mm:ss');
            }
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