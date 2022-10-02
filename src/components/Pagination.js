import * as React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
export default function PaginationButtons({ page, setPage, totalPages }) {
  function handleUpdatePage(amount) {
    setPage((prevPage) => prevPage + amount);
  }
  return (
    <div className="flex pagination">
      {page !== 1 && (
        <span className="flex" onClick={() => handleUpdatePage(-1)}>
          <KeyboardDoubleArrowLeftIcon />
          Previous
        </span>
      )}

      <span className="active">{page}</span>

      <span className="flex" onClick={() => handleUpdatePage(1)}>
        Next
        <KeyboardDoubleArrowRightIcon />
      </span>
    </div>
  );
}
