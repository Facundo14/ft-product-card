import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';


describe('ProductImage', () => {

    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom product" className='custom-class' />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe mostrar el componente con la imagen del producto', () => { 
        const wrapper = renderer.create(
            <ProductCard product={ product1 } >
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
     })
});