import Login from "../components/login";
import { useSession, signIn, signOut } from "next-auth/react"
import 
{  
  Row, Col, Grid, Card, Link, Text, 
  Avatar, Spacer, Button,
  useTheme, Container,
} from '@nextui-org/react';
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.main}>
            <Text h1 color='white'>저는 무엇일까요?</Text>
            <Spacer y = {1}/>
            <Text h4 color='white'>저는 Wavi입니다! 웹에서 돌아가는 봇으로 Next.js로 만들어졌죠!</Text>
            <Text h4 color='white'>저를 만드신 분은 두분이 계세요! Injoon5님, Rnaudah님이죠.</Text>
            <Text h4 color='white'>첫번째분은 저에대한 아이디어를 짜신 분이고, 두번째분은 저를 실제로 만들어주신 분이에요!</Text>
            <Text h4 color='white'>저는 서버가 돌아가는 이상 계속 살 수 있고, 성별은 없답니다.</Text>
            <Spacer y = {3}/>
            <a href = '/commands/help'><Button css={{fontWeight : 'bolder', fontSize : '16px'}}>명령어 보러가기</Button></a>
        </div>
    )
}