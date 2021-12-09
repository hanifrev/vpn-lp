import Head from 'next/head'
import Grid from '@mui/material/Grid';
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import First_Section from '../src/components/first_section';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Lasles VPN</title>
        <meta name="description" content="Free VPN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Grid xs={11} md={11} sx={{ mx: 'auto' }}>
          <First_Section />
        </Grid>
      </div>
      
    </div>
  )
}
