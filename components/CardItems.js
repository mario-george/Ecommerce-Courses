import CardItem from "./Card";

const CardItems = () => {
  let randomArray = Array.from(
    { length: 4 },
    () => Math.floor(Math.random() * 100) + 1
  );

  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <div className="flex flex-col md:flex-row md:space-x-3">
        {randomArray.map((i) => {
          return (
            <div className="mx-3  my-2">
              <CardItem />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row md:space-x-3">
        {randomArray.map((i) => {
          return (
            <div className="mx-3  my-2">
              <CardItem />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardItems;
