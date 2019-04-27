### styled api

(via [styled-components](https://www.styled-components.com/docs/api#styled))

```js
import { Button } from 'components'
import styled from 'styled-components'

const SButton = styled(Button)`
  background:tomato;
`
<SButton>Hello</SButton>
```

---

### css Prop

(via [styled-components](https://www.styled-components.com/docs/api#css))

```js
import { Button } from "components";

<Button
  css={`
    background: tomato;
  `}
>
  Hello
</Button>;
```

---

### component Selector

(via [styled-components](https://www.styled-components.com/docs/advanced#referring-to-other-components))

```js
import {
ButtonGroup,
Button,
_Button
} from 'components'

<ButtonGroup css={` 
  ${Button["Grid"]} {
    background:tomato;
  }`>
    <Button>Hello</Button>
    <Button>Hello</Button>
</ButtonGroup>

```
