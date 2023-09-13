import useAxios from "axios-hooks";

import { Header, Body, Loader } from "../components";

const baseURL = "http://localhost:3001";

const Index = () => {
  const [{ data: getData, loading: getLoading, error: getError }, refetch] =
    useAxios(`${baseURL}/items`);

  const [{ loading: putLoading, error: putError }, executePost] = useAxios(
    { baseURL: `${baseURL}/items`, method: "POST" },
    { manual: true }
  );

  const updateData = async (data) => {
    await executePost({ data });
    refetch();
  };

  const [{ loading: deleteLoading, error: deleteError }, executeDelete] =
    useAxios(
      { baseURL: `${baseURL}/items`, method: "DELETE" },
      { manual: true }
    );

  const deleteData = async ({ _id }) => {
    await executeDelete({ url: `/${_id}` });
    refetch();
  };

  if (getLoading || putLoading || deleteLoading) return <Loader />;
  if (getError || putError || deleteError) return <p>Error!</p>;

  return (
    <div className="wrapper">
      <Header updateData={(item) => updateData(item)} />
      <Body data={getData} deleteData={deleteData} />
      <style jsx>{`
        .wrapper {
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
        }

        :global(.centered) {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        :global(.width-std) {
          width: 66%;
        }
      `}</style>
    </div>
  );
};

export default Index;
