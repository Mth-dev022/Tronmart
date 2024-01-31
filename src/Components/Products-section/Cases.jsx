import React from 'react'
import { CaseBox } from '../../Styles/Products-section-Styles/CasesStyles'

import Image01 from './../../assets/Cases-images/image01.jpg'
import Image02 from './../../assets/Cases-images/image02.jpg'


const Cases = () => {
    return (
        <CaseBox>
            <div><img src={Image01} /></div>
            <div><img src={Image02} /></div>
        </CaseBox>
    )
}

export default Cases