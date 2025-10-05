import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const BookCard = ({ el }) => {
  const { category, author, image, tags, bookName,rating,bookId } = el;
  
  return (
    <Link to={`/bookDetails/${bookId}`}>
    <div className="card bg-base-100 shadow-sm border-1 border-gray-200">
      <figure className="m-4 bg-gray-100 p-4 rounded-lg">
        <img src={image} alt="name" className="h-60 w-60" />
      </figure>
      <div className=" flex justify-end mt-4 gap-4 pr-12">
        <div className="bg-gray-300 p-2 rounded-lg">
          <p className="text-green-400">{tags[0]}</p>
        </div>
        <div className="bg-gray-300 p-2 rounded-lg">
          <p className="text-green-400">{tags[1]}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <h2 className="text-black font-semibold">
          <span className="font-bold">By: </span>
           {author}
        </h2>
         <div className="border-t border-dashed border-gray-300 mt-2">

        </div>
        <div className=" flex justify-between items-center mt-2  pr-12 ">
          
          <div>
            <p className="text-green-400 font-bold">{category}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-400" >
            <Star/>
            <p>{rating}</p>
          </div>
        </div>
       
        
      </div>
    </div>
    </Link>
  );
};

export default BookCard;
