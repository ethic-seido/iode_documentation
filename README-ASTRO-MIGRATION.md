# Prototype Astro Starlight

This branch keeps the existing MkDocs/Material files intact and adds an isolated Starlight build.

## Local validation

```powershell
npm install
npm run build
```

## Read the Docs

This branch’s `readthedocs.yaml` builds Starlight. Create a preview build using this branch before switching the production project. The Astro configuration derives both `site` and `base` from `READTHEDOCS_CANONICAL_URL`, preventing broken assets and duplicate language/version prefixes.

## Rollback

No production file is replaced by this prototype. To roll back, keep the project configured with `readthedocs.yaml` and deploy `main`; the current MkDocs pipeline remains unchanged.
