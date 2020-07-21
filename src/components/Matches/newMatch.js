import React from 'react'
import cx from 'clsx'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet'
import VerticalTicketRip from '@mui-treasury/components/rip/verticalTicket'
import { useVerticalRipStyles } from '@mui-treasury/styles/rip/vertical'
import { useStyles } from './newMatchStyles'

const MatchCard = ({ matchDate, team1, team2, teamLogos }) => {
    const styles = useStyles()
    const mainColor = '#003399'
    const lightColor = '#ecf2ff'
    const ripStyles = useVerticalRipStyles({
        size: 24,
        rightColor: lightColor,
        tearColor: mainColor,
    })

    return (
        <Card className={styles.card} elevation={0}>
            <div className={cx(styles.left, styles.moveLeft)}>
                <CardMedia
                    className={styles.media}
                    image={
                        'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/022016/untitled-1_243.png?itok=NFEakbIj'
                    }
                />
            </div>
            <VerticalTicketRip
                classes={{
                    ...ripStyles,
                    left: cx(ripStyles.left, styles.moveLeft),
                    right: cx(ripStyles.right, styles.moveRight),
                }}
            />
            <div className={cx(styles.right, styles.moveRight)}>
                <div className={styles.label}>
                    <h2 className={styles.heading}>{team1}</h2>
                </div>
                <div className={styles.path}>
                    <div className={styles.line}>
                        <SettingsEthernetIcon />
                    </div>
                    <span className={styles.matchDate}>
                        {new Date(matchDate).toLocaleString()}
                    </span>
                </div>
                <div className={styles.label}>
                    <h2 className={styles.heading}>{team2}</h2>
                </div>
            </div>
        </Card>
    )
}

export default MatchCard
