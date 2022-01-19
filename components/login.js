import { useSession, signIn, signOut } from "next-auth/react"
import 
{  
  Row, Col, Grid, Card, Link, Text, 
  Avatar, Spacer, Button,
  useTheme, Container,
} from '@nextui-org/react';
import styles from '../styles/Home.module.css'

export default function Login(session) {
    return (
        <>
            <div className={styles.main}>
                <Row justify = 'center' align = 'center'>
                    <Text h2 css = {{color: 'white'}}>로그인이 필요한 서비스입니다.</Text>
                    <Spacer x={1}/>
                    <Button css={{fontWeight : 'bolder', fontSize : '16px'}} onClick={() => signIn()}>로그인</Button>
                </Row>
            </div>
        </>
    )
}