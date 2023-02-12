'use strict';

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  .then((response) => response.json())
  .then((data) => {
    const casa = data?.find((d) => d?.casa?.nombre === 'Dolar Blue')?.casa;

    const price = document.querySelector('.andes-money-amount meta')?.content;

    const afterElement = document.getElementsByClassName('ui-pdp-price')[0];

    if (casa && price && afterElement) {
      const venta = Number(casa.venta.replace(',', '.'));
      const compra = Number(casa.compra.replace(',', '.'));
      const cotizacion = (venta + compra) / 2;
      const newElement = document.createElement('p');
      newElement.classList.add('ui-pdp-color--GREEN');
      newElement.innerText = `u$ ${(price / cotizacion).toFixed(
        2
      )} (Cotización: $ ${cotizacion})`;
      afterElement.append(newElement);
    }
  });
