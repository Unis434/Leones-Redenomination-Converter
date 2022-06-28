import React, {FC, useEffect, useState} from "react";
import { Card, TextInput, Text, Group, ActionIcon } from "@mantine/core";
import {ReactComponent as Coins} from '../../assets/coins.svg'
import {ReactComponent as Exchange} from '../../assets/exchange.svg'
import {ReactComponent as SlFlag} from '../../assets/slflag.svg'
import { Refresh} from 'tabler-icons-react'
import NumberFormat from 'react-number-format';

interface Props {
    title: String
    subTitle: String
    direction?: string
}

interface Direction {
  new: string
  old: string
}


const Converter: FC<Props> = props => {
const [amount, setAmount] = useState(0)

useEffect(()=> {

})

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="lg" p="md" radius="md">
        <Card.Section p="lg">
          <Group spacing="lg">
            <Coins /> <Text style={{color: "#012A74"}} size="md" weight="bold">{props.title}</Text>
          </Group>
        </Card.Section>
        <Text size="sm" style={{color: "#012A74"}}>{props.subTitle}</Text>
        <Card.Section p="lg">
          <Group spacing="lg" p="xs">
            <SlFlag /> <Text style={{color: "#C4C4C4"}} weight="bold"> SLL Old</Text>
          </Group>
          <NumberFormat value={amount} onValueChange={({formattedValue, value})=> setAmount(parseInt(value)) } displayType="input" thousandSeparator prefix={"Le"} customInput={TextInput}/>
          {/* <TextInput pl="md" variant="filled" placeholder="Enter amount" value={amount} onChange={(event) => setAmount(parseInt(event.currentTarget.value))} /> */}
        </Card.Section>
        <Group>
        <Exchange/> 
        <ActionIcon onClick={()=>setAmount(0)} color="blue" size="xl" radius="md" variant="light">
          <Refresh size={44}
    strokeWidth={2}
    color={'#79d2c3'}/>
        </ActionIcon>
        </Group>
        
        <Card.Section p="lg">
          <Group spacing="lg" p="xs">
            <SlFlag /> <Text style={{color: "#C4C4C4"}} weight="bold">SLL New</Text>
          </Group>
          {/* <TextInput variant="filled" placeholder="" pl="md" value={`Le ${amount / 100}`} /> */}
          <NumberFormat value={amount / 1000} displayType="input" thousandSeparator prefix={"Le"} customInput={TextInput}/>
        </Card.Section>
      </Card>
    </div>
  );
}

export default Converter;
