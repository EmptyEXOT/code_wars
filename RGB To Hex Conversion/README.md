# RGB To Hex Conversion

[Task link](https://www.codewars.com/kata/513e08acc600c94f01000001/train/typescript)

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

## Examples (input --> output):
```
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
```

### Tests
```
import { assert } from "chai"
import { rgb } from "./solution"

describe("Tests", function () {
it("Basic Tests", function () {
assert.strictEqual(rgb(0, 0, 0), "000000")
assert.strictEqual(rgb(0, 0, -20), "000000")
assert.strictEqual(rgb(300, 255, 255), "FFFFFF")
assert.strictEqual(rgb(173, 255, 47), "ADFF2F")
})
})
```