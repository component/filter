
# filter

  dynamic dom node filtering

## Installation

    $ component install component/filter

## Example

 When list items contain the relevant text a `.hide` class is added
 for styling the filter.

```js
var filter = require('filter');
var ul = document.querySelector('ul');
var input = document.querySelector('input');

input.onkeyup = function(e){
  var str = input.value;
  filter(ul, function(li){
    return ~li.textContent.indexOf(str);
  });
};
```

## License

  MIT
