import { Fragment } from "react";
import { Navbar } from "./NavbarComponent";


export const FormComponent = () => {
  // const [userName, setUserName] = useState("");

  // const [data, setdata] = useState([]);

  // const handleOnChange = (event) => {
  //   setUserName(event.target.value);
  // };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   setdata((prevdata) => [...prevdata, userName]);
  //   setUserName("");
  // };

  return (
    <>
      <form
        className="bg-white px-16 flex flex-col h-[70%] w-full gap-10 justify-center items-center"
        // onSubmit={handleOnSubmit}
      >
        <div className="flex flex-col w-full h-full flex-1 text-gray-800 justify-center items-start">
          <label for="email" className="w-[20%] text-gray-950 font-medium">
            Name*
          </label>
          <input
            className="border-solid font-medium px-2 border-b-[2px] placeholder:px-2 border-blue-600 h-[40px] w-[100%]"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="flex flex-col w-full h-full flex-1 text-gray-800 justify-center items-start">
          <label for="gmail" className="w-[20%] text-gray-950 font-medium">
            Gmail*
          </label>
          <input
            className="border-solid font-medium px-2 border-b-[2px] placeholder:px-2 border-blue-600 h-[40px] w-[100%]"
            id="gmail"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full h-full flex-1 text-gray-800 justify-center  items-start">
          <label for="address" className="w-[20%] text-gray-950 font-medium">
            Address*
          </label>
          <textarea
            rows={10}
            className="border-solid font-medium px-2 border-b-[2px]  placeholder:px-2 border-blue-600 h-[40px] w-[100%]"
            id="pass"
            type="password"
          ></textarea>
        </div>
        <div className="w-full h-full flex-1 flex justify-center items-center">
          <button
            className="px-6 w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white  py-3 rounded-xl font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-900"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

const AboutMeComponent = () => {
  const introduction =
    "I'm Vigneshwaran, Front-end developer. I'm a weird guy who likes making weird things with web technologies. I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications. When not working or futzing around with code, I study how to escape from University. Actually for hire.";
  const images = [
    "https://img.icons8.com/fluency/452/tailwind_css.png",
    "https://cdn.iconscout.com/icon/free/png-256/css3-8-1175200.png",
    "https://img2.gratispng.com/20180802/tpl/kisspng-logo-html5-brand-clip-art-%E6%9D%89-%E5%B1%B1-%E8%89%AF-%E9%9B%84-5b62be01b565d5.334247781533197825743.jpg",
    "https://icon-library.com/images/react-icon/react-icon-0.jpg",
    "https://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png"
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="w-full h-full bg-white mt-[120px] flex-1 flex items-center justify-center">
        <div className="w-[80%] h-[80%]  flex items-center justify-center shadow-2xl shadow-gray-800">
          <div className="w-[50%] h-full  py-[135px] gap-3 bg-gradient-to-t from-blue-950 to-blue-600 flex text-white flex-col items-start justify-center">
            <h2 className="px-14 text-2xl font-medium">About Me</h2>
            <span className="px-14 text-justify indent-7">{introduction}</span>
            <div className="w-full h-full flex items-end mt-16 justify-center gap-10">
              {images.map((value, index) => (
                <Fragment key={index}>
                  <img
                    className="w-[50px] p-1 h-[50px] bg-white rounded-2xl"
                    src={value}
                    alt="AboutImages"
                  />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="w-[50%] h-full bg-white flex items-center justify-center">
            <FormComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMeComponent;
