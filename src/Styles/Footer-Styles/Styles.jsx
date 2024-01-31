import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 1250px;
    height: 400px;
    margin: 0 auto;
    position:relative;
    font-family: "Poppins", "Sans-serif";

    .image {
        display:flex;
        justify-content:flex-end;
    }
    .line {
        width: 900px;
        height: 1px;
        background-color: black;
        position:absolute;
        top: 20px;
        
    }
    .support-team-container {
        display:flex;
        justify-content:space-around;
        position:absolute;
        width:800px;
        top:65px;
    }
    a {
        color: #48515b;
    }
    h1 {
        padding-top: 15px;
        color: #27323F;
    }
    .subscribe-container {
        display:flex;
        position:absolute;
        top: 240px;
    }
    .icon-container {
        display:flex;
        color: #27323F;
    }
    .sign-up-icon {
        font-size: 55px;
        margin-top: 20px;
    }
    .text {
        width: 200px;
        font-size: 21px;
        margin-left: 20px;
    }
    .sign-up-text {
        font-size:12px;
        width: 200px;
        padding: 20px 20px;
        color: #27323f;
        }
    .input-container {
       margin-left:150px;
       font-size: 35px;
    }
    .email-input {
        padding: 15px 120px;
        font-size: 15px;
    }
    .subscribe-button {
        padding: 15px 50px;
        margin-left: 2px;
        background-color: #27323f;
        color: #FFFFFF;
        border: none;
    }
`
export const Bottom = styled.div`
    width:100%;
    height: 100px;
    background-color: #27323f;
    position:relative;
    
    span {
        position: absolute;
        left: 200px;
        top: 50px;
        color: #95a3ab;
    }
    img {
        position: absolute;
        right:200px;
        top: 50px;
    }
`