import './heart.scss';

export default class Heart {
  constructor(options) {
    this.img = new Image();
    if (options?.src) {
      this.img.src = options?.src;
    } else {
      throw new Error('must have src for img');
    }
    this.animations = ['first', 'second', 'third', 'fourth'];
    this.img.className = `heart ${this.animations[this.rnd()]}`;
    this.img.addEventListener('animationend', () => {
      this.img.remove();
    });

    return this.img;
  }

  rnd() {
    return Math.floor(Math.random() * this.animations.length);
  }
}
