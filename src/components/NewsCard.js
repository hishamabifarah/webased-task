import React from 'react'
import styled from 'styled-components'

const NewsCard = (props) => (
  <div style={{ color: '#fff' }}>
    <Title>The Benefits of Green Apples</Title>
    <div>3/2/2019</div>
    <div>
      Green apples have a high fiber content which helps in increasing the
      body's metabolism. While consuming an apple, make sure that you're not
      tossing the peel in the trash. Consuming apple with its peel improves the
      overall health. Due to its high fiber content, apple helps in
      detoxification process. It keeps the liver and digestive system away from
      harmful elements.
    </div>
  </div>
)

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`

const Description = styled.p`
  color: #fff;
  font-weight: 300;
`

export default NewsCard