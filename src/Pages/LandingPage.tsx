import { Button, Card, Col, Divider, Row, Space, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const { Text, Title } = Typography

const LandingPage = () => {
  const navigator = useNavigate()
  return (
    <main style={{ width: '90%', padding: '5px 5px' }}>
      <Row justify={'space-between'} align={'middle'} className='shadow-round' style={{ width: '95%', marginLeft: '5%', padding: 8, marginTop: 18 }}>
        <img src='/logo.png' style={{ marginLeft: 5 }} height={40} />
        <Text className='landing-translation' style={{ fontFamily: 'Poppins', fontSize: 15 }} onClick={() => { navigator('/register') }}>Become A Candidate</Text>
      </Row>
      <Row justify={'center'} style={{ marginTop: '5vh' }}>
        <img src='/hero.svg' />
      </Row>
      <Space style={{ marginTop: 15 }} direction={'vertical'} align={'center'}>
        <Title level={1} style={{ fontFamily: 'Poppins', opacity: '0.9', textAlign: 'center' }}>Show Your Coding Skills</Title>
        <center><Text style={{ fontFamily: 'Poppins', textAlign: 'center', position: 'relative', left: "-3px" }}>COTCESA presents a 3days code battle of coding of specified projects at the  Orange Digital Center on Campus. The aim is to help students develop a problem-solving attitude through coding, while implementing everything they learnt.</Text></center>
        <Button onClick={() => { navigator('/register') }} className='landing-translation' style={{ marginTop: 10, borderRadius: '1.5rem', padding: '0px 20px' }} size={'large'}>Register</Button>
        <img src='/Banners.png' style={{ position: 'relative', left: "-3px" }} />
        <Title level={1} style={{ fontFamily: 'Poppins', opacity: '0.9', textAlign: 'center' }}>Who Can Be A Part Of This Competition?</Title>
        <center style={{ marginBottom: 30 }}><Text style={{ fontFamily: 'Poppins', textAlign: 'center', position: 'relative', left: "-3px", }}>All Cot students can be a part of this competion. The winner of each level will be chosen</Text></center>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flexBasis: '45%', display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <img src="/Polygon.png" />
            <Text style={{ fontFamily: 'Poppins', textAlign: 'center', position: 'relative', right: "-10px", fontSize: 18 }}>Level 200</Text>
          </div>
          <div style={{ flexBasis: '45%', display: 'flex', alignItems: 'center', marginBottom: 20 }}>
            <img src="/Polygon.png" />
            <Text style={{ fontFamily: 'Poppins', textAlign: 'center', position: 'relative', right: "-10px", fontSize: 18 }}>Level 300</Text>
          </div>
          <div style={{ flexBasis: '45%', display: 'flex', alignItems: 'center' }}>
            <img src="/Polygon.png" />
            <Text style={{ fontFamily: 'Poppins', textAlign: 'center', position: 'relative', right: "-10px", fontSize: 18 }}>Level 400</Text>
          </div>
        </div>
        <Title level={1} style={{ fontFamily: 'Poppins', opacity: '0.9', textAlign: 'center', marginBottom: 20 }}>Languages To Be Tested On</Title>
        <img src='/Img.svg' style={{ marginBottom: 30 }} />
        <div style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", padding: '25px 10px', width: '90vw', position: 'relative', left: '-5px', marginBottom: 60 }}>
          <Title level={1} style={{ fontFamily: 'Poppins', opacity: '0.9', textAlign: 'center', marginBottom: 20 }}>Register And Be Part of This</Title>
          <img src='/group.png' style={{ marginLeft: '5%' }} />
        </div>
        <div style={{ width: '70vw', padding: 0, border: '0.2px solid black', borderRadius: '0.5rem', marginBottom: 20 }}>
          <div style={{ padding: 20 }}><Text style={{ fontFamily: 'Poppins', fontSize: 31, paddingLeft: 15 }}>Level 200</Text> <br /></div>
          <Divider style={{ width: '100%', margin: 0 }} />
          <div style={{ background: "linear-gradient(to right, #1DAFED, #6663FF)", padding: 20, borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem' }}><Text style={{ fontFamily: 'Poppins', fontSize: 31, paddingLeft: 15, width: '100%' }}> 1,000 FRS</Text></div>
        </div>
        <div style={{ width: '70vw', padding: 0, border: '0.2px solid black', borderRadius: '0.5rem', marginBottom: 20 }}>
          <div style={{ padding: 20 }}><Text style={{ fontFamily: 'Poppins', fontSize: 31, paddingLeft: 15 }}>Level 300</Text> <br /></div>
          <Divider style={{ width: '100%', margin: 0 }} />
          <div style={{ background: "linear-gradient(to right, #FFD15B, #FF9A01)", padding: 20, borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem' }}><Text style={{ fontFamily: 'Poppins', fontSize: 31, paddingLeft: 15, width: '100%' }}> 2,000 FRS</Text></div>
        </div>
        <div style={{ width: '70vw', padding: 0, border: '0.2px solid black', borderRadius: '0.5rem', marginBottom: 20 }}>
          <div style={{ padding: 20 }}><Text style={{ fontFamily: 'Poppins', fontSize: 31, paddingLeft: 15 }}>Level 400</Text> <br /></div>
          <Divider style={{ width: '100%', margin: 0 }} />
          <div style={{ background: "linear-gradient(to right, #8ABDFF, #5278FA)", padding: 20, borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem' }}><Text style={{ fontFamily: 'Poppins', fontSize: 31, paddingLeft: 15, width: '100%' }}> 3,000 FRS</Text></div>
        </div>
        <Button onClick={() => { navigator('/register') }} className='landing-translation' style={{ marginBottom: 30, borderRadius: '1.5rem', padding: '0px 20px' }} size={'large'}>Register Now .</Button>

        <Text style={{ textAlign: 'center', fontFamily: 'Poppins' }}>Contact Us</Text>
        <Text style={{ textAlign: 'center', fontFamily: 'Poppins' }}>654148969 <Divider type='vertical' /> 671236011 <Divider type='vertical' /> 678098406</Text>
        <Text style={{ textAlign: 'center', fontFamily: 'Poppins' }}>@Copyright COTCESA</Text>

      </Space>
    </main>
  )
}

export default LandingPage
