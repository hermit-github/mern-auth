import Layout from '../components/Layout'
import Header from '../components/Header'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <Layout headerContent={<Header/>} heroContent={<RegisterForm/>}/>
  )
}

export default Register