

module.exports=(sequelize, DataType)=>{
    const Organization=sequelize.define("Organization",{
        org_name:{
             type:DataType.STRING,
             allowNull:false
         },
         phone:{
            type:DataType.STRING,
               allowNull:false
        },
        org_chief_name:{
            type:DataType.STRING,
             allowNull:false
        },
    },{ freezeTableName : true,
        createdAt: false,
        updatedAt: false
    }
   
    );
    // Organization.associate=models=>{
    //     Organization.hasOne(models.User,{
    //         // onDelete:"cascade",
    //         forignKey:"org_id",
    //         freezeTableName : true,
    //     });
    // }
    return Organization;
}