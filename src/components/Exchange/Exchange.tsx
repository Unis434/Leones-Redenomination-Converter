import React, { FC, ReactElement, useEffect, useState } from "react";
import { Group, Stack } from "@mantine/core";
import { useLocalStorage } from '@mantine/hooks';
import { ReactComponent as Usaflag } from "../../assets/usaflag.svg";
import { ReactComponent as Ukflag } from "../../assets/ukflag.svg";
import { ReactComponent as Euroflag } from "../../assets/euroflag.svg";
import { ReactComponent as Slflag } from "../../assets/slflagRound.svg";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";

import { Refresh } from "tabler-icons-react";
import NumberFormat from "react-number-format";
import Currency from "../Currency/Currency";
const axios = require('axios').default;

interface Props {
  name: String;
  amount: number;
  symbol: string;
  flag: ReactElement;
}

interface Direction {
  new: string;
  old: string;
}

const Exchange: FC = () => {
    const [rates, setRates] = useLocalStorage<any>({key: "rates", defaultValue: {usd: {buying: '11,140'}, gbp: {buying: '11,140'}, euro: {buying: '11,140'}}})
    
  useEffect(() => {
    axios.get('https://slmoney-converter.herokuapp.com/')
    .then((res: any) => setRates(res.data))
    .catch((error: any) => console.log(error));
    
},[] );

  return (
    <Stack style={{ padding: "10px" }} align="center" justify="center">
      <Group grow>
        <Currency name="USD" flag={<Usaflag />} amount={"1.0"} symbol="$" />
        <LeftArrow  style={{marginLeft: "10px", marginRight: "10px"}}/>
        <Currency name="SLL" flag={<Slflag />} amount={rates.usd.buying} symbol="SLL" />
      </Group>
      <Group position="apart">
        <Currency name="GBP" flag={<Ukflag />} amount={"1.0"} symbol="£" />
        <LeftArrow style={{marginLeft: "10px", marginRight: "10px"}} />
        <Currency name="SLL" flag={<Slflag />} amount={rates.gbp.buying} symbol="SLL" />
      </Group>
      <Group position="apart">
        <Currency name="EUR" flag={<Euroflag />} amount={"1.0"} symbol="€" />
        <LeftArrow style={{marginLeft: "10px", marginRight: "10px"}} />
        <Currency name="SLL" flag={<Slflag />} amount={rates.euro.buying} symbol="SLL" />
      </Group>
    </Stack>
  );
};

export default Exchange;
