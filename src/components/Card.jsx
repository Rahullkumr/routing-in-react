function Card({ name }) {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="flex justify-center items-center border">
        <h1 className="text-center text-3xl p-10">{name}</h1>
      </div>
    </div>
  );
}

export default Card;
