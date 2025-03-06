var form = document.getElementById("car_form");
var table = document.getElementById("car_table");
var table_body = table.getElementsByTagName("tbody")[0];

function add_car(){
    var car_company = document.getElementById("car_company").value;
    var car_model = document.getElementById("car_model").value;
    var car_price = document.getElementById("car_price").value;

    switch (car_company.toLowerCase()) {
        case ("ford"):
            var car_discount = 10;
            var car_price_discount = car_price - (car_price/car_discount);
            break;
        
        case ("seat"):
            var car_discount = 8;
            var car_price_discount = car_price - (car_price/car_discount);
            break;

        case ("citroen" || "citröen"):
            var car_discount = 6;
            var car_price_discount = car_price - (car_price/car_discount);
            break;

        case ("audi"):
            var car_discount = 4;
            var car_price_discount = car_price - (car_price/car_discount);
            break;

        default:
            var car_discount = 0;
            var car_price_discount = car_price;
            break;
    }

    let new_table_entry = document.createElement("tr");
    new_table_entry.innerHTML = "<td>"+car_company+"</td>"+
                                "<td>"+car_model+"</td>"+
                                "<td>"+car_price+"</td>"+
                                "<td>"+car_price_discount+"</td>"+
                                "<td>"+car_discount+"</td>"

    table_body.appendChild(new_table_entry);
}