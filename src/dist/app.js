'use strict';

/**
 * React Js y Jsx
 */
var app = document.getElementById('app');
//Component avatar
var Avatar = function Avatar(props) {
    return React.createElement('img', { src: props.user.img, alt: props.user.name });
};
//Component User Name
var UserName = function UserName(props) {
    return React.createElement(
        'p',
        null,
        props.user.name
    );
};
//Creamos el componente Padre User
var User = function User(props) {
    return React.createElement(
        'div',
        { className: 'user-item' },
        React.createElement(Avatar, { user: props.user }),
        React.createElement(UserName, { user: props.user })
    );
};
//Creamos nuestro array
var users = [{
    name: 'Damian',
    img: ''
}, {
    name: 'Luciano',
    img: ''
}, {
    name: 'Juan',
    img: ''
}, {
    name: 'Pedro',
    img: ''
}];
//Creamos nuestro componente Listado
var UsersList = function UsersList(props) {
    var userList = props.list.map(function (user, i) {
        return React.createElement(User, { user: user, key: i });
    });
    return React.createElement(
        'div',
        { className: 'user-list' },
        userList
    );
};
//Renderizamos nuestros componentes
ReactDOM.render(React.createElement(UsersList, { list: users }), app);
//# sourceMappingURL=app.js.map
