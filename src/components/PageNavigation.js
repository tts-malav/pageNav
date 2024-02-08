import React, { useState } from 'react'

const PageNavigation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const handlePages = () => {
    const last = prompt("Last page: ");
    const lastPageValue = Number.parseInt(last);
    setLastPage(lastPageValue);
    let pages = [];
    if (lastPageValue === 1) {
        pages = [1];
    } 
    else{
      const curr = prompt("Current page: ");
      const currPageValue = Number.parseInt(curr);
      setCurrentPage(currPageValue);
  
      if (lastPageValue <= 5) {
        for (let i = 1; i <= lastPageValue; i++) {
          pages.push(i);
        }
      } 
      else {
        if (currPageValue <= 3) {
          pages = [1, 2, 3, '...', lastPageValue];
        } 
        else if (currPageValue >= lastPageValue - 2) {
          pages = [1, '...', lastPageValue - 2, lastPageValue - 1, lastPageValue];
        } 
        else {
            pages = [1, '...', currPageValue, '...', lastPageValue];
        }
      }
    }
    console.log("< " + pages.join(' ') + " >");
  };
  
  return (
    <>
    <div className='p-4'>
      <div className='flex items-center justify-center space-x-1'>
        <button className='bg-purple-200 px-4 py-2 font-bold'>
          &lt; 
        </button>
        <button className='bg-purple-200 px-4 py-2 font-bold'>
          1
        </button>
        <button className='bg-purple-200 px-4 py-2 font-bold'>
          1
        </button>
        <button className='bg-purple-200 px-4 py-2 font-bold'>
          1
        </button>
        <button className='bg-purple-200 px-4 py-2 font-bold'>
          1
        </button>
        <button className='bg-purple-200 px-4 py-2 font-bold'>
          1
        </button>
        <button className='bg-purple-200 px-4 py-2 font-bold'>
          &gt; 
        </button>
      </div>
    </div>
    </>
  )
}

export default PageNavigation