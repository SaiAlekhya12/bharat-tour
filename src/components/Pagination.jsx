import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import Data from "../../Data/Data.json";

export default function Pagination({ setCurrentData, setPageSum }) {
  const itemsPerPage = 8; // 4 columns x 2 rows
  const pageCount = Math.ceil(Data.destinations.length / itemsPerPage);

  const handlePageClick = (data) => {
    let selected = data.selected;
    let offset = selected * itemsPerPage;
    setPageSum(offset);
    setCurrentData(Data.destinations.slice(offset, offset + itemsPerPage));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setCurrentData(Data.destinations.slice(0, itemsPerPage));
  }, [setCurrentData]);

  return (
    <div>
      <div className="flex justify-center items-center w-full my-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="| Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="Prev |"
          renderOnZeroPageCount={null}
          activeClassName="page-btn"
          activeLinkClassName="active"
          containerClassName="pagination-container"
          pageClassName="page-btn"
          pageLinkClassName="page-btn-link"
          previousClassName="page-btn"
          previousLinkClassName="prev page-btn-link"
          nextClassName="page-btn"
          nextLinkClassName="next page-btn-link"
          disabledClassName="page-btn"
          disabledLinkClassName="disabled page-btn-link"
          breakClassName="page-btn"
          breakLinkClassName="break page-btn-link"
        />
      </div>
    </div>
  );
}
