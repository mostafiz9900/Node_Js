

module.exports=(sequelize, DataType)=>{
    const User=sequelize.define("User",{
         first_name:{
             type:DataType.STRING,
             allowNull:false
         },
         gender:{
            type:DataType.STRING,
               allowNull:false
        },
        user_name:{
            type:DataType.STRING,
             allowNull:false
        },mobile:{
            type:DataType.STRING,
            allowNull:false
        },
        // org_id:{
        //     type:DataType.STRING,
        //      allowNull:false
        // },
    },{ freezeTableName : true,
        createdAt: false,
        updatedAt: false,
        // tableName: 'user',
    }
   
    );
    User.associate=models=>{
        // User.belongsTo(models.Organization,{
        //     // allowNull:false,
        //    foreignKey:"org_id"
        // });
        User.belongsTo(models.Department, {
             foreignKey: 'dep_id'
             });
    }
    return User;
}