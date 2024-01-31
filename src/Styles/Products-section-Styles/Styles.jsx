import styled from 'styled-components'

export const ProductsBox = styled.section`
    width: 1250px;
    background-color: #FFFFFF;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid #DCE3E5;
    font-family: 'Poppins', sans-serif;;

    .products-box-content {
        display:flex;
        gap:10px;
        align-items:center;
        padding: 20px 50px;
    }
    .content-items {
        text-align:center;
        padding-top: 40px;
    }
    .products-title {
       padding-top: 10px;
       font-size:17px;
    }
    .products-sub-title {   
        padding-top: 10px;
        font-size:12px;
        color: #7F7F7F;
    }
    .link {
        text-decoration: none;
        color: #27323F;
    }
    `

