# FT-Product-Card

Este es un paquetes de prueba para despliegue en NPM

### Facundo Tanovich

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ft-product-card';
```

```
<ProductCard
    product={ product }
    initialValues= {{
        count: 4,
        maxCount: 15
    }}
>
    {
        ( { reset, count, increaseBy, isMaxCountReached, maxCount } ) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>

```
