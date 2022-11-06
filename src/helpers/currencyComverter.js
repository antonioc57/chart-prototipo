export function currenConverter(value) {
  return isNaN(value) ? value : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}