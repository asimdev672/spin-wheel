import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./Card.scss";
import { TiTick } from "react-icons/ti";
const Card = (props) => {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="row">
        {currentItems.map((images) => {
          return (
            <>
              {/* <div className='row-cols-lg-4 row-cols-md-3 row-cols-1'> */}
              <div className="col-lg-3 col-md-4 ">
                <div className="Pcard">
                  <div className="row ">
                    <div className="col-12">
                      <img src={images.url} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12">
                      <p>
                        Modern blue wood varity with drop_in sink and white
                        quartz countertop with golden handware and lorem ipsum
                      </p>
                      <h4>250</h4>
                      <span>Lorem, ipsum dolor.</span>
                      <div>
                        <span className="pe-3">ABC Asim</span>
                        <TiTick className="check_circule" />
                      </div>
                      <div className="d-flex">
                        <div className="pe-3">
                          <TiTick className="check_circule" />
                        </div>
                        <div>
                          <span>Lorem ipsum dolor sit.</span>
                          <p>Modern blue wood varity</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <div className="pe-3">
                            <TiTick className="check_circule" />
                          </div>
                          <span>Lorem ipsum dolor sit.</span>
                        </div>

                        <small className="pe-2">18km</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </>
          );
        })}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default Card;
