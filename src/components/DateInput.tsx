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
        <div className="mb-6">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type="date"
                id={name}
                value={value || ''}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                className={`mt-1 block w-full shadow-sm sm:text-sm border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
        </div>
    );
};

export default DateInput;
