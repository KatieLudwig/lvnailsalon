import React from 'react';
import './style.css';

const services = [
    {
        category: 'Manicure Services',
        subcategories: [
            {
                name: 'Pink & White Sets',
                items: [
                    { name: 'Pink & White Set', price: '$65 & up' },
                    { name: 'Pink & White Ombre Set', price: '$65 & up' },
                ]
            },
            {
                name: 'Fills',
                items: [
                    { name: 'Pink & White Fill', price: '$55 & up' },
                    { name: 'Pink & White Ombre Fill', price: '$55 & up' },
                    { name: 'Pink Fill', price: '$35 & up' },
                    { name: 'Acrylic Fill', price: '$25 & up' },
                    { name: 'Gel Fill', price: '$40 & up' },
                    { name: 'Hard Gel Fill', price: '$40 & up' }
                ]
            },
            {
                name: 'Sets',
                items: [
                    { name: 'White Tip Set', price: '$40 & up' },
                    { name: 'Gel Set', price: '$50 & up' },
                    { name: 'Acryclic Set', price: '$35 & up' },
                    { name: 'Hard Gel Set', price: '$50 & up' },
                    { name: 'Powder Dip', price: '$50 & up' },
                ]
            },
            {
                name: 'Additional Services',
                items: [
                    { name: 'Polish Change (Regular)', price: '$15' },
                    { name: 'Add French', price: '$5 & up' },
                    { name: 'One Nail Fix', price: '$5 & up' },
                    { name: 'Nail Reshape', price: '$5' },
                    { name: 'Shiny Buff', price: '$5' },
                    { name: 'Chrome Powder', price: '$15' },
                    { name: 'Gel Polish Change', price: '$25' },
                    { name: 'Gel Manicure', price: '$35' },
                    { name: 'Regular Manicure', price: '$20 & up' },
                    { name: 'Rockstar Glitter Manicure', price: '$15' },
                ]
            }
        ]
    },
    {
        category: 'Pedicure Services',
        subcategories: [
            {
                name: 'Basic Services',
                items: [
                    { name: 'Polish Change', description: 'Add Design. Add French.', price: '$15' },
                    { name: 'LV Pedicure', description: 'Relax in our massage chair while your feet are soaked, nails are trimmed and shaped. Cuticles are removed and nails are buffed. Massage with lotion, hot stone, wipe with hot towel then finished with your favorite polish.', price: '$30' }
                ]
            },
            {
                name: 'Deluxe Services',
                items: [
                    { name: 'Deluxe Pedicure', description: 'Start with out LV Pedicure plus the callus remover for callus reduction followed by sugar scrubs, an exfliated cucumber mask is also included to make your legs smooth and supple. Then massage with lotion, hot stone, wipe with hot towel and finished with your favorite polish.', price: '$40' },
                    { name: 'Luxury Pedicure', description: 'Start with our LV Pedicure plus the callus remover  and served along with five spa steps including organic scrub, collagen organic cream mask with hot towels, collagen organic lotion, hot stone massage, and finished with your favorite polish.', price: '$50' }
                ]
            },
            {
                name: 'Additional Pedicure Services',
                items: [
                    { name: 'Gel Polish Change', price: '$58' },
                    { name: 'Gel Polish Add', price: '$58' },
                    { name: 'Add Paraffin Wax', price: '$30' },
                    { name: 'Full Services', price: '$155 & up' }
                ]
            }
        ]
    },
    {
        category: 'Kids Services (Under 11 Years Old)',
        items: [
            { name: 'Polish Change Hands', price: '$7' },
            { name: 'Polish Change Toes', price: '$8' }
        ]
    }
];

const Services = () => (
    <div className='services-container'>
        <h1>Our Services</h1>
        {services.map((serviceCategory, index) => (
            <div key={index}>
                <h2>{serviceCategory.category}</h2>
                {serviceCategory.subcategories ? (
                    serviceCategory.subcategories.map((subcategory, subIndex) => (
                        <div key={subIndex}>
                            <h3>{subcategory.name}</h3>
                            <ul>
                                {subcategory.items.map((item, idx) => (
                                    <li key={idx}>
                                        <div className='service-item'>
                                          <div>
                                        <strong>{item.name}</strong> 
                                            {item.description && <p className='description'>{item.description}</p>}
                                        </div>
                                        <span className='price'>{item.price}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            </div>
                    ))
                ) : (
                        <ul>
                            {serviceCategory.items.map((item, idx) => (
                                <li key={idx}>
                                    <div className='service-item'>
                                        <div>
                                            <strong>{item.name}</strong>
                                        </div>
                                        <span className='price'>{item.price}</span>
                                        </div>
                                </li>
                            ))}
                        </ul>
                )}
                </div>
        ))}
    </div>
);

export default Services; 