import React from 'react';
import { Control, useController } from 'react-hook-form';

interface DateInputProps {
    label: string;
    name: string;
    control: Control<any>;
    rules?: object;
}

const DateInput: React.FC<DateInputProps> = ({ label, name, control, rules }) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
    });

    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input
                type="date"
                id={name}
                value={value || ''}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                className={`w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
        </div>
    );
};

export default DateInput;
