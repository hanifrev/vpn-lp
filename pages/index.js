import Head from 'next/head'
import Grid from '@mui/material/Grid';
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Lasles VPN</title>
        <meta name="description" content="Free VPN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Grid xs={11} md={10} sx={{ mx: 'auto' }}>
          TEST
        </Grid>
      </div>
      
    </div>
  )
}
