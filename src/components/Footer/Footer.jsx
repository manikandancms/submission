const Footer = () => {
  return (
    <div className="2xl:container mx-auto mt-20">
      <div className="w-full mx-auto grid grid-cols-1 bg-black rounded-t-lg">
        <div className="text-center flex flex-col justify-center items-center mt-10">
          <p className="font-[Poppins] font-bold text-[18px] leading-[20px] text-white mb-2">
            Contact Us
          </p>
          <p className="font-[Poppins] font-bold text-[14px] leading-[20px] text-white">
            Malgreenshoping@.com
          </p>
          <p className="font-[Poppins] font-bold text-[14px] leading-[20px] text-white">
            Phone: +91 9123456789, Telephone: 0416 223334444
          </p>
          <p className="font-[Poppins] mt-10 font-normal text-[18px] leading-[20px] text-white">
            Address:
          </p>
          <p className="font-[Poppins] font-normal text-[14px] leading-[30px] text-white">
            123 Ayur Vigyan Nagar, Chennai, Tamil Nadu, India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer