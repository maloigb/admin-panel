import { useState } from 'react';
import './form.sass'
import userIcon from '../../assets/user.svg'
import passwordIcon from '../../assets/password.svg'

const Form = ({ title, handleClick, errorMessage }: { title: string, errorMessage: string, handleClick: (event: React.FormEvent<HTMLFormElement>, email: string, password: string,) => void }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    return (
        <form className='container-form'
            onSubmit={(event) => handleClick(event, email, password)}>
            <div className='container-form_input'>
                <img src={userIcon} alt="User" />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </div>
            <div className='container-form_input'>
                <img src={passwordIcon} alt="User" />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </div>
            <button
            // onClick={() => handleClick(email, password)}
            >
                {title}
            </button>
            {errorMessage}
        </form>
    );
};

export { Form };