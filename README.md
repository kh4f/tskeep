# 🛡️ tskeep

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