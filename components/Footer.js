const Footer = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center space-x-2">
        <div className="w-24 h-24">
          <img
            src={`images/paypal.png`}
            alt="paypal"
            className="w-full h-full object-contain "
          />
        </div>
        <div className="w-24 h-24">
          <img
            src={`images/mastercard.webp`}
            alt="mastercard"
            className="w-full h-full object-contain "
          />
        </div>
        <div className="w-24 h-24">
          <img
            src={`images/discover.webp`}
            alt="discover"
            className="w-full h-full object-contain "
          />
        </div>
        <div className="w-24 h-24">
          <img
            src={`images/americanExpress.jpg`}
            alt="americanExpress"
            className="w-full h-full object-contain "
          />
        </div>
        <div className="w-24 h-24">
          <img
            src={`images/visa.png`}
            alt="visa"
            className="w-full h-full object-contain "
          />
        </div>
      </div>

      <div> © 2023 All Rights Reserved</div>
    </>
  );
};
export default Footer;
