

module.exports=(sequelize, DataType)=>{
    const Student=sequelize.define("Student",{
         name:{
             type:DataType.STRING
         },
        //  age:{
        //     type:DataType.STRING
        // },
        // dep:{
        //     type:DataType.STRING
        // }
    },{ freezeTableName : true,
        createdAt: false,
        updatedAt: false
    }
   
    );
    return Student;
}