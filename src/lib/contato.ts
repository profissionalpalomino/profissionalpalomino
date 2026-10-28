export const WHATSAPP = "5531984773813";
export const AGENDA_URL = "https://calendar.app.google/RpTN49BD3jJabEB79";
// Perfil da Palomino Tech no Google (place_id da Places API), aberto direto na lista de avaliações.
export const AVALIACOES_URL = "https://search.google.com/local/reviews?placeid=ChIJ4WffRI6_pgARx2M4Tad4mqo";

export const waLink = (texto: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
