import React from 'react';
import { usePagination, DOTS } from '../_hooks/usePagination';
import { Pagination as ReactPagination } from 'react-bootstrap';

const Pagination = (props: any) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;
    console.log(currentPage)

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <>
            <ReactPagination>
                <ReactPagination.Prev disabled={currentPage === 1} onClick={onPrevious} />
                {paginationRange.map((pageNumber: number | string) => {
                    if (pageNumber === DOTS) {
                        return <ReactPagination.Ellipsis />
                    }
                    return (
                        <ReactPagination.Item key={pageNumber} active={currentPage === pageNumber} onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </ReactPagination.Item>
                    );
                })}
                <ReactPagination.Next disabled={currentPage === lastPage} onClick={onNext} />
            </ReactPagination>
        </>
    );
};

export default Pagination;
