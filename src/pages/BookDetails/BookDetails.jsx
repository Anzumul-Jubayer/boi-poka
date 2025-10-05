import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);
  const singleBook = data.find((book) => book.bookId === parseInt(id));
  const {
    image,
    author,
    review,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
    bookName,
    category,
    rating,
  } = singleBook;

  const handleMarkAsRead = (id) => {
   Swal.fire({
  title: "Successfully marked",
  icon: "success",
  draggable: true
});
    addToStoredDB(id);
  };

  return (
    <div className="my-20 flex flex-col lg:flex-row gap-20 px-4 lg:px-0 ">
      <div className="bg-gray-200 p-10 rounded-lg">
        <img src={image} alt="" className="w-[2000px]" />
      </div>
      <div>
        <h1 className="font-bold text-4xl mb-2">{bookName}</h1>
        <p className="text-gray-400 mb-2">By: {author}</p>
        <div className="border-t border-dashed border-gray-300 mt-2"></div>
        <p className="text-gray-400 mb-2">{category}</p>
        <div className="border-t border-dashed border-gray-300 mb-2"></div>
        <p className="text-gray-400 text-justify mb-2">
          <span className="font-bold text-black">Review:</span>
          {review}
        </p>
        <div className="flex items-center gap-3 mb-4">
          <p className="font-bold text-black">Tag:</p>
          {tags.map((tag) => (
            <div>
              <div className="bg-gray-100 p-2 rounded-lg">
                <p className="text-green-400 font-bold"># {tag}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-dashed border-gray-300 mb-2"></div>
        <ul className="space-y-2">
          <li className="text-gray-400">
            Number of pages:{" "}
            <span className="text-black font-bold">{totalPages}</span>
          </li>
          <li className="text-gray-400">
            Publisher: <span className="text-black font-bold">{publisher}</span>
          </li>
          <li className="text-gray-400">
            Year of Publishing:{" "}
            <span className="text-black font-bold">{yearOfPublishing}</span>
          </li>
          <li className="text-gray-400">
            Rating: <span className="text-black font-bold">{rating}</span>
          </li>
        </ul>
        <div className="mt-4">
          <button onClick={() => handleMarkAsRead(id)} className="btn">
            Mark as Read
          </button>
          <button className="btn text-white bg-sky-300 ml-4">
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
