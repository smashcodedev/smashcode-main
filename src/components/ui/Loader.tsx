const Loader = ({type} :{type: string}) => {
  if (type === "spinner") {
    return (
      <div style={{ margin: "0 auto" }}>
        <div className="spinner"></div>
      </div>
    );
  } else {
    return (
      <div
        className="flex flex-col items-center justify-center"
        style={{ margin: "15px auto", width: "100%", height: "100vh" }}
      >
        <div className="loader" style={{ margin: "15px auto" }}></div>
        <h4 style={{ margin: " 0 auto", textAlign: "center" }}>Loading...</h4>
      </div>
    );
  }
};

export default Loader;
