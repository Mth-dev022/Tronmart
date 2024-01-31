import styled  from 'styled-components';

export const BrandsContainer = styled.div`
    width: 1250px;
    margin: 0 auto;
    display:flex;
    font-family: 'Poppins', 'Sans-serif';

    .brands-container-content {
        padding-left: 20px;
        background-color: #FFFFFF;
    }
    .content-top-text {
       color: #9FB1BB; 
       letter-spacing: 2px;
    }
    .content-middle-text {
        width: 500px;
        font-weight: 600;
        padding: 25px 0px;
        color: #27323F;
    }
    .content-bottom-text {
       color :#9CA7AB;
       font-size: 15px;
    }
    .shopNow {
        margin-top:30px;
        border: none;
        background-color: transparent;
        font-size: 18px;
        cursor: pointer;
        color: #0769DA;
        font-weight: 600;
    }   
    .image {
        display:flex;
        justify-content: flex-end;
    }
    `
    export const LogoContainers = styled.div`
        width: 1250px;
        margin: 0 auto;
        font-family: 'Poppins', 'Sans-serif';

        .paragraph {
            font-size: 25px;
            color: #27323F;
            font-weight: 400;
        }
    .top-brands {
       display:flex;
    }
    .brands-icons {
        display:flex;
        width: 209px;
        align-items:center;
        justify-content:center;
        margin-top: 50px;
        padding: 10px 50px;
        border: 1px solid #9CA7AB;
    }
`
