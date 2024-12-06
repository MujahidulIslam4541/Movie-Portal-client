import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;
    console.log({ name, photo, email, password });

    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="card bg-slate-300 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-xl font-semibold text-center mt-5">
            Register Your Account
          </h2>
          <form onSubmit={handleRegisterSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-500 text-white font-semibold">
                Register
              </button>
            </div>
          </form>
          <p className=" px-4">
            Have An Account ?
            <Link to="/login" className="font-semibold text-red-500">
              Login
            </Link>
          </p>
          <div className="divider px-8">OR</div>
          <div
            onClick={handleGoogleSignUp}
            className="flex justify-center items-center gap-2 border-2 border-blue-500 py-2 rounded-lg m-4 btn"
          >
            <button className="text-3xl ">
              <FcGoogle></FcGoogle>
            </button>
            <p className="font-bold">Continue With Google</p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Register;
