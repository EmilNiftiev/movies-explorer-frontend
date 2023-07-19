import "./Preloader.css";

const Preloader = ({ isLoaderVisible }) => {
  return (
    <div className={`preloader ${isLoaderVisible && "preloader_visible"}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
