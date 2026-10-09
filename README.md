# 🛡️ tskeep

<a href="https://www.npmjs.com/package/tskeep"><img  alt="release" src="https://img.shields.io/npm/v/tskeep?style=flat-square&labelColor=0062EB&color=DBE4FF&label=npm&logo=npm"></a>&nbsp;
<a href="https://www.npmjs.com/package/tskeep"><img alt="downloads" src="https://img.shields.io/npm/dy/tskeep?style=flat-square&labelColor=0062EB&color=DBE4FF&label=%F0%9F%93%A5%20downloads"></a>&nbsp;
<a href="https://github.com/kh4f/tskeep/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/github/license/kh4f/tskeep?style=flat-square&labelColor=0062EB&color=DBE4FF&label=%F0%9F%9B%A1%EF%B8%8F%20license"></a>

A Next.js patch that prevents it from modifying your `tsconfig.json`

## 🕹️ Usage

Run `tskeep` to patch your local Next.js installation (`node_modules/next`):

```bash
bunx tskeep
```

To apply the patch automatically after every dependency install, add it to your `prepare` script:

```json
{
  "scripts": {
    "prepare": "bunx tskeep"
  }
}
```