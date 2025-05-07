import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="flex justify-center items-center mt-8 mb-4">
      <nav className="flex items-center gap-2">
        <button
          onClick={() => paginate(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'}`}
        >
          <FaChevronLeft className="inline mr-1" />
          <span>Previous</span>
        </button>

        {pageNumbers.map((number, index) => (
          <div key={number} className="flex items-center">
            {index > 0 && pageNumbers[index - 1] !== number - 1 && (
              <span className="px-2">...</span>
            )}
            <button
              onClick={() => paginate(number)}
              className={`w-10 h-10 rounded-md flex items-center justify-center ${
                currentPage === number
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              {number}
            </button>
          </div>
        ))}

        <button
          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200'}`}
        >
          <span>Next</span>
          <FaChevronRight className="inline ml-1" />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;