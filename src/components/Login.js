function Login() {
    return (
      <div
        className="container mx-auto h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundColor: "Blue" }}
      >
        <div className="grid grid-cols-12 gap-4 h-full">
          <div className="col-span-9"></div>
          <div className="col-span-3 bg-white bg-opacity-50 rounded-lg p-6 flex flex-col justify-start">
            <h1 className="text-blue-300 text-4xl font-mono mb-8">Login</h1>
            <input
              type="text"
              placeholder="Username"
              className="rounded mb-6 border border-gray-800 p-2 w-3/4"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded mb-6 border border-gray-800 p-2 w-3/4"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  