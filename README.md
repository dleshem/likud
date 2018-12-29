# likud
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

JavaScript client for Israeli Likud party's private membership API.

Implementation relies on an undocumented API used by Likud's mobile app and may break without notice. The code is provided for educational purposes only. Actual usage of this library is strongly discouraged, and may violate Likud's terms of service. 

### Usage
Install the library with `npm install likud`

```javascript
import LikudClient from 'likud';

const likud = new LikudClient();

const accountDetails = await likud.getAccountDetails({
  id: '90555' // Benjamin Netanyahu
});

console.log(accountDetails);
// <- {"Id":"000090555","FirstName":"בנימין","LastName":"נתניהו","Email":"","CityCode":3000,"CityName":"ירושלים","StreetCode":808,"StreetName":"עזה","HouseNum":"35","Appartment":"","ZipCode":"92383","Phone":null,"SecondPhone":"025317200","StatusDate":"2019-03-01T00:00:00+02:00","Branch":3000,"paymentStatus":true,"JoiningDate":"1984-01-15T00:00:00+02:00","positions":["מזכירות-חבר כנסת","שרים-ראש הממשלה","חבר כנסת-חבר כנסת","מרכז הליכוד-חבר כנסת","לשכת הליכוד-חבר כנסת","הנהלת הלשכה-ראש הממשלה"],"positionsCandidate":[]}dannys-mbp:likud dleshem$ 
```

[downloads-image]: https://img.shields.io/npm/dm/likud.svg

[npm-url]: https://npmjs.org/package/likud
[npm-image]: https://img.shields.io/npm/v/likud.svg
