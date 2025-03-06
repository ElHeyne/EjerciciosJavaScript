function analizar() {
    tbody = document.getElementById("age_table").getElementsByTagName("tbody")[0]
    tr = tbody.getElementsByTagName("tr");

    var suma = 0;

    for (let i = 0; i < tr.length; i++){
        suma += parseFloat(tr[i].getElementsByTagName("td")[1].innerText);
        }

    var media = suma/tr.length;
    
    console.log(suma + " " + media + " " + tr.length);

    var resultado = document.createElement("tr");
    
    resultado.innerHTML = "<td>Media</td><td>"+media+"</td>";
    tbody.appendChild(resultado);
}