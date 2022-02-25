
import './App.css'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function App() {



  return (
    <div className="login-form">
      <Form>
        <h1> <span className='font-weith-bold '>   Login </span>
        </h1>
        <h2>
          Bienvenido
        </h2>
        <FormGroup>
          <Label>Usuario: </Label>
          <Input type='text' placeholder='Usuario'></Input>
        </FormGroup>
        <FormGroup>
          <Label> Contraseña : </Label>
          <Input type='password' placeholder='pasword'></Input>
        </FormGroup>
        <Button  className='btn-login d-grid gap-2 col-6 mx-auto' badge bg-primary text-wrap>Inicio de sesion</Button>
      </Form>
      
      
    </div>
  )
}

export default App
