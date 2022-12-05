class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .footer {
            border-top: 2px solid #D5D5D5;
            padding: 15px;
        }
        .footer_content {
            color: black;
            text-align: center;
            font-size: 13px;
        }
        </style>
        
        <div class="footer">
            <div class="footer_content" rel="noreferrer">
            Copyright &copy; 2022, 10's Restaurant
            </div>
        </div>
        `;
  }
}

customElements.define('footer-bar', Footer);
