import { auth, GoogleAuthProvider } from "../../utils/firebaseConfig"
export default function SignUp() {
    const handleClick = () => {
        auth.signInWithPopup(GoogleAuthProvider).then(() => console.log('user'))
    }
    return (
        <>
            <div className="">
                <center>
                    <h1>Classroom </h1>
                    <button className="btn btn-primary" onClick={handleClick}>Sign in with Google</button>
                </center>
            </div>
        </>
    )
}

