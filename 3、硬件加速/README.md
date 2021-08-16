## 硬件加速
### 诸如 <code> perspective</code>、<code> backface-visibility</code> 和<code>  transform:translateZ(x)</code> 等 property 将让浏览器知道你需要硬件加速。
### 如果要对一个元素进行硬件加速，可以应用以下任何一个 property (并不是需要全部，任意一个就可以)：

```
perspective: 1000px;
backface-visibility: hidden;
transform: translateZ(0);
```
### 许多像 GreenSock 这样的 JS 库都会默认你需要硬件加速，并在默认情况下应用，所以你不需要手动设置它们。
