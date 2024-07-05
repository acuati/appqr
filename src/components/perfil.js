import React from 'react'
import { Link } from 'gatsby'
import CerrarSesion from './cerrarsesion'
const Perfil = ({id ,email,role})=>{
    if(role=='guest'){
        return(
            <>
            <p>Eres: {email} | {role} </p>
            <CerrarSesion/>
            {/* <ul> */}
                {/* <li>Cambiar modo oscuro/claro</li>
                <li>Cambiar su contraseña</li>
                <li>Contactar con soporte </li>
                <li>Cambiar su avatar</li> */}
                {/* <li><CerrarSesion/></li> */}
            {/* </ul> */}
            </>
        )
    }
    if(role=='employee'){
            return(
                <>
                 <p>Eres: {email} | {role} </p>
                 <CerrarSesion/>
                 {/* <ul> */}
                    {/* <li>Cambiar modo oscuro/claro</li>
                    <li>Cambiar su contraseña</li>
                    <li>Contactar con soporte </li>
                    <li>Cambiar su avatar</li> */}
                    {/* <li><CerrarSesion/></li> */}
                {/* <li><Link to="/index">Crear Qr</Link></li>
                    <li>Administra sus propios codigos qr</li> */}
                {/* </ul> */}
                </>
            )
        }
    if(role=='admin'){
        return(
            <>
            <p>Eres: {email} | {role} </p>
            <CerrarSesion/>
            {/* <ul> */}
            {/* <li>Cambiar modo oscuro/claro</li>
                <li>Cambiar su contraseña</li>
                <li>Contactar con soporte </li>
                <li>Cambiar su avatar</li> */}
                {/* <li><CerrarSesion/></li> */}
                {/* <li><Link to="/index">Crear Qr</Link></li>
                <li>Administra sus propios codigos qr</li>
                <li>Administrar usuarios</li >
                <li>Administrar los codigos qr</li> */}
            {/* </ul> */}
            </>
        )
    }
    }
export default Perfil
















// import React from 'react'