# Sollar Energia

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
# RESEND_API_KEY=  # reservar para integração de e-mail no servidor
```

O formulário valida os campos e encaminha para o WhatsApp com a mensagem preenchida. O contato padrão da Sollar é 87 8164-1809. Antes da publicação, confirme o número, CNPJ, regiões e métricas.

## Deploy na Vercel

Importe este repositório na Vercel, cadastre as variáveis de ambiente e publique. O comando de build é `npm run build`.
