import styled from 'styled-components'

export const HeaderContainer = styled.div`
background-color: #ccc5b9;
width:100%;
height: 9rem;
font-family: 'Inter', sans-serif;

.content-area {
    width: 65%;
    margin: 0 auto;
    position: relative; 
}
.sup-header {
    width:100%;
    background-color: #ccc5b9;;
    display:flex;
    position:relative;
    justify-content: space-between;
    padding: 10px;
    color: #252422;
    font-size:15px;
}
.sup-header-right-menu {
    display: flex;
    gap: 25px;
}
.middle-header {
    display:flex;
    padding: 15px 0px 10px 0px;
}
.circle {
    color: #eb5e28;
    font-size: 25px;
}
h3 {
    margin-left:10px;
    color: #252422;
    padding: 2px;
    font-size: 20px;
}
.search-area {
        position:absolute;
        right:0;
    }
    input {
        outline: none;
        border: none;
        padding: 12px 50px;
    }
    button {
        padding: 12px 5px;
        border:none;
        background-color: #fff;
    }
    .search-icon {
        color: #252422;
    }
.bottom-header {
    padding: 15px 0px 10px 0px;
}

`