import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }

    return(
        <>
            <GoogleLogin
                clientId="340168093907-1kg6113qojfkkkna6l491ajdocfncdhl.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </>
    );
}

export default Login;