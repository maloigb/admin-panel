import {useState} from 'react';

const Form = ({title, handleClick} : {title: string, handleClick: (email: string, password: string) => void}) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button
                onClick={() => handleClick(email, password)}
            >
                {title}
            </button>
            
        </div>
    );
};

export {Form};