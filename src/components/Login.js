import Button from "./Button";


const Login = () => {
    return (
        <div>
         <Button
        color="green"
        text="Google Signing"
        onClick={googleLogin}
      />
        </div>
    )
}

const googleLogin = () =>{
console.log('Google login da dei.')
}

export default Login
