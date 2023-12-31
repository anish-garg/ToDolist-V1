module.exports.getDate = getDate();

function getDate() {
    var today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: "long",
        year: "numeric",
    };

    const day = today.toLocaleDateString('en-US', options)
    return day;
}

module.exports.getDay = getDay()

function getDay() {
    var today = new Date();
    var options = {
        weekday: 'long',
    };

    const weekday = today.toLocaleDateString('en-US', options)
    return weekday;
}