class PwdToggle {
  constructor(element, options = {}) {
    this.element = element;
    this.options = options;
    this.options.focus = this.options.focus || false;

    if (!element instanceof HTMLInputElement || element.tagName !== 'INPUT') {
      throw new Error('PwdToggle - Invalid element');
    }

    this.element.classList.add('pwd-toggle-input');
  }

  static get text() {
    return 'text';
  }

  static get password() {
    return 'password';
  }

  show() {
    this.element.type = PwdToggle.text;

    this.options.onShow && this.options.onShow.call(this);
  }

  hide() {
    this.element.type = PwdToggle.password;

    this.options.onHide && this.options.onHide.call(this);
    this.options.focus && this.element.focus();
  }

  toggle() {
    this.isShown() ? this.hide() : this.show();

    this.options.onToggle && this.options.onToggle.call(this);
    this.options.focus && this.element.focus();
  }

  isShown() {
    return this.element.type === PwdToggle.text;
  }

  isHidden() {
    return !this.isShown();
  }
}

global.PwdToggle = PwdToggle;
