import 
{  
  Row, Col, Grid, Card, Link, Text, Radio,
  Avatar, Spacer, Button, Input,
  useTheme, Container,
} from '@nextui-org/react';
import styles from '../../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import Login from '../../components/login';
import React, { useState } from 'react';

export default function Dice() {
    const {data : session} = useSession()
    const [up , setUp] = useState()
    const [down, setDown] = useState()
    const [result, setResult] = useState()

    const Uphandler = (event) => {
        setUp(event.target.value)
    }
    const Downhandler = (event) => {
        setDown(event.target.value)
    }
    function Start() {
        if (!up || !down || parseInt(up) <= parseInt(down)) {
            return setResult('값이 올바르지 않습니다.')
        }
        return setResult(`${Math.floor(Math.random()*(parseInt(up)-parseInt(down)+1)) + parseInt(down)}이(가) 나왔어요!`)
    }

    // if (session) {
        return ( 
            <>
                <div className={styles.main}>
                    <Text h1 color = "white">주사위</Text>
                    <Input placeholder = "~ 까지" onChange={(event)=>Uphandler(event)} vaule = {up} label="Number" type="number" />
                    <Input placeholder = "~ 에서"onChange={(event)=>Downhandler(event)} vaule = {down} label="Number" type="number" />
                    <Spacer y={2}/>
                    <Button color = 'primary' onClick={()=> Start()} css= {{fontWeight : 'bolder', fontSize : '16px'}}>굴리기</Button>
                    <Spacer y={2}/>
                    <Text h2 color = "white">{result}</Text>
                </div>
            </>
        )
    // }
    // return <Login/>
}