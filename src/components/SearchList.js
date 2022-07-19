const SearchList = ({image,title}) => {
  return (
    <div className={`h-[400px] flex justify-center items-center relative`}>
     <img src={image} alt=""  className="w-full h-full absolute top-0"/>
     <span className="z-40 text-white text-2xl text-center">{title}</span>
    </div>
  )
}

export default SearchList