import 
{  
  Row, Col, Grid, Card, Link, Text, Radio,
  Avatar, Spacer, Button,
  useTheme, Container,
} from '@nextui-org/react';
import styles from '../../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import Login from '../../components/login';
import React, { useState } from 'react';

export default function rock_paper_scissors() {
    const { data: session } = useSession()
    const [select, setSelect] = useState('x')
    const [win, setWin] = useState('')
    const List =  ['가위', '바위', '보']
    const handleSelect = (e) => {
        setSelect(e)
    }
    function Fight() {
        if (select === 'x') return setWin('선택하시고 시작을 눌러주세요!')
        const Ai = List[Math.floor(Math.random() * List.length)] 
        if (Ai === select) return setWin(`${session.user.name}님은 ${select}, 저는 ${Ai}로, 무승부!`)
        if (select === '가위') {
            if (Ai === '보') return setWin(`${session.user.name}님은 ${select}, 저는 ${Ai}로, 승리!`)
            else return setWin(`${session.user.name}님은 ${select}, 저는 ${Ai}로, 패배!`)
        }
        if (select === '바위') {
            if (Ai === '가위') return setWin(`${session.user.name}님은 ${select}, 저는 ${Ai}로, 승리!`)
            else return setWin(`${session.user.name}님은 ${select}, 저는 ${Ai}로, 패배!`)
        }
        if (select === '보') {
            if (Ai === '바위') return setWin(`${session.user.name}님은 ${select}, 저는 ${Ai}로, 승리!`)
            else return setWin(`${session.user.name}님은 ${select}, 저는 ${Ai}로, 패배!`)
        }
    }
    
    if (session) {
        return (
            <>
                <div className={styles.main}>
                    <Text h1 color = 'white'>
                        가위바위보!
                    </Text>
                    <Radio.Group row onChange={(e)=>handleSelect(e)} value="primary" textColor="success" css = {{fontWeight : 'bolder'}}>
                        <Radio 
                            value="가위"
                            color="success"  
                        >
                            가위
                        </Radio>
                        <Spacer/>
                        <Radio 
                            value="바위"  
                            color="success"  
                        >
                            바위
                        </Radio>
                        <Spacer/>
                        <Radio 
                            value="보"  
                            color="success"  
                        >
                            보
                        </Radio>
                    </Radio.Group>
                    <Spacer y={1}/>
                    <Button color = 'primary' onClick={()=> Fight()} css= {{fontWeight : 'bolder', fontSize : '16px'}}>시작</Button>
                    <Spacer y={2}/>
                    <Text h2 color = 'success' css = {{fontWeight: "bolder"}}>{win}</Text>
                </div>
            </>
        )
    }
    return <Login/>
}