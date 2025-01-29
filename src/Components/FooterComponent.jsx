import React, { Fragment } from "react";


const FooterListComponent = ({ footerdata }) => {
    const { image, heading, value } = footerdata;
    return (
      <div className="bg-gradient-to-r from-blue-950 to-blue-600 p-5 py-9 rounded-2xl shadow-xl shadow-gray-900 flex flex-col justify-center items-center min-w-[250px]">
        <img
          className="w-[100px] h-[100px] bg-white shadow-lg shadow-blue-900 p-2 rounded-full"
          src={image}
          alt="FooterImage"
        />
        <h3 className="text-2xl font-medium mt-10 py-2 text-white">{heading}</h3>
        <h3 className="text-base font-medium text-gray-300">{value}</h3>
      </div>
    );
  };
  
  const FooterComponent = () => {
    const footerData = [
      {
        id: 1,
        image:
          "https://st.depositphotos.com/1175928/1299/i/450/depositphotos_12994187-stock-photo-phone-icon.jpg",
        heading: "Mobile Number",
        value: "+918344024735",
      },
      {
        id: 2,
        image:
          "https://logospng.org/download/gmail/logo-gmail-2048.png",
        heading: "Email",
        value: "vignesh4974@gmail.com",
      },
      {
        id: 3,
        image:
          "https://cdn0.iconfinder.com/data/icons/material-design-flat/24/location-1024.png",
        heading: "Address",
        value: "Tambaram,Chennai",
      },
      {
        id: 4,
        image:
          "https://static.vecteezy.com/system/resources/previews/023/986/555/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png",
        heading: "Instagram",
        value: "@vic_kee",
      },
    ];
    return (
      <footer className="flex flex-1 bg-white  flex-col gap-16 justify-evenly items-center w-full h-full shadow-inner shadow-gray-300 py-16 ">
        <h1 className="text-black font-semibold text-3xl">GET IN TOUCH</h1>
        <div className="flex flex-1 gap-10 justify-evenly flex-wrap items-center w-full">
          {footerData.map((value) => (
            <Fragment key={value.id}>
              <FooterListComponent footerdata={value} />
            </Fragment>
          ))}
        </div>
      </footer>
    );
  };
  
export default FooterComponent;  