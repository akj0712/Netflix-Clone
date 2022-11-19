import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import NavBar from "../../components/navbar/NavBar";
import axios from "axios";
import "./home.scss";
import Footer from "../../components/footer/Footer";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjJiZTA4ZDA3NmQxYTk4MDRmMWMzZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODgwMDQzMywiZXhwIjoxNjY5MjMyNDMzfQ.gJni3mxZhV5yIY2KIgzmmUZwv03zQuU55W-nWqa0KD8",
            },
          }
        );
        // console.log(res.data);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
    return () => {};
  }, [type, genre]);

  return (
    <div className="home">
      <NavBar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
