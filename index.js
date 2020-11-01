if (confirm("Est-ce que tu veux une info intéressante?")) {
    var today = new Date();
    diff = today.getFullYear() - 2006;
    alert('Cela fait plus ou moins' + diff + 'ans que notre fdp de CTO est né.'  );
    confirm("Intéressant nan?")
}
else {
    alert("Dommage...")
}