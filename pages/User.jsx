import useAxios from "axios-hooks";
import { Header, Body, Loader } from "../components";
import { useForm } from "../hooks";

const baseURL = "http://localhost:3001";

const User = () => {
  const [{ data: getData, loading: getLoading, error: getError }, refetch] =
    useAxios(`${baseURL}/users`);

  const [{ loading: putLoading, error: putError }, executePost] = useAxios(
    { baseURL: `${baseURL}/users`, method: "POST" },
    { manual: true }
  );

  const updateData = async (data) => {
    await executePost({ data });
    refetch();
  };

  const [{ loading: deleteLoading, error: deleteError }, executeDelete] =
    useAxios(
      { baseURL: `${baseURL}/users`, method: "DELETE" },
      { manual: true }
    );

  const deleteData = async ({ _id }) => {
    await executeDelete({ url: `/${_id}` });
    refetch();
  };

  const initialState = {
    name: "",
    email: "",
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    initialState,
    () => updateData(inputs)
  );

  if (getLoading || putLoading || deleteLoading) return <Loader />;
  if (getError || putError || deleteError) return <p>Error!</p>;

  return (
    <div>
      <form onSubmit={handleSubmit} className="header-wrapper width-std">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          value={inputs.name}
          minLength="3"
          pattern="[A-Za-z]+"
          title="Must be at least three letters"
          required
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={inputs.emnail}
          minLength="3"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          title="Must be at least three letters"
          required
        ></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default User;
