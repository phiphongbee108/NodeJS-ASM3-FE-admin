import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HistoryAPI from "../../API/HistoryAPI";
import queryString from "query-string";

MainHistory.propTypes = {};

function MainHistory(props) {
  const [listCart, setListCart] = useState([]);
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setLoad(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await HistoryAPI.getHistoryAPI(search);

      setListCart(response);
      setLoad(false);
    };

    fetchData();
  }, [load]);
  const handleOnclick = (e) => {
    const query =
      sessionStorage.getItem("currentuser") === null
        ? []
        : JSON.parse(sessionStorage.getItem("currentuser"));

    const fetchData = async () => {
      const response = await HistoryAPI.getDelete(query.user._id, e._id);
    };
    fetchData();
    setLoad(true);
  };

  return (
    <div className="container">
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-0">History</h1>
            </div>
            <div className="col-lg-6 text-lg-right">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                  <li className="breadcrumb-item active">History</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <h1>Product</h1>
      <div className="wrap-input100 validate-input">
        <input
          className="input100"
          type="text"
          placeholder="Enter Search"
          onChange={handleSearch}
        />
      </div>
      <div className="table-responsive pt-5 pb-5">
        <table className="table">
          <thead className="bg-light">
            <tr className="text-center">
              <th className="border-0" scope="col">
                {" "}
                <strong className="text-small text-uppercase">ID Order</strong>
              </th>

              <th className="border-0" scope="col">
                {" "}
                <strong className="text-small text-uppercase">Name</strong>
              </th>
              <th className="border-0" scope="col">
                {" "}
                <strong className="text-small text-uppercase">Price</strong>
              </th>
              <th className="border-0" scope="col">
                {" "}
                <strong className="text-small text-uppercase">Image</strong>
              </th>
              <th className="border-0" scope="col">
                {" "}
                <strong className="text-small text-uppercase">Category</strong>
              </th>

              <th className="border-0" scope="col">
                {" "}
                <strong className="text-small text-uppercase">Edit</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {listCart &&
              listCart.map((value) => (
                <tr className="text-center" key={value._id}>
                  <td className="align-middle border-0">
                    <p className="mb-0 small">{value._id}</p>
                  </td>

                  <td className="align-middle border-0">
                    <p className="mb-0 small">{value.name}</p>
                  </td>
                  <td className="align-middle border-0">
                    <p className="mb-0 small">{value.price}</p>
                  </td>
                  <td className="align-middle border-0">
                    <img src={value.img1} alt="..." width="100" />
                  </td>
                  <td className="align-middle border-0">
                    <p className="mb-0 small">{value.category}</p>
                  </td>

                  <td className="align-middle border-0">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handleOnclick(value);
                      }}
                    >
                      Delete
                    </button>
                    <button className="btn btn-secondary">Edit</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainHistory;
