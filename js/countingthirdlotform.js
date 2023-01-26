function Input(){
    login_ok = false;
    var data1 = document.getElementsByName("inputdata1")[0].value;
    data1 = data1.toUpperCase();

    if (data1 == "128") {
        login_ok=true;
        window.location = "foodfourthinputs.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Ой... Кажется, вы где-то ошиблись. Попробуйте еще раз:)");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА