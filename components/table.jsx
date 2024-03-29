import PropTypes from "prop-types";

const Table = ({ data, deleteData }) => (
  <div className="table-wrapper">
    <table>
      <thead>
        <tr>
          <th className="center-text"></th>
          <th className="large-row">First Name</th>
          <th className="large-row">Last Name</th>
          <th className="center-text">Participation</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ firstName, lastName, participation, _id }, i) => (
          <tr key={i} className="data-row" onClick={() => deleteData({ _id })}>
            <td className="center-text">{i}</td>
            <td className="large-row">{firstName}</td>
            <td className="large-row">{lastName}</td>
            <td className="center-text">{participation}%</td>
          </tr>
        ))}
      </tbody>
    </table>
    <style jsx>{`
      .table-wrapper {
        margin: 10px 15px;
        font-size: 0.7em;
        color: #b3b3b3;
        align-items: flex-start;
        height: 100%;
        width: 400px;
      }

      table {
        border-collapse: collapse;
      }

      table,
      th,
      td {
        border: 1px solid #b3b3b3;
      }

      thead th {
        font-weight: bold;
        color: #7f7f7f;
      }

      td,
      th {
        height: 20px;
        padding: 4px 10px 4px 4px;
      }

      .data-row {
        transition: background-color 0.5s;
      }

      .data-row:hover {
        background-color: red;
        color: white;
      }

      .large-row {
        text-align: left;
        width: 150px;
      }

      .center-text {
        text-align: center;
        padding: 4px 10px;
      }
    `}</style>
  </div>
);

Table.propTypes = {
  data: PropTypes.array.isRequired,
  deleteData: PropTypes.func,
};

export default Table;
