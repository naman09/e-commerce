export interface OrderStatusStepProps {
    icon: any;
    label: string;
}

export const OrderStatusStep = (props: OrderStatusStepProps) => {
    const Icon = props.icon;
    return <div className="flex flex-col items-center">
          <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
            <Icon className="text-white"/>
        </div>
        <p className="w-20 text-center">{props.label}</p>
    </div>
}