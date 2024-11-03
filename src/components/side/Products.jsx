import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { online } from "../../assets/assets";

const Products = () => {
  const { speciality } = useParams();

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const navigate = useNavigate();

  // const applyFilter = () => {
  //   if (speciality) {
  //     setFilterDoc(online.filter((pro) => pro.speciality === speciality));
  //   } else if (searchQuery) {
  //     setFilterDoc(
  //       online.filter(
  //         (pro) => pro.title.toLowerCase().includes(searchQuery.toLowerCase())
  //         // pro.title.toLowerCase().includes(searchQuery.toLowerCase())
  //       )
  //     );
  //   } else {
  //     setFilterDoc(online);
  //   }
  // };
  // const applyFilter = () => {
  //   if (speciality) {
  //     setFilterDoc(online.filter((pro) => pro.speciality === speciality));
  //   } else {
  //     setFilterDoc(online);
  //   }
  // };

  const applyFilter = () => {
    let filtered = online;

    // Apply speciality filter if a speciality is selected
    if (speciality) {
      filtered = filtered.filter((pro) => pro.speciality === speciality);
    }

    // Apply search query filter on top of the speciality filter
    if (searchQuery) {
      filtered = filtered.filter(
        (pro) =>
          pro.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pro.speciality.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Set filtered results and check for empty results
    setFilterDoc(filtered);
    setNoResults(filtered.length === 0);
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, searchQuery]);

  return (
    <div>
      <p className="text-gray-700">Browse Your favorate BOT's Use Case.</p>
      {/* Search bar */}
      <div className="mt-4 mb-6 w-full flex gap-3">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
        />

        <button
          onClick={applyFilter} // Triggers filtering on button click
          className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
        >
          Search
        </button>
      </div>
      {/* No Results Message */}
      {noResults && (
        <p className="text-red-500 mt-4">
          Sorry, we don’t have any results for your search.
        </p>
      )}

      {/* -------------------------
       */}
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "Restarent"
                ? navigate("/Restarent")
                : navigate("/products/Restarent")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Restarent" ? "bg-[#E2E5FF] text-black " : ""
            }`}
          >
            Restarent
          </p>
          <p
            onClick={() => {
              if (speciality === " Medical") {
                navigate("/products");
              } else {
                navigate("/products/Medical");
              }
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Medical" ? "bg-[#E2E5FF] text-black " : ""
            }`}
          >
            Medical
          </p>
          <p
            onClick={() =>
              speciality === "Ecommerce"
                ? navigate("/products")
                : navigate("/products/Ecommerce")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Ecommerce" ? "bg-[#E2E5FF] text-black " : ""
            }`}
          >
            Ecommerce
          </p>
          <p
            onClick={() =>
              speciality === "Real Estate"
                ? navigate("/products")
                : navigate("/products/Real Estate")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Real Estate" ? "bg-[#E2E5FF] text-black " : ""
            }`}
          >
            Real Estate
          </p>
          <p
            onClick={() =>
              speciality === "Small Business"
                ? navigate("/Small Business")
                : navigate("/products/Small Business")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border whitespace-nowrap border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Small Business" ? "bg-[#E2E5FF] text-black " : ""
            }`}
          >
            Small Business
          </p>
          <p
            onClick={() =>
              speciality === "Customer Services"
                ? navigate("/Customer Services")
                : navigate("/products/Customer Services")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border whitespace-nowrap border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Customer Services"
                ? "bg-[#E2E5FF] text-black "
                : ""
            }`}
          >
            Customer Services
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
              }}
              className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-[#EAEFFF]" src={item.image} alt="" />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm text-center ${
                    item.available ? "text-green-500" : "text-gray-500"
                  }`}
                ></div>
                <p className="text-[#262626] text-lg font-medium">
                  {item.title}
                </p>
                <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
