
var mysql=require('mysql');

var DatabaseConnectionConfig={host:"localhost", user:"root", password:'',
    database:'school'
};
var con=mysql.createConnection(DatabaseConnectionConfig);
con.connect(function (error) {
    if(error){
        console.log('Connection fail');
    }else {
        console.log('Connection Success');
        // InsertData(con);
        //DeleteDataById(con);
        // UpdateData(con);
        SelectData(con);
    }
});
function InsertData(con) {
    let SQL_Query="INSERT INTO `student_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Swapon','04','12','014839383','Mhakhali')"
    con.query(SQL_Query,function (error) {
        if(error){
            console.log('insert data fail');
        }else {
            console.log('insert data success');
        }

    })
}
function DeleteDataById(con) {
    let SQL_Query="DELETE FROM `student_list` WHERE `id`='2'";
    con.query(SQLQuery,function (error) {
        if(error){
            console.log("Data Delete fail");
        }
        else{
            console.log("Data Delete Success");
        }
    })
}
function UpdateData(con) {
    let SQL_Query="UPDATE `student_list` SET `phone`='11111111111',`city`='Rangpur' WHERE `id`='4'";
    con.query(SQL_Query,function (error) {
        if(error){
            console.log('update  data fail');
        }else {
            console.log('update data success');
        }

    })
}

function SelectData(con) {
    let SQL_Query="SELECT * FROM `student_list`";

    con.query(SQL_Query,function (error,result) {
        if (error){

            console.log('Data Select Fail');
        }else {
            console.log(result);
        }
    })
}



/*


function UpdateData(con) {
    let SQLQuery="UPDATE `students_list` SET `phone`='11111111111',`city`='Rangpur' WHERE `id`='4'";
    con.query(SQLQuery,function (error) {
        if(error){
            console.log("Data Update fail");
        }
        else{
            console.log("Data Update Success");
        }
    })
}*/
