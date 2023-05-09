// Write your code here
import './index.css'

const Message = props => {
  const {loggedIn} = props
  const msg = loggedIn ? 'Welcome User' : 'Please Login'
  return <h1 className="h1">{msg}</h1>
}
export default Message
