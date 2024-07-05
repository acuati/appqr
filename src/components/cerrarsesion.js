import React from 'react'
const CerrarSesion = ()=>{
    const handleCerrarSesion= ()=>{
        localStorage.removeItem('tndm_role')
        localStorage.removeItem('tndm_id')
        localStorage.removeItem('tndm_email')
        window.location.href='/login'
    }
    return (
        <>
        <button onClick={handleCerrarSesion}>Cerrar sesion</button>
        </>
    )
}
export default CerrarSesion