# 🔒 tskeep

A Next.js patch preventing it from modifying your `tsconfig.json`

## 🕹️ Usage

```bash
bunx tskeep
```

This patches `node_modules/next`.

To apply the patch automatically after every deps install, add it to the `prepare` script:

```json
{
  "scripts": {
    "prepare": "bunx tskeep"
  }
}
```