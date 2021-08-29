import React, { useEffect, useState } from "react";
import { ComparePrice } from "./ComparePrice";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";

const Deal = ({ x }) => {
  const deals = x.deals;
  const [load, setLoad] = useState(true);
  //console.log(p.me);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, Math.random() * 2000);
  }, []);
  return load ? (
    <Dl>
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
    </Dl>
  ) : (
    <Dl>
      <ComparePrice
        d={deals[0]}
        src={
          "https://imgcy.trivago.com/e_trim,w_4096/e_vectorize:30:1.0:1.0:100:25,f_svg/ar_3:1,b_white,bo_2px_solid_white,c_pad,f_png,h_26,q_auto,w_96/partnerlogos-s3/395"
        }
      />
      <ComparePrice
        d={deals[1]}
        src={
          "https://imgcy.trivago.com/e_trim,w_4096/e_vectorize:30:1.0:1.0:100:25,f_svg/ar_3:1,b_white,bo_2px_solid_white,c_pad,f_png,h_26,q_auto,w_96/partnerlogos-s3/626"
        }
      />
      <ComparePrice
        d={deals[2]}
        src={
          "https://imgcy.trivago.com/e_trim,w_4096/e_vectorize:30:1.0:1.0:100:25,f_svg/ar_3:1,b_white,bo_2px_solid_white,c_pad,f_png,h_26,q_auto,w_96/partnerlogos-s3/2636"
        }
      />
      <ComparePrice
        d={deals[3]}
        src={
          "https://imgcy.trivago.com/e_trim,w_4096/e_vectorize:30:1.0:1.0:100:25,f_svg/ar_3:1,b_white,bo_2px_solid_white,c_pad,f_png,h_26,q_auto,w_96/partnerlogos-s3/634"
        }
      />
      <ComparePrice
        d={deals[4]}
        src={
          "https://imgcy.trivago.com/e_trim,w_4096/e_vectorize:30:1.0:1.0:100:25,f_svg/ar_3:1,b_white,bo_2px_solid_white,c_pad,f_png,h_26,q_auto,w_96/partnerlogos-s3/341"
        }
      />
    </Dl>
  );
};

export default Deal;

const Dl = styled.div`
  max-width: 1000px;
  margin: 5px auto 10px;
  background-color: white;
  padding: 15px;
  display: flex;
  gap: 0.8%;
  justify-content: space-between;
`;
