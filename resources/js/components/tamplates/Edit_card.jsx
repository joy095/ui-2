import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Edit_card = () => {
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
    <div className="pt-[50px] bg-[#e5e5e5] h-screen">
      <h1 className="container mx-auto flex justify-center text-3xl font-extrabold">
        Edit Product
      </h1>
      <Link to="/">
        <p className="container mx-auto flex justify-center text-[20px] bg-yellow-400 rounded-full p-2 w-[100px] text-white font-semibold">
          Home
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
                  <td className="py-4 px-6">{data.id}</td>
                  <td className="">
                    <img
                      className="object-cover h-[60px]"
                      src={data.image}
                      alt="not found"
                      loading="lazy"
                    />
                    <input
                      className="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-violet-50 file:text-violet-700
                                    hover:file:bg-violet-100"
                      type="file"
                      accept="image/*"
                      name=""
                      id=""
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
                    />
                  </th>
                  <td className="py-4 px-6">
                    <input
                      className="outline-slate-300"
                      type="text"
                      name=""
                      id=""
                      value={data.details}
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
                    />
                  </td>
                  <td className="py-4 px-6">
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 hover:opacity-80 active:opacity-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
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

export default Edit_card;
