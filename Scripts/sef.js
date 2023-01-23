function Input(){
    login_ok = false;
    user_name = "";
    password = "";
    user_name = prompt("Введите ЛОГИН","");           // Второй параметр ПУСТОЙ(!) - значение получаем от пользователя
    user_name = user_name.toLowerCase();      // Переводит введённое в нижний регистр (можно вводить по-любому)
    password = prompt("Введите ПАРОЛЬ","");           // Второй параметр ПУСТОЙ(!) - значение получаем от пользователя
    password = password.toLowerCase();
    if (user_name == "user" && password == "pass") {
        login_ok=true;
        window.location = "jssite/index.html";}             // КУДА? Перебросит нас скрипт
    if (user_name == "user2" && password == "pass2") {
        login_ok=true;
        window.location = "jssite/index.html";}             // КУДА? Перебросит нас скрипт
    if (login_ok == false) {
        alert("Неверный логин или пароль!");}}     // КОНЕЦ ПАРОЛЬНОГО ВХОДА