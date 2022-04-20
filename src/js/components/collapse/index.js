import './index.scss';

export default class Collapse {
  constructor() {
    this.elemet = document.querySelector('.collapse__widget');
    this.body = document.querySelector('.collapse__body');
    this.btn = document.querySelector('.collapse__btn');
    this.btn.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.body.classList.toggle('open');
  }
}
