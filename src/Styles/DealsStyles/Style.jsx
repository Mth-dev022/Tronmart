import styled from 'styled-components'

export const DealsContainer = styled.div`
    margin: 50px auto;
    width: 1250px;
    background-color: #FFFFFF;
    font-family: 'Poppins', sans-serif;

    .text-container {
        padding: 50px 20px 50px;
        color: #27323F;
        font-weight: 600;
    }
    .best-deals-span {
       font-size: 26px;
    }
    .see-more-span {
        margin-left: 16px;
        color: #0769DA;
        cursor: pointer;
    }
    .deals-container {
       display:flex;
       gap:10px;
       justify-content: center;
    }
    .deals-card {
        width: 18.75rem;
        position:relative;
        padding-bottom:70px;

        &:hover {
            .basket-icon {
                display:flex;
                cursor: pointer;
            }
        }
    }
    .sale {
        position:absolute;
        left: 30px;
        top: 20px;
        background-color:black;
        padding: 1px 10px;
        color:#48515b;
        border-radius: 10px;
        font-size:12px;
        background-color: #FFFFFF;
    }
    .basket-icon {
        display:none;
        justify-content:center;
        position:absolute;
        background-color: #FFFFFF;
        padding: 5px 5px;
        border-radius: 50%;
        right:30px;
        top:20px;
        font-size: 22px;
        color: #48515b;
    }
    .image-content {
        display:flex;
        justify-content:center;
    }
    .stars-container {
        display:flex;
        position:absolute;
        left: 30px;
    }
    .star {
        color: #FCC84C;
    }
    .description {
        font-size:16px;
        width: 300px;
        height: 160px;
        padding: 30px 30px 20px 30px;
        color: #27323f;
    }
    .cut-price {
        text-decoration: line-through;
        padding-left: 30px; 
        font-family: Inter, sans-serif;
        color: #BFC2C6;
    }
    .real-price {
        margin-left: 20px;
        color: #48515b;
    }
    .basket-icon.clicked {
        transform: scale(1.7)
}
`