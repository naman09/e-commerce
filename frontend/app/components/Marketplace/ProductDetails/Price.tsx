export interface PriceProps {
    currencyCode: string;
    amount: number;
}

const language: string = "en-IN"; // TODO: get at runtime based on user locale

export const Price = (props: PriceProps) => {

    const getFormattedAmount = (currencyCode: string, amount: number) => {
        return new Intl.NumberFormat(language, {
            style: "currency",
            currency: currencyCode,
        }).format(amount);
    }

    return <span className="font-medium text-xl">
        {getFormattedAmount(props.currencyCode, props.amount)}
    </span>
}