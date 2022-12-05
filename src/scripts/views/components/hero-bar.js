class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero" onclick="">
            <div class="hero__inner">
                <h1 class="hero__title">Find Your Favourite Restaurants</h1>
                <p class="hero__tagline">Apa Yang Anda Inginkan Kami Sediakan</p>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-bar', Hero);
