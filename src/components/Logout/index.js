// Write your code here
import './index.css'

const Login = props => {
  const {logout} = props

  return (
    <button type="button" className="btn" onClick={logout}>
      Logout
    </button>
  )
}
export default Login
