import PropTypes from "prop-types";

import { Table, Donut } from ".";

const Body = ({ data, deleteData }) => {
  return (
    <div className="body centered">
      <div className="title">
        <h3>Data</h3>
        To delete an element, click the row in the table. To add, use the above
        form.
      </div>
      <div className="graphs width-std">
        <Table data={data} deleteData={deleteData} />
        <Donut data={data} />
      </div>
      <style jsx>{`
        .body {
          flex-direction: column;
          width: 100%;
          margin-top: 10px;
        }

        .title {
          text-align: center;
          max-width: 70%;
          margin: 10px 0;
        }

        .graphs {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
      `}</style>
    </div>
  );
};

Body.propTypes = {
  data: PropTypes.array,
  deleteData: PropTypes.func,
};

export default Body;
