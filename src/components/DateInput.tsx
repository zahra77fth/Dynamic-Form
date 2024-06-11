// src/components/DateInput.tsx
import React from 'react';
import { FieldErrors, UseFormRegister, FieldValues } from 'react-hook-form';
import { getError } from '../utils/formUtils'; // Import the utility function

interface DateInputProps {
    label: string;
    id: string;
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
    validation?: object;
}

const DateInput: React.FC<DateInputProps> = ({ label, id, register, errors, validation }) => {
    const error = getError(errors, id);
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input
                {...register(id, validation)}
                type="date"
                id={id}
                className={`w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {error && <p className="text-red-500 text-xs italic">{(error as any)?.message}</p>}
        </div>
    );
};

export default DateInput;
