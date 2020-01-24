import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  filterargs = {
    descricao: localStorage.getItem("descricao"),
    categoria: localStorage.getItem("categoria")
  };

  items: any[] = [
    { 
      img: "https://a-static.mlcdn.com.br/618x463/smartphone-motorola-e6-plus-32gb-cinza-4g-2gb-ram-tela-61-cam-dupla-cam-selfie-8mp-dual-chip/magazineluiza/155560000/0f07a87665af3f9f012a2d4a14c1c164.jpg",
      descricao: "Motorola E6 Plus 32GB Cinza 4G 2GB", 
      preco: "R$ 899,90",
      categoria: "Masculino "
    },{ 
      img: "https://images-americanas.b2w.io/produtos/01/00/img/134582/5/134582536_1GG.jpg",
      descricao: "Motorola One Action 128GB ", 
      preco: "R$ 1229,90",
      categoria: "Feminino "
    },{ 
      img: "https://images-americanas.b2w.io/produtos/01/00/oferta/134253/9/134253978_1GG.jpg",
      descricao: "Samsung Galaxy A10 32GB", 
      preco: "R$ 629,90",
      categoria: "Infantil "
    },{ 
      img: "https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/Android/50002013/1155771130/smartphone-samsung-galaxy-a50-preto-128gb-tela-infinita-de-6-4-camera-traseira-tripla-leitor-digital-na-tela-android-9-0-e-processador-octa-core-50002013.jpg",
      descricao: "Samsung Galaxy A50 Preto 128GB", 
      preco: "R$ 1299,90",
      categoria: "Feminino "
    },{ 
      img: "https://images-na.ssl-images-amazon.com/images/I/61NpXPw0WKL._SL1000_.jpg",
      descricao: "Xiaomi Redmi Note 8 4GB ", 
      preco: "R$ 1099,90",
      categoria: "Masculino "
    },{ 
      img: "https://images-na.ssl-images-amazon.com/images/I/51UGaYg2%2BNL._SL1000_.jpg",
      descricao: "Xiaomi Mi 9T 6GB 128GB ", 
      preco: "R$ 1899,90",
      categoria: "Xiaomi "
    }
  ]
  
  constructor() { }

  ngOnInit() { 
    localStorage.setItem('descricao', '');
  }

  buscaCateg(param) {
    localStorage.setItem('descricao', ' ');
    localStorage.setItem('categoria', param);
    location.reload();
  }

}
