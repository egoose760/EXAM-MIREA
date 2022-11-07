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
    description: 'Машина - средство передвижения, которое обеспечивает быстрое перемещение по городу.',
    img: 'https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2020/09/07/14/4099186/52d8f45d1ae944564ab28538f5a79af4894c5106.jpg'
  },
  {
    id: 3,
    title: 'Пирог',
    description: 'Пирог от мамы это хорошо, а пирог от бабушки это божественно.',
    img: 'https://img.delo-vcusa.ru/2019/09/pesochniy-pirog-s-yablokami.jpg'
  },
  {
    id: 3,
    title: 'Пирог',
    description: 'Пирог от мамы это хорошо, а пирог от бабушки это божественно.',
    img: 'https://img.delo-vcusa.ru/2019/09/pesochniy-pirog-s-yablokami.jpg'
  }, 
  {
    id: 3,
    title: 'Пирог',
    description: 'Пирог от мамы это хорошо, а пирог от бабушки это божественно.',
    img: 'https://img.delo-vcusa.ru/2019/09/pesochniy-pirog-s-yablokami.jpg'
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
