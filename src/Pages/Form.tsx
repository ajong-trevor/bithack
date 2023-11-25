import FormItem from 'antd/es/form/FormItem'
import {Button, Col, Form, Input, Row, Select, Space, Typography, Upload, message} from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadOutlined } from '@ant-design/icons'
import { storeRegistrator } from '../API/api'

const {Text, Title}= Typography

const Options=[
  {
    value: "L200",
    label: "Level 200"
  },
  {
    value: "L300",
    label: "Level 300"
  },
  {
    value: "L400",
    label: "Level 400"
  }
]

const FormFile = () => {
  const [form] = Form.useForm();

  const [level, setLevel]= useState('L200')

  const navigator= useNavigate()

  const [amount, setAmount]= useState<string>()

  const[loading, setLoading]= useState<boolean>(false)

  const onFinished=(values: any)=>{
    values.level= level
    setLoading(true)
    storeRegistrator(values).then(data=>{
      form.resetFields()
      if(data[0]=="Success"){
        message.success('Registration Complete')
        setLoading(false)
        navigator('/')
      }else{
        message.error('Please Register again an error occured')
      }
    })
  }

  const onFinishedFailed= ()=>{
    message.error('An Error Occured')
  }

  const Payer=(value: string)=>{
    setLevel(value)
    switch (value) {
      case 'L200':
          setAmount("tel:*126*9*672772429*1100#")
        break;
      case 'L300':
          setAmount("tel:*126*9*672772429*2100#")
        break;
      case 'L400':
          setAmount("tel:*126*9*672772429*3100#")
        break;
    }
  }
  return (
   <main style={{padding:'5px 5px', width:'95vw'}}>
      <Row justify={'center'} style={{width:'100%'}}>
        <Title className='text-color' level={1}>R E G I S T E R</Title>
        <Text style={{fontFamily:'Roboto', opacity:'0.7', width:'50%', textAlign:'center'}}>Fill Up The Form Inorder  To Become A Candidate</Text>
      </Row>
     <Row justify={'center'}>
     <Form 
        form={form}
        labelCol={{span: 6}}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        style={{ maxWidth: '90vw' }}
        labelAlign={'left'}
        onFinish={onFinished}
        onFinishFailed={onFinishedFailed}
      >
        <FormItem
          style={{marginBottom: 20}}
          label={<Text style={{fontFamily: 'Poppins'}}>Name </Text>}
          name='name'
          rules={[{ required: true, message: 'Please enter Name' }]}
        >
          <Input className='shadow' placeholder='Enter Name' style={{fontFamily: 'Poppins'}}/>
        </FormItem>
        <FormItem
          style={{marginBottom: 20}}
          label={<Text style={{fontFamily: 'Poppins'}}>Email </Text>}
          name='email'
          rules={[{ required: true, message: 'Please enter Email' }]}
        >
          <Input type={'email'} className='shadow' placeholder='Enter Email' style={{fontFamily: 'Poppins'}}/>
        </FormItem>
        <FormItem
          style={{marginBottom: 20}}
          label={<Text style={{fontFamily: 'Poppins'}}>Matricule Number </Text>}
          name='matricule'
          rules={[{ required: true, message: 'Please enter Matricule Number' }]}
        >
          <Input className='shadow' placeholder='Enter Matricule Number' style={{fontFamily: 'Poppins'}}/>
        </FormItem>
        <FormItem
          style={{marginBottom: 20}}
          label={<Text style={{fontFamily: 'Poppins'}}>Phone Number </Text>}
          name='number'
          rules={[{ required: true, message: 'Please enter phone number' }]}
        >
            <Input className='shadow' placeholder='Enter Phone Number' style={{fontFamily: 'Poppins'}}/>
        </FormItem>
        <FormItem
          style={{marginBottom: 20}}
          label={<Text style={{fontFamily: 'Poppins'}}>Selct Level </Text>}
          labelCol={{ span: 7}}
          name='level'
        >
          <Row justify={'space-between'}>
            <Col span={20}>
              <Select className='shadow' options={Options} placeholder="Select a level" onChange={Payer}/>
            </Col>
            {amount!=undefined?(
              <Button href={amount} type={'primary'} style={{backgroundColor:'green', fontFamily:'Roboto'}} >
                Pay
              </Button>
            ):(
              <Button disabled href={amount} type={'primary'} style={{backgroundColor:'gray', fontFamily:'Roboto'}} >
                Pay
              </Button>
            )}
          </Row>
        </FormItem>
        <FormItem
          style={{marginBottom: 20}}
          label={<Text style={{fontFamily: 'Poppins'}}>Transaction ID</Text>}
          name='transaction_id'
          rules={[{ required: true, message: 'Please enter transaction id' }]}
        >
          <Input className='shadow' placeholder='Transaction ID from MoMo message' style={{fontFamily: 'Poppins'}}/>
        </FormItem>
        <Row justify={'center'}>
          <Form.Item style={{width:'50%'}}>
            <Button type='primary' htmlType="submit" style={{width:'100%', background: "linear-gradient(to right, #57C0F1, #5278FA)", borderRadius: '1.5rem'}} loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
     </Row>
   </main>
  )
}

export default FormFile
