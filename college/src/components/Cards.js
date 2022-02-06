import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>JNTUA 1946-2021</h1>
            <div className="cards__container">
                <div className="card__wrapper">
                    <ui className="cards__item">
                        <CardItem
                            src = 'images/img-19.jpg'
                            text = "............MAIN BUILDING............"
                            label = 'Main Block'
                            path = '/'
                        />
                        <CardItem
                            src = 'images/p.jpg'
                            text = "............PYRAMID BULDING............"
                            label = 'Main Block'
                            path = '/'
                        />
                    </ui>
                </div>
                <div className="card__wrapper">
                    <ui className="cards__item">
                        <CardItem
                            src = 'images/img12.jpg'
                            text = "MECHANICAL DEPARTMENT"
                            label = 'Main Block'
                            path = '/products'
                        />
                        <CardItem
                            src = 'images/img-17.jpg'
                            text = "EEE DEPARTMENT"
                            label = 'Main Block'
                            path = '/products'
                        />
                        <CardItem
                            src = 'images/img-13.jpg'
                            text = "CIVIL DEPARTMENT"
                            label = 'Main Block'
                            path = '/products'
                        />
                    </ui>
                </div>
                <div className="card__wrapper">
                    <ui className="cards__item">
                        <CardItem
                            src = 'images/img-15.jpg'
                            text = "ECE DEPARTMENT"
                            label = 'Main Block'
                            path = '/products'
                        />
                        <CardItem
                            src = 'images/img-16.jpg'
                            text = "CSE DEPARTMENT"
                            label = 'Main Block'
                            path = '/products'
                        />
                        <CardItem
                            src = 'images/img-18.jpg'
                            text = "CHEMICAL DEPARTMENT"
                            label = 'Main Block'
                            path = '/products'
                        />
                    </ui>
                </div>
            </div>
        </div>
    )
}

export default Cards
