function insert() {
   day = $('#days').value; 
    console.log(day);
    sql.query('insert into list(days,list) values("'+day+',"huda")',function(err,row,col){
        if(err)
        {
            console.log('Error while performing query');
        }
        else {
            console.log('inserted');
        }
    }); 
                                                                              ;
}