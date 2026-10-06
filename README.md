# Sollar Energ

Landing page em Next.js 14, TypeScript, Tailwind e Framer Motion.

## Executar

```bash
npm install
npm run dev
```

## Variáveis de ambiente

Crie `.env.local` para ajustar o destino do formulário:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=558781641809
# URL canônica, sitemap e Open Graph. Não deixe vazia em produção.
NEXT_PUBLIC_SITE_URL=https://seu-dominio-oficial.com.br
# Opcional: IDs reais, quando forem configurados nas ferramentas externas.
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

O formulário valida os campos e encaminha para o WhatsApp com a mensagem preenchida. O contato padrão da Sollar é 87 8164-1809. Antes da publicação, confirme o número, CNPJ, regiões e métricas.

Sem `NEXT_PUBLIC_SITE_URL`, o site não publica canonical, sitemap ou referência de sitemap com domínio inventado. Defina essa variável assim que o domínio oficial ou endereço Vercel estiver confirmado.

## Deploy na Vercel

Importe este repositório na Vercel, cadastre as variáveis de ambiente e publique. O comando de build é `npm run build`.
