import React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from 'components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'
import {VisuallyHidden} from '@reach/visually-hidden'

const LoginForm = ({handleSubmit, buttonText}) => {
  const formSubmitHandler = e => {
    const {email, password} = e.target.elements

    e.preventDefault()
    handleSubmit({email: email.value, password: password.value})
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <input type="email" id="email" placeholder="Enter Email" />
      <input placeholder="Enter Password" id="password" type="password" />
      <button type="submit">{buttonText}</button>
    </form>
  )
}

const App = () => {
  const [showModal, setShowModal] = React.useState('')
  const handleSubmit = formData => {
    console.log('formData', formData)
  }

  return (
    <>
      <Logo />
      <h1>Bookshelf</h1>
      <button onClick={() => setShowModal('login')}>Login</button>
      <button onClick={() => setShowModal('register')}>Register</button>
      <>
        <Dialog
          isOpen={showModal === 'login'}
          onDismiss={() => setShowModal('')}
          aria-label="Login Form"
        >
          <button className="close-button" onClick={() => setShowModal('')}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </button>
          <LoginForm handleSubmit={handleSubmit} buttonText="Login" />
        </Dialog>
        <Dialog
          isOpen={showModal === 'register'}
          onDismiss={() => setShowModal('')}
          aria-label="Register Form"
        >
          <button className="close-button" onClick={() => setShowModal('')}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </button>
          <p>Register</p>
        </Dialog>
      </>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
