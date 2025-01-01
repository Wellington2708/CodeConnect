function Title({children}) {
    return (
        <h1 className='form__title'>{children}</h1>
    )
}
function Subtitle({children}) {
    return (
        <h2 className='form__text'>{children}</h2>
    )
}

function Image(props){
    return(
        <img src={props.url} alt={props.alternativeText}/>
    )
}

function TypingField({ label, type, placeholder, value, setValue }) {
    return (
        <div className='form__typing-field'>
            <label htmlFor={type}>{label}</label>
            <input type={type}
                placeholder={placeholder}
                required
                id={type}
                value={value}
                onChange={(event) => setValue(event.target.value)} />
        </div>
    )
}

function Button({type, children, className}){
    return(
        <button type={type} className={className}>{children}</button>
    )
}


function Checkbox(){
    return (
        <>
            <div className="form__checkbox-field">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember"/>

            </div>
            <p className="form__text-options">Remember</p>
        </>
    )
}

function Text({className, children}){
    return (
        <p className={className}>{children}</p>
    )
}

function SocialMedia({link, name}){
    return(
        <li>
            <a href={link} target="_blank" rel="noopener">
                <img src={`./img/${name}.svg`} alt={`Icon ${name}`} />
                {name}
            </a>
            </li>
    )
}

function Link({children}){
    return(
        <a href="#" className="container-links__link">
            {children}
        </a>
    )
}

function LoginPage() {
    
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (event)=> {
        event.preventDefault();
        setEmail("");
        setPassword("");
    }
    
   

    return (

        <div className='container-login'>
            <Image url="./img/login-image.png" 
                    alternativeText="a black woman with curly hair wearing glasses and using the computer, there is also the codeconnect logo" />
                    <section>
                <form onSubmit={handleSubmit}>
                    <Title>Login</Title>
                    <Subtitle>Welcome! Log in</Subtitle>
                    <TypingField label='Email or User'
                        type='email'
                        placeholder='Enter your email or user'
                        value={email}
                        setValue={setEmail}
                    />
                    <TypingField label='Password'
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        setValue={setPassword}
                    />
                    <fieldset className="form__options">
                        <Checkbox />
                        <p>
                            <a href="#" aria-label="Recover forgotten password">Forgot password</a>
                        </p>
                   </fieldset>
                    <Button type='submit' className='form__button'>Login</Button>
                </form>
                <div className="container-links">
                    <Text className="container-links__title">log in with other accounts</Text>
                    <ul>
                        <SocialMedia link="https://www.github.com" name="Github" />
                        <SocialMedia link="https://google.com" name="Google" />
                    </ul>
                    <Text className="container-links__text">Don't have an account yet?</Text>
                    <Link>Create your account</Link>

                </div>
            </section>
        </div>
        
    )
}



ReactDOM.createRoot(document.getElementById("root")).render(<LoginPage />);
