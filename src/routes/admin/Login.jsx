import { loginAdmin } from '../../utils/api';

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const response = await loginAdmin(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex max-w-[400px] flex-col gap-3 overflow-hidden rounded-[8px] border-[2px] border-gray-200">
        <div className="bg-accent flex flex-col px-4 py-3">
          <h2 className="font-display1 text-primary text-3xl">Admin Login</h2>
        </div>
        <form className="flex flex-col gap-2 px-4 py-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="rounded-[6px] border-[1px] px-2 py-[8px]"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="rounded-[6px] border-[1px] px-2 py-[8px]"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 mt-2 w-full cursor-pointer rounded-[6px] px-2 py-[8px] text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
