
module.exports=(sequelize, DataType)=>{
  const Department=sequelize.define("Department",{
    department_name: {
      type: DataType.STRING,
      allowNull: false
    }, 
    rank: {
      type: DataType.STRING,
      allowNull: false
    },
    short_name: {
      type: DataType.STRING,
      allowNull: false
    },
    id: {
      type: DataType.INTEGER,
      primaryKey: true
  },
  // createdAt: {
  //     // field: 'created_at',
  //     type: DataType.DATE,
  // },
  // updatedAt: {
  //     // field: 'updated_at',
  //     type: DataType.DATE,
  // },
  },{
    freezeTableName : true,
    createdAt: false,
    updatedAt: false
    // modelName: 'department',
    // tableName: 'department',
    
  });
  Department.associate=models=>{
    Department.hasOne(models.User, {
      foreignKey: 'dep_id' 
     });
}
  

  return Department;
}





// const { Sequelize, DataTypes, Model } = require('sequelize');


// class Department extends Model {}
// // id, department_name, rank, short_name, org_id
// Department.init({
//   department_name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }, rank: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   short_name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   }, {
//     freezeTableName : true,
//     modelName: 'department',
//     tableName: 'department',
//     sequelize,
//   });
//   Department.hasOne(Organization, {
//      foreignKey: 'dep_id' 
//     });
//   // module.exports=Department;

//   // export default Department;