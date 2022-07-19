const Banner = ({image}) => {
  return (
    <div className="flex h-[50vh] bg-banner bg-center bg-cover bg-no-repeat justify-center items-center md:justify-start">
      <p className="text-white text-3xl sm:text-5xl md:text-6xl text-center font-bold w-[300px] sm:w-[250px] md:text-left pl-8">
        Watch something incredible.
      </p>
    </div>
  );
}

export default Banner