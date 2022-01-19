import 
{  
  Row, Col, Grid, Card, Link, Text, 
  Avatar, Spacer, Button,
  useTheme, Container,
} from '@nextui-org/react';
import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  const { data: session } = useSession()
  const { theme } = useTheme();
  const help = [
    {title : '저는 무엇일까요?', url : '/about', key : '1'},
    {title : '저는 뭘 할 수 있을까요?', url : '/commands/help',  key : '2'},
    {title : '가위바위보!', url : '/commands/rock-paper-scissors', key : '3'},
  ]
    return (
      <>
        <div className = {styles.main}>
            <Text h1 size={100} css = {{textGradient: '135deg, $purple500 40%, $blue600 100%'}} weight="bold">
              Wavi
            </Text>
            <Row justify="center" align="center">
              ${session ?
                <>
                  <Avatar squared src = {session.user.image} size="lg" color="primary" bordered/>
                  <Spacer x={0.2}/>
                  <Text h1 size={30} color='primary' weight="bold">
                    {session.user.name}님, 안녕하세요!
                  </Text>
                </> 
                : null}
              <Spacer x={1}/>
              ${session ? <Button css={{fontWeight : 'bolder', fontSize : '16px'}} onClick={() => signOut()}>로그아웃</Button> : <Button css={{fontWeight : 'bolder', fontSize : '16px'}} onClick={() => signIn()}>로그인</Button>}
            </Row>
          </div>
          <div className={styles.main}>
            <Grid.Container css={{backgroundColor : "rgb(0,0,0)"}} gap={2} justify = 'center'>
                {help.map(i => {
                  return (
                    <Grid key={i.key}>
                      <Card css={{ w: "330px" }}>
                        <Text h4>{i.title}</Text>
                        <Card.Footer>
                          <Link color="primary" href={i.url}>
                            {i.url}
                          </Link>
                        </Card.Footer>
                      </Card>
                    </Grid>
                  )
                })}
            </Grid.Container>
          </div>
      </>
    )
}