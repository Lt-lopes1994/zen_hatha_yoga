export default function verificarWhatsApp({ whatsapp }) {
  window.open(`https://api.whatsapp.com/send?phone=${whatsapp}`, '_blank');
}