import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../img/logo.png";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <img className="mylogo" src={logo} alt="" />
      {data.results.map((character) => {
        return (
          <article key={character._id}>
            <div className="card-product">
              <img
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt="character"
              />
              <div className="card-product-infos">
                <h2>{character.name}</h2>
                <p>{character.description}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Characters;
