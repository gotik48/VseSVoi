function Input() {
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();

    var data2 = document.getElementsByName("inputdata2")[0].value;
    data2 = data2.toUpperCase();

    var data3 = document.getElementsByName("inputdata3")[0].value;
    data3 = data3.toUpperCase();


    if (data1 == "5" && data2 == "КИМЧИ" && data3 == "РУКИ") {
        login_ok = true;
        window.location = "rules.html";
    }
    if (data1 == "5" && data2 == "КИМЧИ" && data3 == "РУКА") {
        login_ok = true;
        window.location = "rules.html"
    }
    if (data1 == "5" && data2 == "КИМЧИ" && data3 == "РУКАМИ") {
        login_ok = true;
        window.location = "rules.html";
    }

    if (login_ok == false) {
        alert("Ой... Кажется, вы где-то ошиблись. Попробуйте еще раз:)");
    }
}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА