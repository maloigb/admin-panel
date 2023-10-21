import {useAppSelector} from "./redux.ts";

export const useAuth = () => {
    const {email, token, id} = useAppSelector(state => state.user);
    const isAuth = !!(localStorage.getItem('username'));
    return {
        isAuth: isAuth,
        email,
        token,
        id,
    }
};