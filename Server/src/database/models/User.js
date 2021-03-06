/**
 * Metodo creacion modelo Generos
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/dist').DataTypes} DataTypes 
 */
//Lo anterior es para generar un autocompletado

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(             //nombre del modelo en plural
        "User", 
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: { type:DataTypes.STRING(255)},
            apellido: { type:DataTypes.STRING(255)},
            email: { type:DataTypes.STRING(255)},
            direccion: { type:DataTypes.STRING(255)},
            fechaNacimiento: { type:DataTypes.DATE},
            password: { type:DataTypes.STRING(255)},
            imagen: { type:DataTypes.STRING(255)},
        },
        {
            tableName: "users",
            timestamps: false
        }
    );

    User.associate = models => {
        
        User.belongsTo(models.Rol, {
            as: "Rol",
            foreignKey: "roleId"
        });
    }  

    return User;           //Debemos retornar el mismo objeto
}