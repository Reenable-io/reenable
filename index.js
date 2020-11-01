if (confirm("Est-ce que tu veux une info interessante?")) {
    var today = new Date();
    years = today.getFullYear() - 2006;
    months = today.getMonth() - 6;
    days = today.getDay() - 16;
    if (days<0){
        days = days + 30;
        months = months -1
    }
    hours = today.getHours()-8;
    if (hours<0){
        hours = hours + 24;
        days = days -1
    }
    minutes = today.getMinutes()-17;
    if (minutes<0){
        minutes = minutes + 60;
        hours = hours -1
    }
    seconds = today.getSeconds();
    alert('Cela fait plus ou moins ' + years + ' ans, ' + months + ' mois, ' + days + ' jours,' + hours + ' heures, ' + minutes + ' minutes et ' + seconds + ' secondes que je dois me coltiner ce ptn de CTO qui me sert de frere. '  );
    confirm("Intéressant nan?")
}
else {
    alert("Dommage...")
}