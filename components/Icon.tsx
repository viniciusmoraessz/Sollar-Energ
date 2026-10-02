export type IconName = 'home' | 'business' | 'rural' | 'maintenance' | 'arrow-right' | 'arrow-up-right' | 'plus' | 'minus' | 'check';

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 18, className }: IconProps) {
  const shared = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8
  };

  return <svg className={className ? `icon-svg ${className}` : 'icon-svg'} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...shared}>
    {name === 'home' && <><path d="m3.5 10 8.5-7 8.5 7"/><path d="M5.5 9v11h13V9M9.5 20v-6h5v6"/></>}
    {name === 'business' && <><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2m4 0h2M8 11h2m4 0h2M8 15h2m4 0h2M10 21v-3h4v3"/></>}
    {name === 'rural' && <><path d="M3 20h18M5 20v-7l7-5 7 5v7"/><path d="M8 13h.01M12 13h.01M16 13h.01M10 20v-4h4v4"/><path d="M12 3v3m-4-2 2 2m6-2-2 2"/></>}
    {name === 'maintenance' && <><path d="M14.5 6.5a5 5 0 0 0-6.8 6.8L3 18l3 3 4.7-4.7a5 5 0 0 0 6.8-6.8l-3 3-3-3 3-3Z"/><path d="m17 4 3 3"/></>}
    {name === 'arrow-right' && <><path d="M4 12h15M13 5l7 7-7 7"/></>}
    {name === 'arrow-up-right' && <><path d="M7 17 17 7M8 7h9v9"/></>}
    {name === 'plus' && <><path d="M12 5v14M5 12h14"/></>}
    {name === 'minus' && <><path d="M5 12h14"/></>}
    {name === 'check' && <><path d="m5 12 4.5 4.5L19 7"/></>}
  </svg>;
}
