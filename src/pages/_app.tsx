import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import '../styles/index.css'

function CustomApp({ Component, pageProps }: AppProps) {

  const [navigation, setNavigation] = React.useState<any[]>([])
  const getNavgation = async () => {
    /**
     * 获取导航数据
     */
    const res = fetch(`${process.env.API_URL}/navigations`)
    const navigation = await (await res).json()
    setNavigation(navigation)

  }
  useEffect(() => {
    getNavgation()
  }, [])

  return (
    <>
      <Header navigator={navigation} />
      <Component {...pageProps} />
    </>
  )
}




export default CustomApp