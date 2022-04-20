import Heart from './heart/heart';
import heartSrc from '../../../img/heart.png';
import './index.scss';

export default class LikeButton {
  constructor(options) {
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'like';
    this.btn = document.createElement('button');
    this.btn.className = 'like__btn';
    this.btn.textContent = 'Like';
    this.btn.addEventListener('click', this.onBtnClick.bind(this));
    this.wrapper.appendChild(this.btn);

    this.height = options?.height || 200;
    this.delta = options?.delta || 50;
    this.speed = options?.speed || 500;
    this.ease = options?.ease || 'ease-out';

    document.body.appendChild(this.wrapper);
  }

  onBtnClick() {
    const newHeart = new Heart({
      src: heartSrc,
    });

    this.wrapper.appendChild(newHeart);
    console.log(newHeart);
  }
}
