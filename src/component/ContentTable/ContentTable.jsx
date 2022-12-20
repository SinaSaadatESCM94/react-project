import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ContentTable (dataArray){
	// dataArray = [ { name: "sina", id: "escm94" }, { name: "helia", id: "helia86" } ];
	// functions
	// to render header based on keys of table data array
	const renderHead = (dataArray) => {
		return (
			<thead className="border-bottom border-secondary mb-3 fs-5">
				<tr>
					<th scope="col" className="text-capitalize" key="index" id="index">
						index
					</th>
					{Object.keys(dataArray[0]).map((characteristic) => {
						return (
							<th scope="col" className="text-capitalize" key={characteristic} id={characteristic}>
								{characteristic}
							</th>
						);
					})}
				</tr>
			</thead>
		);
	};
	// console.log("component", dataArray.dataArray.length);
	// to render rows of table with values based on their keys
	const renderRow = (dataArray, index) => {
		return (
			<tr key={Math.random() * 100}>
				<th scope="row">{index + 1}</th>
				{Object.values(dataArray).map((data) => {
					return <td key={Math.random() * 10}>{data || "--"}</td>;
				})}
			</tr>
		);
	};
	// let tableDataExample = users;
	return (
		<div className="w-100 h-auto d-flex p-3">
			{/* to check if dataArray is empty or not and prevent error in case of being empty, the following structure is selected */}
			{dataArray.dataArray.length ? (
				<table className="w-100 table-primary">
					{renderHead(dataArray.dataArray)}
					<tbody>
						{dataArray.dataArray.map((eachDataset) => {
							let index = dataArray.dataArray.indexOf(eachDataset);
							return renderRow(eachDataset, index);
						})}
					</tbody>
				</table>
			) : null}
		</div>
	);
}

ContentTable.propTypes = {};

export default ContentTable;
