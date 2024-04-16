import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css'
})
export class MiComponenteComponent {
  products = [
    {
      name: 'Producto 1',
      imageUrl: 'https://www.rarebeauty.com/cdn/shop/files/ECOMM-SOFT-PINCH-LUMINOUS-POWDER-BLUSH-CHEER.jpg?v=1710549028',
      price: 19.99
    },
    {
      name: 'Producto 2',
      imageUrl: 'https://www.rarebeauty.com/cdn/shop/products/Travel-Size-Mascara-Open-SKU.jpg?v=1629246975',
      price: 29.99
    },
    {
      name: 'Producto 3',
      imageUrl: 'https://www.rarebeauty.com/cdn/shop/products/pdp-sku-Liquid-Blush-Dewy-Hope.jpg?v=1645133400',
      price: 39.99
    }
    //agregar +
  ];

  addToCart(product: any) {
    console.log('Producto agregado al carrito:', product);
    // Aquí agregarías la lógica para manejar la adición al carrito de compras
  }

  formatPrice(price: number): string {
    return '$' + price.toFixed(2);
  }
}

