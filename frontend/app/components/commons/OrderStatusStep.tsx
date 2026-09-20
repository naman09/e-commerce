import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface OrderStatusStepProps {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    label: string;
    isDisabled: boolean;
}

export const OrderStatusStep = (props: OrderStatusStepProps) => {
    const Icon = props.icon;

    let bgColor = 'bg-blue-400';

    if (props.isDisabled) {
        bgColor = "bg-gray-400";
    }

    return (
        <div className="flex flex-col items-center">
            <div className={"w-12 h-12 rounded-full flex items-center justify-center " + bgColor}>
                <Icon className="text-white" />
            </div>
            <p className="w-20 text-center">{props.label}</p>
        </div>
    );
}