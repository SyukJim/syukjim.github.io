function test_return(a, b){

    if  (a > b) {
        return true;
    }
    else{
        return false;
    }

}

function days_left(input_date){

    // get todays date
    var current_date = new Date();

    // get deadlines date
    var selected_date = new Date(input_date);

    // minus the two
    var time_difference = selected_date.getTime() - current_date.getTime();

    var daysleft = Math.ceil(time_difference/(1000*60*60*24));

    // then return the value

    return daysleft
    
}