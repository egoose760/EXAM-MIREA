import { Component } from '@angular/core';
import { isSignin } from './components/login/login.component';



export interface IallPosts {
  id: number,
  title: string,
  description: string,
  img: string
}

export const allPosts: IallPosts[] = [
  {
    id: 1,
    title: 'Nike AIR Force 1',
    description: 'Air Force 1 (AF1) — это, пожалуй, одна из самых известных моделей кроссовок из ассортимента Nike. Удобсвто и красивый в одной паре. ',
    img: 'https://www.city-boots.ru/upload/iblock/923/9233413fca3f1b2a7d6702a387d7297d.jpg'
  },
  {
    id: 2,
    title: 'Nile AiR Jordan 1',
    description: 'Легендарная модель, прошедшая через многие поколения. Кроссовки созданные для легендарного баскетболбного игрока - Майкла Джордана.',
    img: 'https://houseofheat.co/app/uploads/2020/07/nike-sb-dunk-low-chicago.jpg'
  },
  {
    id: 3,
    title: 'Nike Dunk',
    description: 'Nike Dunk - простой дизайн, сбалансированная расцветка, универсальность формы и стиля.  Обувь, ставшая основным элементом скейтбординга.',
    img: 'https://images.solecollector.com/complex/images/c_crop,h_615,w_1094,x_24,y_117/f_auto,fl_lossy,q_auto,w_1200/rpctozvveycmjakwrklf/nike-dunk-low-unlv-2021-dd1391-002-pair'
  },
  {
    id: 3,
    title: 'Adidad yeezy 500',
    description: 'Adidas Yeezy 500 - действительно привлекательный, с исключительным мастерством. Колоборация Adidas и Кани Уэста.',
    img: 'https://images.51microshop.com/5744/product/20191016/1_1_BASF_Boost_Adidas_Yeezy_Boost_500_Blush_1571196060614_1.jpg'
  }, 
  {
    id: 3,
    title: 'Nile Jordan 4',
    description: 'Кроссовки Air Jordan 4 сохраняют культовый статус с момента своего дебюта в 1989 году до наших дней. Модель, связанная с одним из самых незабываемых моментов в карьере Майкла Джордана.',
    img: 'https://myreact.ru/wp-content/uploads/2020/08/ct8527_115_2_1.jpg'
  }
]
let a: boolean = isSignin;
console.log(isSignin)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-mirea';

  allPosts: IallPosts[] = allPosts;
}
