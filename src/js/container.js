class Container {
  constructor(elem) {
    this.elem = elem;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const container = document.createElement('div');
    const wrapper = document.querySelector('.wrapper');
    container.classList.add('container');
    container.innerHTML = `
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non dolore atque tenetur sequi, aut vitae maxime officia a iure voluptatum perspiciatis neque ducimus voluptatem assumenda ea fugit illo laboriosam aliquid.</span>
                        `;
    wrapper.appendChild(container);
  }
}

export default Container;
