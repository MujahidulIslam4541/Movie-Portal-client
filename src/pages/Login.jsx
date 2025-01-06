import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import lottii from "../../public/Animation - 1736188613945.json";
import Lottie from "lottie-react";
const provider = new GoogleAuthProvider();
export default function Login() {
  const { LoginUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    LoginUser(email, password)
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          title: "Success",
          text: "Login Successful",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error("This is an error!", error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      toast.loading("Waiting...", result);
      navigate("/");
    });
  };

  return (
    <div className=" block md:flex justify-center items-center bg-white  py-16">
      <div className="card  w-full max-w-sm text-blue-500 bg-gray-300 shrink-0 shadow-2xl">
        <h2 className="text-xl font-semibold text-center mt-5">
          Login Your Account
        </h2>
        <form onSubmit={handleLoginSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-500">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-500">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-blue-500">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-500 text-white font-semibold">
              Login
            </button>
          </div>
        </form>

        <p className=" px-8">
          Don t Have An Account{" "}
          <Link to="/register" className="font-semibold text-red-500">
            Register
          </Link>
        </p>
        <div className="divider px-8">OR</div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center gap-2 border-2 border-blue-500 py-2 rounded-lg m-4 "
        >
          <button className="text-3xl ">
            <FcGoogle></FcGoogle>
          </button>
          <p className="font-bold">Continue With Google</p>
        </div>
      </div>
      <div>
        <Lottie className="w-80 mt-5 md:mt-0 md:w-full" animationData={lottii}></Lottie>
      </div>
    </div>
  );
}
