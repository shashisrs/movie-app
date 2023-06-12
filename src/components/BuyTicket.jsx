import React from "react";
// import { IoTicketSharp } from "react-icons/io5";
import ticket from "../assets/ticket.avif"
import { useState } from "react";
const BuyTicket = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [tickets, setTickets] = useState("");
  const [movie, setMovie] = useState("");
  const [yes, setYes] = useState(true);

  const clickHandler = () => {
    const bill = {
      name: name,
      address: address,
      quantityOfTickets: tickets,
      movie: movie,
    };
    setName("");
    setAddress("");
    setTickets("");
    setMovie("");
    console.log(bill);
    localStorage.setItem("billReceipt", bill);
    alert("data saved successfully to localStorage");
    setYes(false);
  };

  return (
    <div className="container-fluid mb-5 bg-dark text-white topMoviesHeight">
      <div className="container ">
        <h2 className="text-center py-5 mt-5 topMovies fs-1 fw-bolder">
          {/* <IoTicketSharp className="text-warning" /> */}
          Click on the picture to buy tickets
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn py-1 px-1 "
          >
            <img src={ticket} alt="" className="ticket img-fluid"/>
          </button>
        </h2>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title text-dark fw-bolder fs-3"
                  id="exampleModalLabel"
                >
                  Buy Tickets
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form className="border-dark text-dark">
                  <div className="d-flex flex-column">
                    <label htmlFor="name" className="fs-5 py-1 fw-bold ">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      name="name"
                      id="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className=" px-2 border rounded-2 border-dark py-1 pl-2"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="address" className="fs-5 py-1 fw-bold ">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      name="address"
                      id="address"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                      className="px-2 border rounded-2 border-dark py-1 pl-2"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="movie" className="fs-5 py-1 fw-bold ">
                      Enter movie name
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      name="movie"
                      id="movie"
                      value={movie}
                      onChange={(event) => setMovie(event.target.value)}
                      className="px-2 border rounded-2 border-dark py-1 pl-2"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="tickets" className="fs-5 py-1 fw-bold ">
                      Number of tickets
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      name="tickets"
                      id="tickets"
                      value={tickets}
                      onChange={(event) => setTickets(event.target.value)}
                      className="px-2 border rounded-2 border-dark py-1 pl-2"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                {yes ? (
                  <button
                    type="button"
                    onClick={clickHandler}
                    class="btn btn-primary"
                  >
                    Buy Tickets
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;
