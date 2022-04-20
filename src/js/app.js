import Collapse from './components/collapse';
import Chat from './components/chat';
import LikeButton from './components/likeButton';

import '../css/style.scss';

window.onload = () => {
  const collapse = new Collapse();
  const chat = new Chat();
  const like = new LikeButton();
};
