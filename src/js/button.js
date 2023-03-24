class Button {
  constructor(elem) {
    this.elem = elem;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML += `
            <a class='btn'>
                Collapse
            </a>
        `;
  }

  // eslint-disable-next-line class-methods-use-this
  click() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
      const container = document.querySelector('.container');
      container.classList.toggle('active');
    });
  }
}

export default Button;
