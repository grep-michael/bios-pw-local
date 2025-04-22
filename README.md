# bios-pw-local
A localized version of the bios-pw.org password algorithum so I can interface a python application with bios-pw.org

## Use case

```python
import execjs

with open("bundle.js", 'r') as f:
    js_code = f.read()
        
js_ctx = execjs.compile(js_code)

js_ctx.call("keygen.get_keys","JS4QZW2-E7A8")
```
should return
```python
[['dellHDDOld', ['sssss000'], 0.22097700089216232], ['dellTag', ['FLsUhh40BZr66N5D', 'GLMGs4[[mDMPGdnz'], 6.789545999839902]]
```

