import 
{  
  Row, Col, Grid, Card, Link, Text, 
  Avatar, Spacer, Button,
  useTheme, Container,
} from '@nextui-org/react';
import styles from '../../styles/Home.module.css'

export default function Help() {
    const help = [
        {title : '주사위', about : '랜덤으로 숫자를 뽑아냅니다.',url : '/commands/dice', key : 'dice'},
        {title : '가위바위보', about : 'Wavi와 가위바위보 대결을 합니다.',url : '/commands/rock-paper-scissors', key : 'rock'},
        {title : '준비 중...', about : '추후의 기능을 준비 중입니다...s', key : 'wait'},

    ]
    return (
        <div className={styles.main}>
            <Text h1 color= 'white'>명령어</Text>
                <Grid.Container css={{backgroundColor : "rgb(0,0,0)"}} gap={2} justify = 'center'>
                    {help.map(i => {
                    return (
                        <Grid key = {i.key}>
                            <Card css={{ w: "330px" }} color='secondary'>
                                <Text h4 color='white'>{i.title}</Text>
                                <Text color="white">{i.about}</Text>
                                <Card.Footer>
                                    <Link css={{ color: "white" }} href={i.url}>
                                        {i.url}
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    )
                    })}
                </Grid.Container>
            
        </div>
    )
}