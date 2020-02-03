$(() => {
    const post_start = (curr_btn) => {
        curr_btn.append("<i class='fa fa-spinner fa-spin'></i>")
        curr_btn.prop("disabled", true)
    }

    const post_finish = (curr_btn) => {
        $('.fa-spinner').remove();
        curr_btn.prop("disabled", false);
    }

    $.get('http://192.168.0.77:20000/api/TOWN')
        .done((data) => {
            if (data) {
                const towns = $('#TOWN_CODE')
                data.forEach(element => {
                    towns.append("<option value='" + element.TOWN_CODE + "'>" + element.TOWN_NAME + "</option>")
                });
            } else {
                console.log("error")
            }
        });

    $.get('http://192.168.0.77:20000/api/GENDER')
        .done((data) => {
            if (data) {
                const towns = $('#GENDER_CODE')
                data.forEach(element => {
                    towns.append("<option value='" + element.GENDER_CODE + "'>" + element.GENDER_NAME + "</option>")
                });
            } else {
                console.log("error")
            }
        });

    $.get('http://192.168.0.77:20000/api/COUNTRY')
        .done((data) => {
            if (data) {
                const towns = $('#COUNTRY_CODE')
                data.forEach(element => {
                    towns.append("<option value='" + element.COUNTRY_CODE + "'>" + element.COUNTRY_NAME + "</option>")
                });
            } else {
                console.log("error")
            }
        });

    $('#createUser').submit(e => {
        const curr_form = $(e.target);
        const curr_btn = curr_form.find(".btn-submit");
        post_start(curr_btn);
        e.preventDefault()
        const formArray = curr_form.serializeArray();
        let returnobj = {};
        for (let i = 0; i < formArray.length; i++) {
            returnobj[formArray[i]['name']] = formArray[i]['value'];
        }
        console.log(returnobj)
        $('.all-error').attr('hidden', 'hidden');
        $.ajax({
            url: "http://192.168.0.77:20000/api/CUSTOMER",
            type: "POST",
            data: JSON.stringify([returnobj]),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        })
            .done((data) => {
                if (data) {
                    window.location.replace('home.html');
                } else {
                    console.log('error')
                }
                post_finish(curr_btn);
            });
    });
});