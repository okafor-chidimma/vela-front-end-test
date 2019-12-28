import React from 'react';
import dropDown from '../../../../../assets/mainbar/filtered-content/DropDown.jpg';
export const TableRow = ({ status }) => {
  let divClassName = `status-div__button-div mr1 ml1 mt1 mb1 ${status}-bg`;
  let textClassName = `${status}-text`;
  return (
    <div className="filtered-content__div white-background p1-5">
      <div className="flex align-center flex-start">
        <div className="mr2 text-center filtered-content__item-symbol">
          <p>VW</p>
        </div>
        <div className="off-grey">
          <p>Apple Mac Book 15” 250 SSD 12GB</p>
        </div>
      </div>
      <div>
        <p>$73430</p>
      </div>
      <div>
        <p>1234567890</p>
      </div>
      <div>
        <p>12:30</p>
      </div>
      <div className="filtered-content__status-div--main">
        <div className="flex align-center filtered-content__status-div">
          <div className={divClassName}></div>
          <p className={textClassName}>{status}</p>
        </div>
        <img src={dropDown} alt="drop down" className="status-div__drop-down mt1" />
      </div>
    </div>
  )
}
