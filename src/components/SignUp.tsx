import { InfoCircleOutlined, UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
import { SignUpLayout, SignUpForm, AlreadyHaveAnAccount, Title, Message, Text, Image } from "../global"
import { Form, Button, Input, Tooltip } from "antd"
import { useForm } from 'antd/lib/form/Form'
import { PiArrowRight } from "react-icons/pi"
import { useState } from 'react'

interface FormData {
  username: string
  email: string
  password: string
}
interface LogIn {
  email: string
  password: string
}

export const SignUp = () => {
  const [updateComponent, setUpdateComponent] = useState(true)
  const [form] = useForm()
  const onFinish = ({ form }: { form: FormData }): void => {
    console.log(form)
  }
  const onLogIn = ({ form }: { form: LogIn }): void => {
    console.log(form)
  }
  return <SignUpLayout>
    <Image src={'./asset.png'} />
    { updateComponent ? <SignUpForm>
      <Title>Crie seu primeiro acesso</Title>
      <Message>Informe os campos abaixos para cadastrar o seu primeiro acesso!</Message>
      <Form name={'signup'} form={form} onFinish={onFinish} autoComplete={'off'} className={'form'}  >
        <Form.Item name={'username'} style={{ width: '100%' }} rules={[{ required: true, message: 'Por favor, informe o nome' }]}>
          <Input
            placeholder='Nome ou nome de usuário'
            prefix={<UserOutlined />}
            suffix={
              <Tooltip title='Informe o seu nome ou nome de usuário'>
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
            className={'input'}
          />
        </Form.Item>
        <Form.Item name={'email'} style={{ width: '100%' }} rules={[{ required: true, message: 'Por favor, informe o email' }]}>
          <Input
            placeholder='Email'
            prefix={<MailOutlined />}
            suffix={
              <Tooltip title='Informe o seu e-mail'>
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
            style={{ width: '100%' }}
            className={'input'}
          />
        </Form.Item>
        <Form.Item name={'password'} style={{ width: '100%' }} rules={[{ required: true, message: 'Por favor, informe a senha' }]}>
          <Input
            placeholder='Senha'
            prefix={<LockOutlined />}
            suffix={
              <Tooltip title='Informe uma senha para acesso'>
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
            className={'input'}
          />
        </Form.Item>
        <Button htmlType={'submit'} block className={'sign-up-button'}>
          Registre-se
          <PiArrowRight />
        </Button>
      </Form>
      <AlreadyHaveAnAccount>
        <Text>Já tem um acesso?</Text>
        <Text onClick={() => setUpdateComponent(false)} >Entrar</Text>
      </AlreadyHaveAnAccount>
    </SignUpForm> : <SignUpForm>
      <Title>Realize seu acesso</Title>
      <Message>Informe suas credenciais de acesso para acessar a plataforma!</Message>
      <Form name={'signup'} form={form} onFinish={onLogIn} autoComplete={'off'} className={'form'}  >
        <Form.Item name={'email'} style={{ width: '100%' }} rules={[{ required: true, message: 'Por favor, informe o seu email de acesso' }]}>
          <Input
            placeholder='Email'
            prefix={<MailOutlined />}
            suffix={
              <Tooltip title='Informe o seu e-mail de acesso'>
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
            style={{ width: '100%' }}
            className={'input'}
          />
        </Form.Item>
        <Form.Item name={'password'} style={{ width: '100%' }} rules={[{ required: true, message: 'Por favor, informe a sua senha de acesso' }]}>
          <Input
            placeholder='Senha'
            prefix={<LockOutlined />}
            suffix={
              <Tooltip title='Informe a sua senha de acesso'>
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
            className={'input'}
          />
        </Form.Item>
        <Button htmlType={'submit'} block className={'sign-up-button'}>
          Entrar
          <PiArrowRight />
        </Button>
      </Form>
      <AlreadyHaveAnAccount>
        <Text>Não tem um acesso?</Text>
        <Text onClick={() => setUpdateComponent(true)} >Registre-se</Text>
      </AlreadyHaveAnAccount>
    </SignUpForm> }
  </SignUpLayout>
}