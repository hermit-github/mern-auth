import Layout from '../components/Layout'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <Layout headerContent={<Header/>} heroContent={<LoginForm/>}/>
  )
}

export default Login