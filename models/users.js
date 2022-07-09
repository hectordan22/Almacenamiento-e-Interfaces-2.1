
module.exports = (Sequelize,type)=>{
    return Sequelize.define('user',{
        id:{
            type:type.INTEGER,
            primaryKey : true,
            autoIncrement:true
            
        },
        username:type.STRING,
        email: type.STRING,
        password : type.STRING(150),
        tipo : type.STRING
    });
}