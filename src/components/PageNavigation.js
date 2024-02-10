import React, {useState } from 'react';

const PageNavigation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const handlePages = () => {
    const last = prompt("Last page: ");
    const lastPageValue = Number.parseInt(last);
    setLastPage(lastPageValue);

    if (lastPageValue > 1) {
      const curr = prompt("Current page: ");
      const currPageValue = Number.parseInt(curr);
      setCurrentPage(currPageValue);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    console.log("Navigating to page:", page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className='p-4'>
        <div className='flex items-center justify-center space-x-1'>
          <button className='bg-purple-200 px-4 py-2 font-bold' onClick={handlePrevPage}>
            &lt;
          </button>
          {lastPage <= 5 ? (
            Array.from({ length: lastPage }, (_, index) => (
              <button
                key={index}
                className={`bg-purple-200 px-4 py-2 font-bold ${currentPage === index + 1 ? 'bg-purple-500' : ''}`}
                onClick={() => handlePageClick(index + 1)}
              >
                <p>{index + 1}</p>
              </button>
            ))
          ) : (
            <>
              {currentPage <= 3 ? (
                <>
                  {[1, 2, 3, '...', lastPage].map((page, index) => (
                    <button
                      key={index}
                      className={`bg-purple-200 px-4 py-2 font-bold ${currentPage === page ? 'bg-purple-500' : ''}`}
                      onClick={() => handlePageClick(page)}
                    >
                      <p>{page}</p>
                    </button>
                  ))}
                </>
              ) : currentPage >= lastPage - 2 ? (
                <>
                  {[1, '...', lastPage - 2, lastPage - 1, lastPage].map((page, index) => (
                    <button
                      key={index}
                      className={`bg-purple-200 px-4 py-2 font-bold ${currentPage === page ? 'bg-purple-500' : ''}`}
                      onClick={() => handlePageClick(page)}
                    >
                      <p>{page}</p>
                    </button>
                  ))}
                </>
              ) : (
                <>
                  {[1, '...', currentPage, '...', lastPage].map((page, index) => (
                    <button
                      key={index}
                      className={`bg-purple-200 px-4 py-2 font-bold ${currentPage === page ? 'bg-purple-500' : ''}`}
                      onClick={() => handlePageClick(page)}
                    >
                      <p>{page}</p>
                    </button>
                  ))}
                </>
              )}
            </>
          )}
          <button className='bg-purple-200 px-4 py-2 font-bold' onClick={handleNextPage}>
            &gt;
          </button>
        </div>
        <div className='flex items-center justify-center pt-4'>
          <button className='bg-purple-200 px-4 py-2 font-bold' onClick={handlePages}>
              Refresh
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNavigation;
