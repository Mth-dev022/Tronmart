import styled from 'styled-components'

import Headphones from './../../assets/Sponsors-images/headphones.png'
import HairMachine from './../../assets/Sponsors-images/hairgroomer.png'
import GameBoy from './../../assets/Sponsors-images/gameboy.png'

export const SponsorContainer = styled.div`
display:flex;
width: 1250px;
margin: 0 auto;
gap: 50px;
font-family: 'Poppins', 'Sans-serif';

.sponsor-content {
    padding: 40px;
    width: 360px;
    background-color: pink;
    margin: 0 auto;
}
.first {
    background-image: url(${Headphones});
    background-repeat: no-repeat;
    background-position: right;
    background-color: #F1F2F6;
}
.second {
    background-image: url(${HairMachine});
    background-position: right;
    background-repeat: no-repeat;
    background-color: #E8EBED;
}
.third {
    background-image: url(${GameBoy});
    background-repeat: no-repeat;
    background-position: right;
    background-color: #F8EDD1;
}
.sponsor-content-paragraph {
    width: 70px;
    font-size: 40px;
    color:#27323F;
}
.sponsor-content-price {
    padding: 15px 0px;
    color: #48515B;
}
.sponsor-content-shop {
    border: none;
    background-color: transparent;
    padding: 10px 0px;
    color: #0769DB;
    font-size: 17px;
    font-weight: 600;
    cursor:pointer;
}
`