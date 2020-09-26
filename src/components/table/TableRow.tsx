import React from "react";
import { useSelector } from "react-redux";
import { searchType } from "../../redux/types/actions-types";

type collumType = { path: string; order: "asc" | "desc" };

const TableRow = () => {
  const datas = useSelector((state:searchType)=>state.countries)
  console.log(datas)



  return (
    <table>
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Languages</th>
          <th>Population</th>
          <th>Region</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default TableRow;
