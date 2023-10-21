import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

type User = {
    email: null | string,
    id: string,
    token: string,
}
export default {
    postSignUp: async (email: string, password : string) : Promise<User> => {
        const auth = getAuth();
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        const token = await user.getIdToken();
        return {
            email: user.email,
            id: user.uid,
            token: token,

        }
}
}