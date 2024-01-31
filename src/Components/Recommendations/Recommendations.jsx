import React from 'react'
import { RecommendationsContainer } from '../../Styles/Recommendations-Styles/Styles'
import { IoMdStar } from "react-icons/io";
import { RiFileUserFill } from "react-icons/ri";
import User01 from './../../assets/Recommendations-images/user01.jpg'
import User02 from './../../assets/Recommendations-images/user02.jpg'
import User03 from './../../assets/Recommendations-images/user03.jpg'
import User04 from './../../assets/Recommendations-images/user04.jpg'
import User05 from './../../assets/Recommendations-images/user05.jpg'
import User06 from './../../assets/Recommendations-images/user06.jpg'

const Recomendations = () => {
  return (
    <RecommendationsContainer>
      <h1>What is everyone saying?</h1>

      <div className='recommendation-container'>
        <div className='recommendation-content'>
          <div className='stars-container'>
            <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
          </div>
          <h5 className='content-text'>Dolores porro laboriosam molestias est quo. Et et eos. Ab error modi labore sed eaque est. Quaerat aut est fugiat.</h5>
          <div className='image-container'>
            <img className='person-image' src={User01} />
            <span className='person-name'>Rafael Stokes</span>
          </div>
        </div>

        <div className='recommendation-content'>
          <div className='stars-container'>
            <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
          </div>
          <h5 className='content-text'>Dolorem et cumque consequuntur consequuntur cumque eligendi voluptate. Tempore accusamus tempore consectetur dolor aliquid.</h5>
          <div className='image-container'>
            <img className='person-image' src={User02} />
            <span className='person-name'>Chelsea Turner</span>
          </div>
        </div>

        <div className='recommendation-content'>
          <div className='stars-container'>
            <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
          </div>
          <h5 className='content-text'>Et eum neque ipsum quaerat ratione qui dolore eos. Numquam quo vel amet expedita eius facere minima. Dolor et saepe consequuntur.</h5>
          <div className='image-container'>
            <img className='person-image' src={User03} />
            <span className='person-name'>Yasmin Stokes</span>
          </div>
        </div>

      </div>

      <div className='recommendation-container'>
        <div className='recommendation-content'>
          <div className='stars-container'>
            <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
          </div>
          <h5 className='content-text'>Dolores porro laboriosam molestias est quo. Et et eos. Ab error modi labore sed eaque est. Quaerat aut est fugiat.</h5>
          <div className='image-container'>
            <img className='person-image' src={User04} />
            <span className='person-name'>Drew Asland</span>
          </div>
        </div>

        <div className='recommendation-content'>
          <div className='stars-container'>
            <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
          </div>
          <h5 className='content-text'>Dolorem et cumque consequuntur consequuntur cumque eligendi voluptate. Tempore accusamus tempore consectetur dolor aliquid.</h5>
          <div className='image-container'>
            <img className='person-image' src={User05} />
            <span className='person-name'>Karen Oliver</span>
          </div>
        </div>

        <div className='recommendation-content'>
          <div className='stars-container'>
            <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
          </div>
          <h5 className='content-text'>Et eum neque ipsum quaerat ratione qui dolore eos. Numquam quo vel amet expedita eius facere minima. Dolor et saepe consequuntur.</h5>
          <div className='image-container'>
            <img className='person-image' src={User06} />
            <span className='person-name'>Oliver Scotch</span>
          </div>
        </div>

      </div>

    </RecommendationsContainer>
  )
}

export default Recomendations