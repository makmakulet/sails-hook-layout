# sails-hook-layout

Sails Hook for setting custom layout file & directory, this extension adds a new method to Response Object (res) of SailsJs

## How to install
add the following line to your package.json:
```json
    "sails-hook-layout": "https://github.com/makmakulet/sails-hook-layout.git"
```
run npm install

```sh
    $ npm install
```

## How to Use

Controller:

```javascript
//-- api/controllers/TestController.js
module.exports = {
  index: function(req, res) {
    res.useLayout("admin/layout");
  }
};

```

this will look for layout file:
app/views/admin/layout.ejs


## SailsLayout method | res.useLayout( layoutPath )

@layoutPath:  &lt;string&gt; value for the layout to be used