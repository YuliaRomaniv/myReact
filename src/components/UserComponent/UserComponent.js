
const UserComponent = ({ user, setUserId }) => {
    const { id, name, username } = user;

    const handleButtonClick = () => {
        setUserId(id);
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button onClick={handleButtonClick}>Info</button>
        </div>
    );
};

export { UserComponent };