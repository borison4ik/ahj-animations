import './index.scss';

export default class Chat {
  constructor() {
    this.open = false;
    this.chatBody = document.querySelector('.chat__body');
    this.closeChatBtn = document.querySelector('.chat__close');
    this.chatBtn = document.querySelector('.chat__btn');

    this.chatBtn.addEventListener('click', this.showChat.bind(this));
    this.closeChatBtn.addEventListener('click', this.closeChat.bind(this));

    this.renderChat();
  }

  renderChat() {
    this.chatBody.classList.add('transition');
  }

  showChat() {
    this.chatBody.classList.add('shown');
    this.chatBtn.classList.add('hidden');
  }

  closeChat() {
    if (this.chatBody.classList.contains('shown')) {
      this.chatBody.classList.remove('shown');
    }
    if (this.chatBtn.classList.contains('hidden')) {
      this.chatBtn.classList.remove('hidden');
    }
  }
}
