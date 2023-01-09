import React, { useState } from "react";

export interface usePaginationProps {
    data: [],
    itemsPerPage: number
}

interface Pagination {
    next: () => void,
    prev: () => void,
    jump: (page: number) => void,
    currentData: () => any[],
    currentPage: number,
    maxPage: number,
}
const usePagination  = ({ data, itemsPerPage }: usePaginationProps): Pagination => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
      const begin: number = (currentPage - 1) * itemsPerPage;
      const end: number = begin + itemsPerPage;
      return data.slice(begin, end);
  };

  const next = () => {
      setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
      setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  const jump = (page: number) => {
   const pageNumber = Math.max(1, page);
   setCurrentPage(() => Math.min(pageNumber, maxPage))
  };

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination