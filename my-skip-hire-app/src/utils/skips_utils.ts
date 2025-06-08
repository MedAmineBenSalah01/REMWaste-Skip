export function calculateTotalPrice(priceBeforeVat:number, vat:number) {
    return Math.round(priceBeforeVat * (1 + vat / 100));
}

export function getSkipCapacity(size:number) {
    const capacities : { [key: number]: string } = {
        4: '40-50 bags', 6: '60-70 bags', 8: '80-90 bags',
        10: '100-110 bags', 12: '120-130 bags', 14: '140-150 bags',
        16: '160-170 bags', 20: '200+ bags', 40: '400+ bags'
    };
    return capacities[size] || `${size * 10} bags`;
}

export function scrollToElement(selector:string) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

