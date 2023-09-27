export const Login = () => {
  return (
    <div className="Login">
      <img className="Login__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      <div className="Login__header">
       <h1>Sign in</h1>
       <input className="Login__email" placeholder="email" type="text" />
       <input className="Login__password" placeholder="password" type="password" />
       <button className="Login__Signin">Sign in</button>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex facere omnis sed. Possimus consequuntur facere, molestias debitis recusandae aspernatur excepturi dicta iusto eum veniam vero ipsam reiciendis in, ratione molestiae?
       </p>
       <button className="Login__confirmation">Confirm your Amazon Account</button>
      </div>
    </div>
  )
}
