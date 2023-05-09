

exports.getDate = getDate;

function getDate(date) {
    var today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    var day = today.toLocaleDateString('en-us',options)
    return day;
}


exports.getDay = getDay;
function getDay(date) {
    var today = new Date();
    var options = {
        weekday: 'long'
    };
    var day = today.toLocaleDateString('en-us',options)
    return day;
}

