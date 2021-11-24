import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

import { injected } from "../utils/connecters";

const useEagerConnect = () => {
  const [tried, setTried] = useState(false);
  const { activate, active } = useWeb3React();

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
};

export default useEagerConnect;
