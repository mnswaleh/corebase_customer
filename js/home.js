$(() => {
    $.get('http://192.168.0.77:20000/api/CUSTOMER?details=swaleh,0')
        .done((data) => {
            if (data) {
                const towns = $('#customersList')
                let i = 1;
                data.forEach(element => {
                    towns.append(
                        "<tr>\
                            <th scope='row'> " + i + "</th >\
                            <td>" + element.FNAME + "</td>\
                            <td>" + element.LNAME + "</td>\
                            <td>" + element.EMAIL + "</td>\
                        </tr > "
                    )
                    i++
                });
            } else {
                console.log("error")
            }
        });
});
