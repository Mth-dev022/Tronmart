import styled from 'styled-components'
import Image from './../../assets/Main/image.jpg'

export const ImageSection = styled.section`

.image {
    width: 100%;
    height: 700px;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.brow-box {
    position:absolute;
    right:330px;
    top: 265px;
    width: 250px;
    background-color:#403d39;
    width:400px;
    padding:50px 20px;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
}
.brow-box-content {
    color: #fff;
    position:relative;
}
.brow-bow-paragraph {
    font-size:40px;
    color: #fffcf2;
}
.brow-box-logo-text {
    font-size:17px;
    position: absolute;
    top:7px;
    left: 50px;
}
.brow-box-icon {
    font-size: 35px;
}
.brow-box-text {
    padding: 20px 0;
    color: #CCC5B9;
}
button {
    border:none;
    color:#eb5e28;
    font-size: 17px;
    padding: 10px 0px 0px 0px;
    background-color:transparent;
}
`
export const BottomBox = styled.div`
    width: 1250px;
    background-color:#252422;
    color: #fff;
    margin: 0 auto;
    transform: translateY(-50px);
    border-radius: 2px;
    font-family: 'Inter', sans-serif;

.content {
    display:flex;
    padding: 10px;
}
.content-items {
   display:flex;
   position: relative;
   padding: 10px 20px;
   width: 300px;
   padding: 20px;
   margin-right: 30px;
}
.items-01 {
   padding:0px 10px;
   font-size: 15px;
   color: #FFFCF2;
}
.items-02 {
   font-size:15px;
   padding: 5px;
   position: absolute;
   bottom: 8px;
   left: 60px;
   color: #CCC5B9;
   
   font-size: 13px;
   
}
.icons {
    font-size: 40px;
    color: #EB5E28;
}
`