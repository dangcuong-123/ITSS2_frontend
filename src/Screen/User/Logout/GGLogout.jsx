import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
function GGLogout(){
    const client_id = "593679324297-88hvr9r4b2cotl53aisek8v22lohf2es.apps.googleusercontent.com"
    const navigate = useNavigate();

    const onSuccess = () => {
        console.log("Log out successfully!")
        navigate("/login")
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={client_id}
                buttonText="Log out"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default GGLogout;