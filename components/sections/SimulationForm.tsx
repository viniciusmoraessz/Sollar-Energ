'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/Icon';

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '558781641809';

function parseBillAmount(value: string) {
  const cleaned = value.trim().replace(/[^\d,.-]/g, '');
  const normalized = cleaned.includes(',') ? cleaned.replace(/\./g, '').replace(',', '.') : cleaned;
  return Number(normalized);
}

function isValidBill(value: string) {
  const amount = parseBillAmount(value);
  return Number.isFinite(amount) && amount > 0;
}

type SimulationValues = {
  city: string;
  bill: string;
  name: string;
  consent: boolean;
};

export function SimulationForm() {
  const [done, setDone] = useState(false);
  const [values, setValues] = useState<SimulationValues>({ city: '', bill: '', name: '', consent: false });
  const [error, setError] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (error) errorRef.current?.focus();
  }, [error]);

  function update<K extends keyof SimulationValues>(key: K, value: SimulationValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (error) setError('');
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.name.trim() || !values.city.trim() || !isValidBill(values.bill) || !values.consent) {
      setError('Confira seu nome, cidade, valor da conta e autorização.');
      nameRef.current?.focus();
      return;
    }

    const text = `Olá! Quero simular minha economia. Sou ${values.name.trim()}, de ${values.city.trim()}, e minha conta de luz é em média R$ ${values.bill.trim()}.`;
    setWhatsappUrl(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`);
    setError('');
    setDone(true);
  }

  return <section className="simulation-card" aria-labelledby="simulation-card-title">
    {done ? <div className="simulation-success" role="status">
      <span className="simulation-success-mark"><Icon name="check" size={23}/></span>
      <p className="simulation-kicker">SIMULAÇÃO PREPARADA</p>
      <h3 id="simulation-card-title">Pronto. Só falta enviar sua solicitação.</h3>
      <p>O WhatsApp vai abrir com seus dados organizados para a equipe Sollar.</p>
      <a className="button button-solar" href={whatsappUrl} target="_blank" rel="noreferrer">
        <Image src="/whatsapp-icon.png" alt="" width={24} height={24}/>
        Abrir WhatsApp
      </a>
      <button className="simulation-edit" type="button" onClick={() => setDone(false)}>Revisar meus dados</button>
    </div> : <>
      <div className="form-heading">
        <span>SIMULAÇÃO GRATUITA · SEM COMPROMISSO</span>
        <h3 id="simulation-card-title">Vamos calcular o potencial da sua conta.</h3>
        <p>Preencha seus dados. Sem precisar informar seu telefone.</p>
      </div>

      <form className="simulation-form" onSubmit={submit} noValidate>
        <div className="simulation-step-fields">
          <label>Seu nome
            <input ref={nameRef} name="name" autoComplete="name" value={values.name} onChange={(event) => update('name', event.currentTarget.value)} placeholder="Como podemos te chamar?" aria-invalid={Boolean(error && !values.name.trim())} aria-describedby={error ? 'simulation-error' : undefined}/>
          </label>
          <label>Cidade da instalação
            <input name="city" autoComplete="address-level2" value={values.city} onChange={(event) => update('city', event.currentTarget.value)} placeholder="Ex.: Arcoverde" aria-invalid={Boolean(error && !values.city.trim())} aria-describedby={error ? 'simulation-error' : undefined}/>
          </label>
          <label>Valor médio mensal da conta
            <span className="currency-input"><span aria-hidden="true">R$</span><input name="bill" inputMode="decimal" value={values.bill} onChange={(event) => update('bill', event.currentTarget.value)} placeholder="450" aria-invalid={Boolean(error && !isValidBill(values.bill))} aria-describedby={error ? 'simulation-error' : undefined}/></span>
          </label>
          <label className="consent"><input type="checkbox" name="consent" checked={values.consent} onChange={(event) => update('consent', event.currentTarget.checked)} aria-invalid={Boolean(error && !values.consent)} aria-describedby={error ? 'simulation-error' : undefined}/> <span>Autorizo o uso desses dados para preparar minha simulação. <a href="#privacidade">Privacidade</a>.</span></label>
          <button className="button button-solar simulation-next" type="submit">Preparar simulação <Icon name="arrow-right"/></button>
        </div>
        {error && <p id="simulation-error" ref={errorRef} className="form-status error" role="alert" tabIndex={-1}>{error}</p>}
      </form>
    </>}
  </section>;
}
