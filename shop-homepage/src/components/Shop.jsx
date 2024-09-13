import React from 'react'
import data from '../data/List'
import Card from './Card'
import '../Styles/Shop.css'
const Shop = ({addCart,buyProduct}) => {
  return (
    <section>
        {
          data.map((item)=>{
            return <Card className="card" key={item.id} item={item} addCart={addCart} buyProduct={buyProduct}></Card>
          })
        }
    </section>
  )
}

export default Shop