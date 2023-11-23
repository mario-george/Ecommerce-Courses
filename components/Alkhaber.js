"use client";
const AlkhabeerComponent = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between">
      <div className="flex flex-col items-center">
        <img
          src={"/images/Alkhabir.jpg"}
          alt="Alkhabeer Consulting"
          className="h-48 w-48 mb-4"
        />
        <p className="text-center text-md max-w-md">
          Alkhabeer Consulting and Training Company – A company specialized in
          technical consulting, training systems, management and quality
          systems, we offer professional courses with international
          accreditations.
        </p>
      </div>
      <div class="hidden md:flex space-x-6 md:items-center mr-12">
        <div class="flex flex-col space-y-5 ">
          <span className="font-bold text-2xl">Follow Us</span>
          <div class="flex space-x-3">
            <a href="# ">
              <img src="images/icon-facebook.svg" alt="" class="ficon" />
            </a>
            <a href="#">
              <img src="images/icon-twitter.svg" alt="" class="ficon" />
            </a>
            <a href="#">
              <img src="images/icon-youtube.svg" alt="" class="ficon" />
            </a>
            <a href="#">
              <img src="images/icon-instagram.svg" alt="" class="ficon" />
            </a>
          </div>
        </div>
      </div>
      <div class="flex md:hidden justify-center items-center my-5 space-x-3">
        <img src="images/icon-facebook.svg" className="w-6 h-6 " />
        <img src="images/icon-twitter.svg" className="w-6 h-6" />
        <img src="images/icon-youtube.svg" className="w-6 h-6" />
        <img src="images/icon-instagram.svg" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default AlkhabeerComponent;
