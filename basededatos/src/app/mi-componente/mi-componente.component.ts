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
      name: 'Soft Pinch Luminous Powder Blush',
      imageUrl: 'https://www.rarebeauty.com/cdn/shop/files/ECOMM-SOFT-PINCH-LUMINOUS-POWDER-BLUSH-CHEER.jpg?v=1710549028',
      price: 19.99
    },
    {
      name: 'Perfect Strokes Universal Volumizing Mascara Mini',
      imageUrl: 'https://www.rarebeauty.com/cdn/shop/products/Travel-Size-Mascara-Open-SKU.jpg?v=1629246975',
      price: 29.99
    },
    {
      name: 'Soft Pinch Liquid Blush',
      imageUrl: 'https://www.rarebeauty.com/cdn/shop/products/pdp-sku-Liquid-Blush-Dewy-Hope.jpg?v=1645133400',
      price: 39.99
    },

    {
      name: 'Lip Soufflé Matte Lip Cream',
      imageUrl: 'https://www.rarebeauty.com/cdn/shop/products/lip-souffle-matte-lip-cream-kindness-sku-1440x1952.jpg?v=1697656670',
      price: 39.99
    },

    {
      name: 'Kind Words Matte Lipstick',
      imageUrl: 'https://www.rarebeauty.com/cdn/shop/products/kind-words-matte-lipstick-talented.jpg?v=1655864623',
      price: 39.99
    },

    {
      name: 'Stay Vulnerable Glossy Lip Balm',
      imageUrl: 'https://www.rarebeauty.com/cdn/shop/products/Glossy-Lip-Balm-NearlyNeutral-SKU.jpg?v=1608610737',
      price: 39.99
    },

    {
      name: 'Soft Pinch Tinted Lip Oil',
      imageUrl: 'https://www.rarebeauty.com/cdn/shop/products/soft-pinch-tinted-lip-oil-hope-1440x1952.jpg?v=1679094432',
      price: 39.99
    },
    {
      name: 'With Gratitude Dewy Lip Balm',
      imageUrl: 'https://www.rarebeauty.com/cdn/shop/products/Dewy-Lip-APPRECIATE-SKU.jpg?v=1598651396',
      price: 39.99
    },

    
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

