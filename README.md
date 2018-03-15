# Password Toggle
Minimalist tool bult for developers and written in vanila js that simplifies adding password visibility toggle button.

Demo: [https://mladenilic.github.io/pwd_toggle/](https://mladenilic.github.io/pwd_toggle/)

### Dependencies

None.

### Example

```js
var pwd = new PwdToggle(document.getElementById('password'), {
  focus: true,
  onShow: function () {
    console.log('show');
  },
  onHide: function () {
    console.log('hide');
  },
  onToggle: function () {
    console.log('toggle');
  }
});
```

### Options

```js
{
  focus: false,             // Should password field be focused after toggle
  onShow: function () {},   // Callback caled after password is shown
  onHide: function () {},   // Callback caled after password is hidden
  onToggle: function () {}, // Callback caled after each toggle (both show and hide)
}
```

### Methods

```js
pwd.show();
pwd.hide();
pwd.toggle();
pwd.isShown();
pwd.isHidden();
```

### Styling the password input element

`PwdToggle` adds `pwd-toggle-input` class to password element on initialization. Further more, `PwdToggle` does not include any styles nor does it add password toggle element itelf.

Here's full example:

```html
<div class="password-wrapper">
  <input type="password" name="password" id="password">
  <a href="#" id="password-toggle">Toggle Password</a>
</div>
```

```js
var toggle = document.getElementById('password-toggle');
var pwd = new PwdToggle(document.getElementById('password'), {
  focus: true,
  onToggle: function () {
    // .pwd-toggle-shown is added to toggle element
    // when password is shown, to allow easier styling
    toggle.classList.toggle('pwd-toggle-shown', this.isShown());
  }
});

toggle.addEventListener('click', function (e) {
  e.preventDefault();

  pwd.toggle();
});
```
