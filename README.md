# The HTML JustAuthMe button

## Installation

For the button to work, you need to include the JS library just before the closing `</body>` tag.

### Using our CDN

```html
<script type="text/javascript" src="https://static.justauth.me/medias/jam-button-v2.js"></script>
```

### Hosting your own version

Simply download the production version on this repo or at
[https://static.justauth.me/medias/jam-button-v2.js](https://static.justauth.me/medias/jam-button-v2.js)

## Usage

To instantiate the button, create a `<div>` wherever you want in your page. This div has 2 mandatory attributes :
`data-app-id` (which correspond to your JustAuthMe app ID) and `data-callback` (which correspond to your JustAuthMe app
callback URL that you defined beforehand). Missing one of these two attributes will cause the library to write an error
in your HTML instead of the button.

By default, the button is middle-sized and squared-shaped but these attributes are modifiable: the size can be set to
`small`, `regular` (middle-size) or `large` thanks to the `data-size` attribute. The shape can be set to `squared` or
`rounded` thanks to the `data-shape` attribute.

The language of the button is, by default, set to follow the settings of the user's browser. But if you want to force a
specific language, you can do so by setting the `data-lang` attribute to `en` for english or `fr` for french.

This repo includes a button generator in its `index.html`. Here is an exemple of use of the JustAuthMe button:

```html
<div class="jam-button"
    data-size="regular"
    data-shape="squared"
    data-lang="en"
    data-app-id="YOUR APP ID"
    data-callback="YOUR CALLBACK URL">
</div>
```

## Contribute

If you want to contribute, you can translate the button in any language other than
english and french.

You can do so by editing the `t()` function in `jam-button.js`
and adding the "Login with %s" sentence in your language, associated to your
international language code.

Then, add your language code to the `langs` object of the `justauthme_button_html()`
function and make a pull request. We will review it as soon as possible and gladly
accept it.
