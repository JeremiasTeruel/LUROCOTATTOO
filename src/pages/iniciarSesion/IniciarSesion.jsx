import React, { useEffect } from 'react'
import './IniciarSesion.css'
import { useIniciarSesionMutation } from '../../features/UsuariosApi'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/usuarioSlice'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Input from '../../components/input/Input'
import { Link as LinkRouter } from "react-router-dom";

const IniciarSesion = () => {

    const inputArray = [
        {
            name: "email",
            type: "email",
            placeholder: "tu_email@email.com",
            value: ""
        },
        {
            name: "contraseña",
            type: "password",
            placeholder: "tucontraseña1234",
            value: ""
        }
    ]

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let [userSignIn, {data: resSignIn}] = useIniciarSesionMutation()

    useEffect(() => {
        if(resSignIn){
            dispatch(setCredentials(resSignIn.response))
        }
    }, [resSignIn])

    const signUserForm = (arrayForm) => {
        let inputsForm = arrayForm.filter(element => element.value)
        let data = inputsForm.reduce((values,input) => {
            values[input.name.toLowerCase()] = input.value
            return values
        }, {})
        data.from = "formulario";
        userSignIn(data)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Bienvenidx`,
            showConfirmButton: true,
            timer: 3000
        })
        navigate("/")
    }


    return (
        <main className='container'>
            <h1 className='iniciarSesion_h1'>Iniciar Sesion</h1>
            <Input inputsData={inputArray} event={signUserForm} classPage="iniciarSesion" />
            <div className='p_link_container'>
                <p className='iniciarSesion_p'>No tenes una cuenta?</p>
                <LinkRouter to="/registrarse"  id='linkRouter_iniciarSesion' style={{textDecoration: 'none'}}>Registrate gratis</LinkRouter>
            </div>
        </main>
    )
}

export default IniciarSesion