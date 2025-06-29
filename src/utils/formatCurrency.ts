export const formatCurrency = (amount: number, currency: string = 'myr') => {
    return new Intl.NumberFormat('en-MY', {
        style: 'currency',
        currency: currency.toUpperCase(),
    }).format(amount / 100);
}; 