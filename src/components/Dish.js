import React from 'react'

function Dish({dishItem}) {
  return (
    <div className='dish'>
        <div className='dishImgCon'>
            <img src={dishItem.img} className='dishImg'></img>
        </div>
        <div className='dishDetails'>
            <div className='nameAndPrice'>
                <div className='name'>
                    {dishItem.title[0].toUpperCase()+dishItem.title.slice(1)}
                </div>
                <div className='price'>
                    ${dishItem.price}
                </div>
            </div>
            <div className='desc'>
                {dishItem.desc}
            </div>
        </div>
    </div>
  )
}

export default Dish