import PropTypes from 'prop-types';

export default function CreateUser({ addUser }) {
  function submitHandler(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    addUser(name, email, password);
  }
  
  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

CreateUser.propTypes = {
  addUser: PropTypes.func.isRequired,
};
