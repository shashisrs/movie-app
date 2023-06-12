import React from "react";

const DetailsCard = (props) => {
  // const description = `${props.description.substring(0, 60)}...`;
  const summary =`${props?.movie?.show?.summary.replace("<p>","").replace("</p>","").replace("<b>","").replace("</b>","").substring(0,150)}...`;
  return (
      <div className="rounded-3  cursor align-self-baseline col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 ">
        <div className="card bg-dark w-full text-white">
          <img
            src={props.movie.show.image.original}
            className="img-fluid opacity-50 item  border border-2 border-light"
            alt="..."
          />
          <div className="card-img-overlay d-flex flex-column justify-content-between ">
            <h5 className="card-title fw-bolder text-left text-warning">
              {props?.movie?.show?.name}
            </h5>
            <div className="text-left">
            <p className="card-text">
                <span className="fw-bold px-1 text-warning">Summary:</span>
                {summary}
              </p>
              <p className="card-text">
                <span className="fw-bold px-1 text-warning">Premiered:</span>
                {props?.movie?.show?.premiered}
              </p>
              <p className="card-text">
                <span className="fw-bold px-1 text-warning">Type:</span>
                {props?.movie?.show?.type}
              </p>
              <p className="card-text">
                <span className="fw-bold px-1 text-warning">Language:</span>
                {props?.movie?.show?.language}
              </p>
              {/* <button onClick={clickHandler} className="btn btn-primary py-2 px-5 border border-2 border-light">Details..</button> */}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default DetailsCard;
