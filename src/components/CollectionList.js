import React from "react";
import {useNavigate} from "react-router-dom"
const CollectionList = (props) => {
  const navigate=useNavigate();
  // const para=props?.movie?.show?.summary.textContent;
  // const summary=`${para?.substring(0, 60)}...`;

  const clickHandler=()=>{
navigate("/details");
  }
  return (
    <div onClick={clickHandler} className="rounded-3  cursor align-self-baseline col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        
            <div className="card bg-dark w-full text-white">
              <img
                src={props.movie.show.image.original}
                className="img-fluid opacity-50 item  border border-2 border-light"
                alt="..."
              />
              <div className="card-img-overlay d-flex flex-column justify-content-between ">
                <h5 className="card-title fw-bolder text-left ">{props?.movie?.show?.name}</h5>
               <div className="text-left">
               <p className="card-text"><span className="fw-bold px-1">Premiered:</span>{props?.movie?.show?.premiered}</p>
                <p className="card-text"><span className="fw-bold px-1">Type:</span>{props?.movie?.show?.type}</p>
                <p className="card-text"><span className="fw-bold px-1">Language:</span>{props?.movie?.show?.language}</p>
               </div>
                
              </div>
            </div>
        </div>
 
  );
};

export default CollectionList;
