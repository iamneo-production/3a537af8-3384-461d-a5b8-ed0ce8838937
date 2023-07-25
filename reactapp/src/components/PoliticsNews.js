import React from "react";
import { useState,useEffect } from "react";
import { Dna } from "react-loader-spinner";

function PoliticsNews() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (loading) {
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    }, [loading]);
  
    if (loading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <Dna
            visible={true}
            height={80}
            width={80}
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      );
    }
  
    return(
        <>
        <div className="trending-news-main">

        </div>
        </>
    )
}

export default PoliticsNews;