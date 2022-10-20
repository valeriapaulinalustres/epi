import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/BeatLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FF003C");

  return (
    <div className="sweet-loading">
     

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;