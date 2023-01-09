import React, {useState} from "react";

interface Props {
    data: [],
    itemsPerPage: number
}

interface Pagination {
    next: () => void,
    prev: () => void,
    jump: () => void,
    currentData: object,
    currentPage: number,
    maxPage: number,
}
const usePagination: React.FC<Props>  = ({ data, itemsPerPage }): Pagination => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {

  }

  const next = () => {

  }

  const prev = () => {

  }

  const jump = () => {

  }

  return {next, prev, jump, currentData, currentPage, maxPage};
}

export default usePagination