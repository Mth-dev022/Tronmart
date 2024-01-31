import styled from 'styled-components'

export const RecommendationsContainer = styled.div`
    width: 1250px;
    margin: 50px auto;
    font-family: "Poppins", "Sans-serif";

    .recommendation-container {
        display:flex;
        justify-content:center;
        gap: 50px;
        margin-top: 30px;
    }
    .recommendation-content {
        width: 400px;
        padding: 40px;
        background-color:#FFFFFF;
        border-radius: 20px;
    }
    .stars-container {
        color: #FBD023;
        padding-top: 20px;
    }
    .content-text {
        padding: 10px 0px;
        height: 120px;
        width: 270px;
        color: #48515B;
    }
    .image-container {
        display:flex;
        justify-content:flex-start;
    }
    .person-image {
        border-radius: 30px;
        border: 2px solid hsl(348.66,75.23%,57.25%);
        width: 45px;
        height: 45px;
    }
    .person-name {
        padding: 10px 13px;
        color: #48515B;
    }

`