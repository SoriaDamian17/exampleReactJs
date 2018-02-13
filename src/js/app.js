/**
 * React Js y Jsx
 */
const app = document.getElementById('app');
//Component avatar
const Avatar = props => <img src={props.user.img} alt={props.user.name}/>;
//Component User Name
const UserName = props => <p>{props.user.name}</p>;
//Creamos el componente Padre User
const User = props => {
    return (
        <div className="user-item">
            <Avatar user={props.user} />
            <UserName user={props.user} />
        </div>
    )
};
//Creamos nuestro array
const users = [
    {
        name: 'Damian',
        img: ''
    },
    {
        name: 'Luciano',
        img: ''
    },
    {
        name: 'Juan',
        img: ''
    },
    {
        name: 'Pedro',
        img: ''
    }
];
//Creamos nuestro componente Listado
const UsersList = props => {
   const userList = props.list.map((user,i) => <User user={user} key={i} />);
   return (
       <div className="user-list">
          {userList}
       </div>
   )
};
//Renderizamos nuestros componentes
ReactDOM.render(<UsersList list={users} />, app);