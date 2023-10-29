import PropTypes from 'prop-types'

export default function Users({users}) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email} - {user.password} <button>Delete</button> <button>Update</button>
        </li>
      ))}
    </ul>
  )
}

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ).isRequired,
}
