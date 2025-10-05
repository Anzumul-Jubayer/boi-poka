import { ChevronDown, MapPin, StickyNote, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utility/addToDB";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort,setSort]=useState('')
  const data = useLoaderData();
  useEffect(() => {
    const storedBookData = getStoredBook();
    const newStoredBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      newStoredBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);
 
  const handleSort=(sortType)=>{
    setSort(sortType)
    if(sortType==='Rating'){
        const sortByRating=[...readList.sort((a,b)=>a.rating-b.rating)]
        setReadList(sortByRating)
        
    }
    if(sortType==='Pages'){
        const sortByRating=[...readList.sort((a,b)=>a.totalPages-b.totalPages)]
        setReadList(sortByRating)
        
    }
  }

  return (
    <div>
      <div className="bg-gray-300 rounded-lg p-5 my-6">
        <h1 className="font-bold text-center">Books</h1>
      </div>
      <div className="flex justify-center my-6">
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white font-bold">
            Sort By:{sort?sort:""}<ChevronDown/> 
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={()=>handleSort('Rating')}>Rating</a>
            </li>
            <li>
              <a onClick={()=>handleSort('Pages')}>Pages</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="tabs tabs-lift my-6">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h1 className="font-bold mb-4">Read List: {readList.length}</h1>
          {readList.map((list) => (
            <div className="flex flex-col lg:flex-row gap-6 my-4">
              <div className="bg-gray-200 p-5">
                <img src={list.image} alt="" className="w-[200px]" />
              </div>
              <div>
                <h1 className="font-bold text-xl mb-2">{list.bookName}</h1>
                <p className="text-gray-400 mb-2">By: {list.author}</p>
                <div className="flex items-center gap-3 mb-4">
                  <p className="font-bold text-black">Tag:</p>
                  {list.tags.map((tag) => (
                    <div>
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <p className="text-green-400 font-bold"># {tag}</p>
                      </div>
                    </div>
                  ))}
                  <MapPin />
                  <p className="text-gray-400">
                    {" "}
                    Year of Publishing:{" "}
                    <span className=" font-bold">{list.yearOfPublishing}</span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2 text-gray-400">
                    <User />
                    <p className="text-gray-400">
                      Publisher:{" "}
                      <span className=" font-bold">{list.publisher}</span>
                    </p>
                  </div>
                  <div className="text-gray-400 flex gap-2">
                    <StickyNote />
                    <p className="text-gray-400">
                      Number of pages:{" "}
                      <span className=" font-bold">{list.totalPages}</span>
                    </p>
                  </div>
                  <div></div>
                </div>
                <div className="divider"></div>
                <div className="flex gap-2">
                  <div className="bg-blue-200 p-2 rounded-3xl">
                    <p className="text-blue-400 mb-2 font-bold">
                      # Category: {list.category}
                    </p>
                  </div>
                  <div className="bg-orange-200 py-2 px-2 rounded-3xl">
                    <p className="text-orange-400 mb-2 font-bold">
                      # Ratings: {list.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wish List"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h1 className="font-bold mb-4">Wish List: 0</h1>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
