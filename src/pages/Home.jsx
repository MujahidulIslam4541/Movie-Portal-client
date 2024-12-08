

const Carousel = () => {
  return (
    <div className="carousel w-full h-[80vh] bg-gray-900 rounded-lg overflow-hidden shadow-lg relative">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/zPSjq8w/marvel-movie-km5otxtmsqb0ijdb.jpg"
          alt="Avengers Endgame"
          className="w-full h-full  rounded-lg"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle bg-primary text-white hover:bg-primary-focus">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-primary text-white hover:bg-primary-focus">
            ❯
          </a>
        </div>
      </div>
      
      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/yqm5WNZ/71670-Spider-Man-3-Spider.jpg"
          alt="The Dark Knight"
          className="w-full h-full  rounded-lg"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle bg-primary text-white hover:bg-primary-focus">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-primary text-white hover:bg-primary-focus">
            ❯
          </a>
        </div>
      </div>
      
      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/Vj3gWtw/desktop-wallpaper-thor-movie-wide-poster-best.jpg"
          alt="Interstellar"
          className="w-full h-full  rounded-lg"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle bg-primary text-white hover:bg-primary-focus">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-primary text-white hover:bg-primary-focus">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

