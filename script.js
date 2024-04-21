// Создаем объект с парами логин-пароль
const users = {
    admin: 'root',
    user: '123'
};

let checkUser = prompt('Введите ваше имя', '');

if (checkUser && checkUser in users) {

    let password = prompt('Введите пароль:', '');

    if (password && password === users[checkUser]) {

        alert('Вы вошли');
    } else {
        alert('Неправельный пароль');
    }
} else {
    alert('Такого пользователя не существует')
}
