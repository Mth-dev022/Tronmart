import styled from 'styled-components'

export const NavLinks = styled.div`
    display:flex;
    justify-content:space-around;
    font-family: 'Inter', sans-serif;

    .items {
        color: #252422;
        text-decoration: none;
        padding: 5px 15px 5px;
        font-size: 15px;
    }
    .items-all-product {
        color:#252422;
        text-decoration: none;
        padding: 5px 15px 5px 0px;
        font-size: 17px;
    }
    .dropdown-menu {
        display:flex;
        justify-content:center;
        flex-direction:column;
        width: 165px;
        padding: 20px;
        gap: 10px;
        border-radius:5px;
        background-color: #CCC5B9;
        color: #ffff;
    }
    .basket-area {
        position: relative;
        padding: 5px;
    }
    span {
        position: absolute;
        top:0;
        right:0;
        background: #fff;
        width: 15px;
        border-radius: 50%;
        font-size: 12px;
        display:flex;
        justify-content:center;
    }
    .basket-icon {
       font-size: 28px;
        color: #252422;
    }
`
export const Modal = styled.div`
     font-family: 'Poppins', sans-serif;
     display: flex;
     justify-content:center;
     flex-wrap: wrap;
     gap: 30px;

    .modal-content {
        padding: 20px;
        background-color: #FFFFFF;
    }
    .description {
        width: 250px;
        height: 200px;
        padding-bottom: 20px;
    }
    .icon {
        font-size: 35px;
        cursor: pointer;
    }
    `
    export const TotalPrice = styled.div` 
        background-color: #48515b;
        border-radius: 20px;
        width: 100px;
        margin: 20px auto;
        padding: 10px;
        color: #ffffff;
`