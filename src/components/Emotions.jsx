import React, { useState, useEffect } from "react";
import axios from "axios";

const Emotions = ({ content }) => {
  const [emotions, setEmotions] = useState(null);

  const encodedParams = new URLSearchParams();
  encodedParams.set("text", content);

  const options = {
    method: "POST",
    url: "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "twinword-emotion-analysis-v1.p.rapidapi.com",
    },
    data: encodedParams,
  };
  useEffect(() => {
    const detectEmotions = async () => {
      try {
        const response = await axios.request(options);
        setEmotions(response.data.emotions_detected);
      } catch (error) {
        console.error(error);
      }
    };

    detectEmotions();
  }, []);

  const renderEmotions = emotions?.map((emotion) => <li>{emotion}</li>);

  return (
    <div>
      {emotions?.length > 0 ? (
        <div>
          <h3>Your test contains the following emotions:</h3>
          <ul>{renderEmotions}</ul>
        </div>
      ) : (
        <h3>No emotions detected</h3>
      )}
    </div>
  );
};

export default Emotions;
