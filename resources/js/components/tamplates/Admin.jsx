import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/fetch")
      .then((res) => {
        // console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="pt-[50px] h-screen bg-[#e5e5e5]">
      <h1 className="container mx-auto flex justify-center text-3xl font-extrabold">
        Admin
      </h1>
      <Link to="/">
        <p className="container mx-auto flex justify-center text-[20px] bg-yellow-400 rounded-full p-2 w-[100px] text-white font-semibold">
          Home
        </p>
      </Link>
      <Link to="/upload">
        <p className="container mx-auto flex justify-center text-[20px] bg-yellow-400 rounded-full p-2 w-[200px] text-white font-semibold mt-3">
          Upload Product
        </p>
      </Link>

      <div className="flex flex-col max-w-[1200px] items-center mx-auto">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg pt-[80px]">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Image
                </th>
                <th scope="col" className="py-3 px-6">
                  Product name
                </th>
                <th scope="col" className="py-3 px-6">
                  Details
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            {posts.map((data) => (
              <tbody key={data.id}>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="py-4 px-6">1</td>
                  <td>
                    <img
                      className="object-cover h-[60px]"
                      loading="lazy"
                      src={data.image}
                      alt="not found"
                    />
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <input
                      className="outline-slate-300"
                      type="text"
                      name=""
                      id=""
                      value={data.p_name}
                      readOnly
                    />
                  </th>
                  <td className="py-4 px-6">
                    <input
                      className="outline-slate-300"
                      type="text"
                      name=""
                      id=""
                      value={data.details}
                      readOnly
                    />
                  </td>
                  <td className="py-4 px-6">
                    $
                    <input
                      className="outline-slate-300"
                      type="text"
                      name=""
                      id=""
                      value={data.price}
                      readOnly
                    />
                  </td>
                  <td className="py-4 px-6 flex flex-row">
                    <Link to="/delete">
                      <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <svg
                          xmlns="http: www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 hover:opacity-80 active:opacity-50"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </p>
                    </Link>
                    <Link to="/edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 hover:opacity-80 active:opacity-50"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                      </svg>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
