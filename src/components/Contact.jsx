import toast from "react-hot-toast";
import contactImage from "../assets/Contact_Us_Sbq0zek.2e16d0ba.fill-1920x1080.jpg";
import Swal from "sweetalert2";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e6023d9c-c3d0-4252-ac82-ce93e5d8e7f0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Email Send Successfully",
        icon: "success",
      });
      event.target.reset();
    }
  };
  return (
    <div>
      <section
        className="h-auto p-16 bg-gradient-to-r from-white to-gray-100"
      >
        <div className="text-center mb-8">
          <p className="text-gray-600">Contact</p>
          <h2 className="text-4xl font-bold text-gray-800">CONTACT WITH ME</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="flex flex-col space-y-4 p-6 bg-white shadow-2xl rounded-lg border border-gray-200 ">
            <img
              src={contactImage}
              alt="Contact"
              className="w-full h-44 mb-4 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold text-gray-600">
              Phone: <span className="text-gray-800">+0053744541</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-600">
              E-mail:{" "}
              <span className="text-gray-800">mirifat4541@gmail.com</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-600">
              Location:{" "}
              <span className="text-gray-800">
                Noakhali, Chittagong, Bangladesh
              </span>
            </h2>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 flex flex-col p-6 bg-white shadow-2xl rounded-lg border border-gray-200">
            <form onSubmit={onSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full p-3 mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">
                  E-MAIL
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your E-mail"
                  className="w-full p-3 mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject"
                  className="w-full p-3 mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700">
                  YOUR MESSAGE
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Enter Your Message"
                  className="w-full p-3 mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
