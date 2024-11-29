function getDate() {
    let date = new Date();
    return date.toISOString().split('T')[0];
}

function getFutureDate(date){
    const newDate = new Date(date.getTime() + 6 * 24 * 60 * 60 * 1000);
    return newDate.toISOString().split('T')[0];
}
