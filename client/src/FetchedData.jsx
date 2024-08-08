import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchedData = () => {
  const [books, setBooks] = useState([]); // Initialize as an empty array

  useEffect(() => {
    axios
      .get("http://localhost:8000/books")
      .then((res) => setBooks(res.data))
      .catch((error) => console.log(error)); // Fix typo here
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Cover</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {books.map((val, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th> {/* Display the row number */}
                <td>{val.title}</td>
                <td>
                  <img
                    src={val.cover}
                    alt={`${val.title} Cover`}
                    style={{ width: "100px", height: "auto" }}
                  />
                </td>
                <td>{val.desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FetchedData;
